import validator from "validator";

export default class Login {
    constructor(classForm) {
        this.form = document.querySelector(classForm);
    }

    init() {
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido');
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            alert('Senha precisa conter entre 3 e 50 caracteres.');
            error = true;
        }

        if(!error) e.submit();
    }
}