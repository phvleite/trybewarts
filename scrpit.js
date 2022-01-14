// Verificação de email e senha

const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btEntrar = document.getElementById('entrar');
const ckbAgreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

submitBtn.disabled = true;

function entrarEscola() {
  if (inputEmail.value === '' || inputPassword.value === '') {
    alert('Email ou senha inválidos.');
  }
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  }
}

function ativaEnviar() {
  submitBtn.disabled = false;
  submitBtn.setAttribute('class', 'submit-btn');
}

function desativarEnviar() {
  submitBtn.disabled = true;
  submitBtn.setAttribute('class', 'submit-disable');
}

function verificaCkbAgreement() {
  if (ckbAgreement.checked) {
    ativaEnviar();
  } else {
    desativarEnviar();
  }
}

btEntrar.addEventListener('click', entrarEscola);
ckbAgreement.addEventListener('click', verificaCkbAgreement);

// Fim verificação de email e senha
