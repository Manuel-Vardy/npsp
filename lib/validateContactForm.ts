export interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  userType: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  userType?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Pure validation function for the contact form.
 * Returns an errors object with entries for each invalid/missing field.
 * Returns an empty object when all fields are valid.
 */
export function validateForm(state: ContactFormState): FormErrors {
  const errors: FormErrors = {};

  if (!state.fullName || state.fullName.trim() === "") {
    errors.fullName = "Full Name is required.";
  }

  if (!state.email || state.email.trim() === "") {
    errors.email = "Email address is required.";
  } else if (!EMAIL_REGEX.test(state.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!state.phone || state.phone.trim() === "") {
    errors.phone = "Phone number is required.";
  }

  if (!state.userType || state.userType.trim() === "") {
    errors.userType = "Please select a user type.";
  }

  if (!state.subject || state.subject.trim() === "") {
    errors.subject = "Subject is required.";
  }

  if (!state.message || state.message.trim() === "") {
    errors.message = "Message is required.";
  }

  return errors;
}
