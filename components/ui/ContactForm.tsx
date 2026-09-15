"use client";

import { useState, useRef } from "react";
import { validateForm, type ContactFormState, type FormErrors } from "@/lib/validateContactForm";

const USER_TYPE_OPTIONS = [
  { value: "", label: "Select user type" },
  { value: "teacher", label: "Teacher" },
  { value: "school", label: "School" },
  { value: "government-regulator", label: "Government / Regulator" },
  { value: "general", label: "General" },
];

const INITIAL_STATE: ContactFormState = {
  fullName: "",
  email: "",
  phone: "",
  userType: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [attachment, setAttachment] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as soon as the user starts correcting it
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormErrors];
        return next;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttachment(e.target.files?.[0] ?? null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Valid — show success banner
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl bg-green-50 border border-green-200 p-8 text-center"
      >
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
          <svg className="w-7 h-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-green-900 mb-2">Message Received</h3>
        <p className="text-sm text-green-800">
          Thank you for reaching out. The NPSP support team will get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Contact support form">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
          Full Name <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fields.fullName}
          onChange={handleChange}
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
            errors.fullName ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
          }`}
          placeholder="e.g. Ama Mensah"
        />
        {errors.fullName && (
          <p id="fullName-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
          Email Address <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
            errors.email ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
          }`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
          Phone Number <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={fields.phone}
          onChange={handleChange}
          autoComplete="tel"
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
            errors.phone ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
          }`}
          placeholder="+233 XX XXX XXXX"
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      {/* User Type */}
      <div>
        <label htmlFor="userType" className="block text-sm font-semibold text-gray-700 mb-1">
          User Type <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <select
          id="userType"
          name="userType"
          value={fields.userType}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.userType}
          aria-describedby={errors.userType ? "userType-error" : undefined}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition bg-white ${
            errors.userType ? "border-red-400 bg-red-50" : "border-gray-300"
          }`}
        >
          {USER_TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.userType && (
          <p id="userType-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.userType}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">
          Subject <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={fields.subject}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
            errors.subject ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
          }`}
          placeholder="e.g. Question about teacher registration"
        />
        {errors.subject && (
          <p id="subject-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
          Message <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={fields.message}
          onChange={handleChange}
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-y ${
            errors.message ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
          }`}
          placeholder="Describe your query or issue in detail..."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Attachment (optional) */}
      <div>
        <label htmlFor="attachment" className="block text-sm font-semibold text-gray-700 mb-1">
          Attachment{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          ref={fileInputRef}
          type="file"
          id="attachment"
          name="attachment"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
        />
        {attachment && (
          <p className="mt-1 text-xs text-gray-500">
            Selected: <span className="font-medium">{attachment.name}</span>
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm bg-blue-800 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors duration-200 ease-out"
      >
        Send Message
      </button>
    </form>
  );
}
