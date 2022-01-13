// Verificação de email e senha

const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btEntrar = document.getElementById('entrar');

function entrarEscola() {
  if (inputEmail.value === '' || inputPassword.value === '') {
    alert('Email ou senha inválidos.');
  }
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  }
}

btEntrar.addEventListener('click', entrarEscola);

// Fim verificação de email e senha
