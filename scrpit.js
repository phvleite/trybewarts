// Verificação de email e senha

const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btEntrar = document.getElementById('entrar');
const ckbAgreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
let count = 500;
counter.innerText = count;

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

function verificaTextArea() {
  console.log(textArea.value);
  // textArea.clear();
  // if (textArea.value === ' ') {
  //   count = 500;
  // }
  counter.innerText = count;
  alertaCorCounter(count);
}

function atualizaContador(valor) {
  if (count < 500 && valor > 0) {
    count += 1;
  } else {
    count -= 1;
    if (count < 0) {
      count = 0;
    }
  }
  verificaTextArea();
}

function verificaValorTecla(evento) {
  const keyValue = evento.keyCode;
  if (keyValue === 8 && count < 500) {
    atualizaContador(1);
  } else if (keyValue >= 33 && keyValue <= 255) {
    atualizaContador(-1);
  }
}

btEntrar.addEventListener('click', entrarEscola);
ckbAgreement.addEventListener('click', verificaCkbAgreement);
textArea.addEventListener('keydown', verificaValorTecla);
