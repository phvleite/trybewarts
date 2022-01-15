// Verificação de email e senha

const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btEntrar = document.getElementById('entrar');
const ckbAgreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function entrarEscola(event) {
  event.preventDefault();
  if (inputEmail.value === '' || inputPassword.value === '') {
    alert('Email ou senha inválidos.');
  }
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  }
}

function verificaCkbAgreement() {
  if (ckbAgreement.checked) {
    submitBtn.disabled = false;
    submitBtn.setAttribute('class', 'submit-btn');
  } else {
    submitBtn.disabled = true;
    submitBtn.setAttribute('class', 'submit-disable');
  }
}

function alertaCorCounter(valor) {
  if (valor > 250) {
    counter.style.backgroundColor = 'rgb(22, 160, 133)';
  }
  if (valor <= 250) {
    counter.style.backgroundColor = 'rgb(243, 156, 18)';
  }
  if (valor <= 100) {
    counter.style.backgroundColor = 'rgb(231, 76, 60)';
  }
}

// Solucão encontrada na branch de Raphael Almeida Martins
// URL (https://github.com/tryber/sd-019-a-project-trybewarts/blob/raphael-martins-trybewarts/script.js)
function qtdCaracteres() {
  counter.innerHTML = 500 - textArea.value.length;
  alertaCorCounter(counter.innerHTML);
}

btEntrar.addEventListener('click', entrarEscola);
ckbAgreement.addEventListener('click', verificaCkbAgreement);
textArea.addEventListener('keyup', qtdCaracteres);

window.onload = () => {
  verificaCkbAgreement();
  qtdCaracteres();
};
