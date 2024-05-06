const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const email = form.elements.email;
const message = form.elements.message;

if (localStorage.length > 0) {
  email.value = JSON.parse(localStorage.getItem(localStorageKey)).email;
  message.value = JSON.parse(localStorage.getItem(localStorageKey)).message;
}

const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', event => {
  if (event.target.type === 'email') {
    formData.email = event.target.value.trim();
  } else {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
  console.log(localStorage);
});

form.addEventListener('submit', event => {
  if (email.value === '' || message.value === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.clear();
  form.reset();
});
