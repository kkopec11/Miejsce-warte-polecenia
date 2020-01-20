// Form
const form = document.getElementById('myForm');

// Input
const login = document.getElementById('login');
const haslo = document.getElementById('haslo');

// Głowna funkcja
form.addEventListener('submit', (e)=> {
    event.preventDefault();
    if (
      validateLogin() &&
      validateHaslo()
    ) {
      alert("Udało się poprawnie wypełnić formularz !");
    } else {
      console.log(validateLogin(login));
	  console.log(validateHaslo(haslo));
	  alert("Coś poszło nie tak, formularz zawiera błędy !");	
    }
  });
  
// Kolor walidacji
const red = '#F44336';
const green = "#40ff00";


// Walidatory
function validateLogin() {
  if (checkIfEmpty(login)) return;
  if (!checkIfOnlyLetters(login)) return;
  return true;
}
  function validateHaslo() {
    if (checkIfEmpty(haslo)) return;
    if (!meetLength(haslo, 4, 30)) return;
    if (!ifRegexCorrect(haslo)) return;

    return true;
  }
// Funkcje narzędziowe
function checkIfEmpty(field) {
    if (isEmpty(field.value.trim())) {
      setInvalid(field, `Pole (${field.name}) nie może być puste`);
      return true;
    } else {
      setValid(field);
      return false;
    }
  }
function isEmpty(value) {
    if (value === '') return true;
    return false;
}
function setInvalid(field, message) {
	field.className = 'invalid';
	field.style.backgroundColor = red;
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}
function setValid(field) {
	field.className = 'valid';
	field.style.backgroundColor = green;
    field.nextElementSibling.innerHTML = '';
}
function checkIfOnlyLetters(field) {
    if (/^[a-zA-Z ]+$/.test(field.value)) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, `${field.name} może zawierać tylko litery`);
      return false;
    }
}
function meetLength(field, minLength, maxLength) {
    if (field.value.length >= minLength && field.value.length < maxLength) {
      setValid(field);
      return true;
    } else if (field.value.length < minLength) {
      setInvalid(
        field,
        `${field.name} musi mieć minimum ${minLength} znaków długości`
      );
      return false;
    } else {
      setInvalid(
        field,
        `${field.name} musi być krótszy niż ${maxLength} znaków`
      );
      return false;
    }
  }
  // Regex na: przynajmniej jednż dużą i małą literę oraz jedną cyfrę
  regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
  function ifRegexCorrect(field) {
    if (regEx.test(field.value)) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, `${field.name} musi zawierać przynajmniej jedną dużą i małą litere oraz jedną cyfrę`);
      return false;
    }
}