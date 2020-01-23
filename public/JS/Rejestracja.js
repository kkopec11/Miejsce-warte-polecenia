// Form
const form = document.getElementById('myForm');

// Input
const loginUzytk = document.getElementById('loginUzytk');
const password = document.getElementById('haslo');
const imie = document.getElementById('imie');
const lastName = document.getElementById('nazwisko');
const email = document.getElementById('email');

// Głowna funkcja
form.addEventListener('submit', (e)=> {
    event.preventDefault();
    if (
      validateloginUzytk() &&
	  validatePassword() &&
	  validateImie() &&
	  validateLastName() &&
	  validateEmail()

    ) {
      alert("Udało się poprawnie wypełnić formularz !");
    } else {
      console.log(validateloginUzytk(loginUzytk));
	  console.log(validatePassword(password));
	  console.log(validateimie(imie));
	  console.log(validateLastName(lastName));
	  console.log(validateEmail(email));
	  alert("Coś poszło nie tak, formularz zawiera błędy !");	
    }
  });
  
// Kolor walidacji
const red = '#F44336';
const green = "#40ff00";


// Walidatory
function validateloginUzytk() {
  if (checkIfEmpty(loginUzytk)) return;
  if (!checkIfOnlyLetters(loginUzytk)) return;
  return true;
}
function validatePassword() {
	if (checkIfEmpty(password)) return;
	// Minimalna i maksymalna długość hasła
	if (!meetLength(password, 4, 100)) return;
	// Poziom skomplikowania hasła 
    // 1- a
    // 2- a 1
    // 3- A a 1
    // 4- A a 1 @
    if (!containsCharacters(password, 1)) return;
    return true;
  }

function validateEmail(){
    if(checkIfEmpty(email)) return;
    if(!containsCharacters(email, 5)) return;
    return true;
}
function validateImie() {
	if (checkIfEmpty(imie)) return;
	if (!checkIfOnlyLetters(imie)) return;
	return true;
}
function validateLastName() {
	if (checkIfEmpty(lastName)) return;
	if (!checkIfOnlyLetters(lastName)) return;
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
function containsCharacters(field, code) {
    let regEx;
    switch (code) {
      case 1:
        // DUŻA 
        regEx = /(?=.*[a-zA-Z])/;
        return matchWithRegEx(regEx, field, 'Musi zawierać przynajmniej jedną litere');
      case 2:
        // DUŻA + mała 
        regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
        return matchWithRegEx(
          regEx,
          field,
          'Musi zawierać przynajmniej jedną litere i jedną cyfrę'
        );
      case 3:
        // DUŻA + mała + cyfra
        regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
        return matchWithRegEx(
          regEx,
          field,
          'Musi zawierać przynajmniej jedną dużą i małą litere oraz jedną cyfrę'
        );
      case 4:
        // DUŻA + mała + cyfra + znak spelcajny
        regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
        return matchWithRegEx(
          regEx,
          field,
          'Musi zawierać przynajmniej jedną dużą i małą litere, jedną cyfrę oraz jeden snak specjalny'
        );
      case 5:
        // Email 
        regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return matchWithRegEx(regEx, field, 'Podany adres email nie istnieje');
      default:
        return false;
    }
}

function matchWithRegEx(regEx, field, message) {
    if (field.value.match(regEx)) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, message);
      return false;
    }
}