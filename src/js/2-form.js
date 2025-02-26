const formData = { email: '', message: '' };
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const LocalStorageKey = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', handlerOnLoad);
feedbackForm.addEventListener('input', handlerInput);
feedbackForm.addEventListener('submit', handlerSubmit);

function handlerInput(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else if (event.target.name === 'message') {
    formData.message = event.target.value;
  }
  localStorage.setItem(LocalStorageKey, JSON.stringify(formData));
}

function handlerSubmit(event) {
  event.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    feedbackForm.reset();
    formData.email = '';
    formData.message = '';
    localStorage.removeItem(LocalStorageKey);
  }
}

function handlerOnLoad() {
  const savedSettings = JSON.parse(localStorage.getItem(LocalStorageKey));
  if (savedSettings) {
    formData.email = savedSettings.email;
    formData.message = savedSettings.message;
    emailInput.value = savedSettings.email;
    messageInput.value = savedSettings.message;
  }
}
