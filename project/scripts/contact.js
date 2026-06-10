// ============================================================
// John D's Web Gatherer — contact.js
// Form validation and draft auto-save via localStorage
// ============================================================

const DRAFT_KEY = 'wg-form-draft';

// --- Collect current form field values into an object ---
function collectFormData(form) {
  return {
    name:       form.name.value,
    email:      form.email.value,
    experience: form.experience.value,
    message:    form.message.value,
    newsletter: form.newsletter.checked,
  };
}

// --- Save form draft to localStorage ---
function saveDraft(form) {
  const data = collectFormData(form);
  localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
}

// --- Restore a previously saved draft into the form ---
function loadDraft(form) {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.name)       form.name.value       = data.name;
    if (data.email)      form.email.value      = data.email;
    if (data.experience) form.experience.value = data.experience;
    if (data.message)    form.message.value    = data.message;
    if (data.newsletter) form.newsletter.checked = data.newsletter;
  } catch {
    localStorage.removeItem(DRAFT_KEY);
  }
}

// --- Show or clear an inline field error ---
function setFieldError(fieldId, message) {
  const field   = document.getElementById(fieldId);
  const errorEl = document.getElementById(`${fieldId}-error`);
  if (!field || !errorEl) return;

  if (message) {
    field.classList.add('error');
    errorEl.textContent = message;
  } else {
    field.classList.remove('error');
    errorEl.textContent = '';
  }
}

// --- Validate all required fields; returns true when all pass ---
function validateForm(form) {
  let isValid = true;

  // Name: required, at least 2 characters
  const name = form.name.value.trim();
  if (name.length < 2) {
    setFieldError('name', 'Please enter your name (at least 2 characters).');
    isValid = false;
  } else {
    setFieldError('name', '');
  }

  // Email: required, basic format check
  const email        = form.email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setFieldError('email', 'Please enter a valid email address.');
    isValid = false;
  } else {
    setFieldError('email', '');
  }

  // Experience: required select
  if (!form.experience.value) {
    setFieldError('experience', 'Please select your experience level.');
    isValid = false;
  } else {
    setFieldError('experience', '');
  }

  // Message: required, at least 10 characters
  const message = form.message.value.trim();
  if (message.length < 10) {
    setFieldError('message', 'Please enter a message (at least 10 characters).');
    isValid = false;
  } else {
    setFieldError('message', '');
  }

  return isValid;
}

// --- Handle form submission ---
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  if (!validateForm(form)) return;

  // Build and display success message using template literal
  const successMsg  = document.getElementById('success-message');
  const nameDisplay = successMsg.querySelector('.success-name');
  nameDisplay.textContent = form.name.value.trim();
  successMsg.classList.add('visible');
  successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Clear draft and hide the form
  localStorage.removeItem(DRAFT_KEY);
  form.reset();
  form.hidden = true;
}

// --- Initialize the contact form ---
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Restore any previously saved draft
  loadDraft(form);

  // Auto-save draft on every input change
  form.addEventListener('input', () => saveDraft(form));

  // Handle submission
  form.addEventListener('submit', handleSubmit);

  // Clear error styling when the user focuses a field
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('focus', () => field.classList.remove('error'));
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);
