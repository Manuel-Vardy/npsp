"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
}

function parseStatValue(value: string) {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) {
    return { target: Number.NaN, suffix: "", useGrouping: false };
  }

  const digits = match[1];
  return {
    target: Number(digits.replace(/,/g, "")),
    suffix: match[2],
    useGrouping: digits.includes(","),
  };
}

function formatCount(n: number, useGrouping: boolean) {
  const rounded = Math.round(n);
  return useGrouping ? rounded.toLocaleString("en-US") : String(rounded);
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  const { target, suffix, useGrouping } = parseStatValue(value);
  const canAnimate = Number.isFinite(target);
  const [display, setDisplay] = useState(canAnimate ? formatCount(0, useGrouping) : value);
  const nodeRef = useRef<HTMLDivElement>(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (!canAnimate) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplay(formatCount(target, useGrouping));
      return;
    }

    const node = nodeRef.current;
    if (!node) return;

    const duration = 2200;
    let frame = 0;
    let start = 0;

    const tick = (now: number) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(formatCount(target * eased, useGrouping));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayed.current) return;
        hasPlayed.current = true;
        observer.disconnect();
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.45 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [canAnimate, target, useGrouping]);

  return (
    <div ref={nodeRef} className="flex flex-col items-center text-center gap-3">
      {icon && (
        <div className="text-blue-700 text-3xl" aria-hidden="true">
          {icon}
        </div>
      )}
      <p className="text-2xl sm:text-3xl lg:text-[2rem] font-semibold text-black leading-none tracking-tight tabular-nums">
        {canAnimate ? (
          <>
            {display}
            {suffix}
          </>
        ) : (
          value
        )}
      </p>
      <p className="text-sm font-normal text-gray-600">{label}</p>
    </div>
  );
}
