document.addEventListener('DOMContentLoaded', function() {

	// execute function
	validateForm();

	function validateForm() {
		const form = document.querySelector('#form-newsletter');
		const inputName = document.querySelector('#username');
		const inputEmail = document.querySelector('#e-mail');

		const isRequired = value => value === '' ? false : true;

		function showError(input, message) {
			const formField = input.parentElement;

			formField.classList.remove('success');
			formField.classList.add('error');

			const error = formField.querySelector('small')
			error.textContent = message;

		}

		function showSuccess(input) {
			const formField = input.parentElement;

			formField.classList.remove('error');
			formField.classList.add('success');

			const error = formField.querySelector('small');
			error.textContent = '';
		}

		const checkUsername = () => {
			let valid = false;
			const username = inputName.value.trim();

			if (! isRequired(username)) {
				showError(inputName, '* Esse campo não pode ficar vazio.');
			} else {
				showSuccess(inputName);
				valid = true;
			}
			return valid;
		};

		const isEmailValid = (email) => {
			const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		};

		const checkEmail = () => {
			let valid = false;
			const email = inputEmail.value.trim();
			if (! isRequired(email)) {
				showError(inputEmail, '* Esse campo não pode ficar vazio');
			} else if (! isEmailValid(email)) {
				showError(inputEmail, '* Email não é válido.');
			} else {
				showSuccess(inputEmail);
				valid = true;
			}
			return valid;
		};

		inputEmail.addEventListener("blur", checkEmail);
		inputName.addEventListener("blur", checkUsername);

		form.addEventListener("submit", (e) => {
			e.preventDefault();
			const isUsernameValid = checkUsername();
			const isEmailValid = checkEmail();
			const isFormValid = isUsernameValid && isEmailValid;

			const feedBack = document.querySelector('.feedback');

			if (isFormValid) {
				feedBack.textContent = 'Enviado com Sucesso!!'
			}
		})


	}

})


