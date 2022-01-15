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

function userFullName() {
  const userFirstName = document.getElementById('input-name');
  const userLastName = document.getElementById('input-lastname');
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `Nome: ${userFirstName.value} ${userLastName.value}`;
  return paragraph;
}

function userEmail() {
  const email = document.getElementById('input-email');
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `Email: ${email.value}`;
  return paragraph;
}

function userHouse() {
  const house = document.getElementById('house');
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `Casa: ${house.value}`;
  return paragraph;
}

function userFamily() {
  const families = document.querySelectorAll('input[type="radio"][name="family"]');
  const paragraph = document.createElement('p');
  let string = '';
  families.forEach((family) => {
    if (family.checked) {
      string = family.value;
    }
  });
  paragraph.innerHTML = `Família: ${string}`;
  return paragraph;
}

function userTechnologies() {
  const technologies = document.querySelectorAll('input[type="checkbox"][name="content"]');
  const paragraph = document.createElement('p');
  let string = '';
  technologies.forEach((technology) => {
    if (technology.checked) {
      string += ` ${technology.value},`;
    }
  });
  string = string.substring(0, string.length - 1);
  paragraph.innerHTML = `Matérias: ${string}`;
  return paragraph;
}

function userEvaluation() {
  const evaluations = document.querySelectorAll('input[type="radio"][name="rate"]');
  const paragraph = document.createElement('p');
  let string = '';
  evaluations.forEach((evaluation) => {
    if (evaluation.checked) {
      string = evaluation.value;
    }
  });
  paragraph.innerHTML = `Avaliação: ${string}`;
  return paragraph;
}

function userComment() {
  const comment = document.getElementById('textarea');
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `Observações: ${comment.value}`;
  return paragraph;
}

// Solucão encontrada na branch de Raphael Almeida Martins
// URL (https://github.com/tryber/sd-019-a-project-trybewarts/blob/raphael-martins-trybewarts/script.js)
function qtdCaracteres() {
  counter.innerHTML = 500 - textArea.value.length;
  alertaCorCounter(counter.innerHTML);
}

function printUserData(event) {
  event.preventDefault();
  const printDiv = document.getElementById('user-information');
  printDiv.innerHTML = '';
  const formInputs = document.getElementById('box-form-evaluation');
  formInputs.style.display = 'none';
  printDiv.style.display = 'block';
  printDiv.appendChild(userFullName());
  printDiv.appendChild(userEmail());
  printDiv.appendChild(userHouse());
  printDiv.appendChild(userFamily());
  printDiv.appendChild(userTechnologies());
  printDiv.appendChild(userEvaluation());
  printDiv.appendChild(userComment());
}

btEntrar.addEventListener('click', entrarEscola);
ckbAgreement.addEventListener('click', verificaCkbAgreement);
textArea.addEventListener('keyup', qtdCaracteres);
submitBtn.addEventListener('click', printUserData);

window.onload = () => {
  verificaCkbAgreement();
  qtdCaracteres();
};
