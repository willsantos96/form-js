class ValidaFormulario {
    constructor() {
        this.form = document.querySelector('.form');
        this.eventos();
    }
    eventos() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado.');
            this.form.submit();
        }
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
            valid = false;
        }

        return valid;
    }


    senhasSaoValidas() {
        let valid = true;

        const senha = this.form.querySelector('.label-input');

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }

        return valid;
    }



}

const valida = new ValidaFormulario();
