// Form
const form = document.getElementById('form');

// Input
const login = document.getElementById('login');
const altitude = document.getElementById('altitude');
const latitude = document.getElementById('latitude');
const desc = document.getElementById('desc');

// Głowna funkcja
form.addEventListener('submit', (e)=> {
    event.preventDefault();
    if (
      validateLogin() &&
      validateAltitude() &&
      validateLatitude() &&
      validateDesc()
    ) {
      alert("Udało się poprawnie wypełnić formularz !");
    } else {
      console.log(validateLogin(login));
      console.log(validateAltitude(altitude));
      console.log(validateLatitude(latitude));
      console.log(validateDesc(desc));
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
function validateAltitude() {
    if (checkIfEmpty(altitude)) return;
    if (!ifRegexCorrect(altitude)) return;
    return true;
}
function validateLatitude() {
  if (checkIfEmpty(latitude)) return;
  if (!ifRegexCorrect(latitude)) return;
  return true;
}
function validateDesc() {
  if (checkIfEmpty(desc)) return;
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

// Regex wysokośc oraz szerokość geograficzną

// Pasujące:
// +90.0, -127.554334
// 45, 180
// -90, -180
// -90.000, -180.0000
// +90, +180
// 47.1231231, 179.99999999

// Nie pasujące:
// -90., -180.
// +90.1, -100.111
// -91, 123.456
// 045, 180

regEx = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
function ifRegexCorrect(field) {
  if (regEx.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `${field.name} musi zawierać poprawną formę danych geograficznych Np:"+90.0, -127.554334"`);
    return false;
 }
}