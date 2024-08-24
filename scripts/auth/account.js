const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('login-form');
const emailInvalidFeedback = document.getElementById('email-invalid');
const passwordRequiredFeedback = document.getElementById('password-required');
const errorMessage = document.getElementById('error-message');
const loadingSpinner = document.getElementById('loading-spinner');
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ERRORS = {
    invalidEmail: 'Email inválido.',
    requiredField: 'Campo obrigatório.',
    invalidLogin: 'Login ou senha incorretos. Tente novamente.',
    genericError: 'Ocorreu um erro. Por favor, tente novamente mais tarde.'
};
let token;

loginForm.addEventListener('submit', handleFormSubmit);
emailInput.addEventListener('input', () => validateInput(emailInput, emailInvalidFeedback, isValidEmail));
passwordInput.addEventListener('input', () => validateInput(passwordInput, passwordRequiredFeedback, isNotEmpty));

function isValidEmail(value) {
    return EMAIL_PATTERN.test(value);
}

function isNotEmpty(value) {
    return value.trim() !== '';
}

function validateInput(inputElement, feedbackElement, validationFn) {
    const value = inputElement.value.trim();

    if (inputElement === emailInput) {
        if (!validationFn(value)) {
            showInvalidFeedback(inputElement, feedbackElement, ERRORS.invalidEmail);
        } else {
            hideInvalidFeedback(inputElement, feedbackElement);
        }
    } else if (inputElement === passwordInput) {
        if (!validationFn(value)) {
            showInvalidFeedback(inputElement, feedbackElement, ERRORS.requiredField);
        } else {
            hideInvalidFeedback(inputElement, feedbackElement);
        }
    }
}

function showInvalidFeedback(inputElement, feedbackElement, message) {
    inputElement.classList.add('is-invalid');
    feedbackElement.style.visibility = 'visible';
    feedbackElement.textContent = message;
}

function hideInvalidFeedback(inputElement, feedbackElement) {
    inputElement.classList.remove('is-invalid');
    feedbackElement.style.visibility = 'hidden';
}

function toggleSpinner(isVisible) {
    loadingSpinner.style.display = isVisible ? 'block' : 'none';
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.visibility = 'visible';
}

function hideError() {
    errorMessage.style.visibility = 'hidden';
}

function isFormValid() {
    validateInput(emailInput, emailInvalidFeedback, isValidEmail);
    validateInput(passwordInput, passwordRequiredFeedback, isNotEmpty);
    return document.querySelectorAll('.is-invalid').length === 0;
}

function redirectToHome(context) {
    window.location.href = 'home.html';
}

function sigIn() {
    alert('signidado');
    return true;
}
async function signIn(email, password) {
    let res;
    const options = {
        email: email,
        password: password
    };
    const resp = await fetch('https://pincel-de-luz.onrender.com/auth/login', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(options)
    })
        .then(response => { return response.json() })
        .then(data => res = data)
        .catch(error => console.log(error));
    return resp.result;
}

async function handleFormSubmit(event) {
    event.preventDefault();

    if (!isFormValid()) return;

    toggleSpinner(true);
    hideError();

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const resp = await signIn(email, password);
        const error = resp.error;
        const data = resp.data;
        if (error) {
            if (error.code === 'INVALID_PASSWORD') {
                showError(ERRORS.invalidLogin);
            } else {
                showError(ERRORS.genericError);
                console.error(error.message);
            }
        } else {
            sessionStorage.setItem('user', data.session.access_token);
            redirectToHome();
        }
    } catch (error) {
        showError(ERRORS.genericError);
        console.error('Unexpected error:', error);
    } finally {
        toggleSpinner(false);
    }
}
