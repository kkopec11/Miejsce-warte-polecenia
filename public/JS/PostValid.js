// Form
const form = document.getElementById('myForm');

// Input
const title = document.getElementById('title');
const score = document.getElementById('score');
const desc = document.getElementById('desc');
const idAutora = document.getElementById('idAutora');
const idMiejscaPostu = document.getElementById('idMiejscaPostu');


// Głowna funkcja
form.addEventListener('submit', (e)=> {
    if (
      validateTitle() && 
	  validateScore() &&
    validateDesc() &&
    validateAutor() &&
	  validateMiejsce()

    ) {
      alert("Udało się poprawnie dodać post !");
    } else {
      console.log(validateTitle(title));
	  console.log(validateScore(score));
    console.log(validateDesc(desc));
    console.log(validateAutor(idAutora));
	  console.log(validateMiejsce(idMiejscaPostu));
    alert("Coś poszło nie tak, formularz zawiera błędy !");	
    event.preventDefault();
    }
  });
  
// Kolor walidacji
const red = '#F44336';
const green = "#40ff00";

// Walidatory
function validateTitle() {
	if (checkIfEmpty(title)) return;
	if (!checkIfOnlyLetters(title)) return;
	return true;
}
function validateScore() {
	if (score.value){
    setValid(score)
    if (!checkIfOnlyNumber(score)) return; 
    if (!checkIf101(score)) return; 
    return true;
	}
	setInvalid(score, `Pole (${score.name}) musi mieć wybraną wartość`);
	return false;
}
function validateDesc() {
  if (checkIfEmpty(desc)) return;
	return true;
}
function validateAutor() {
  if (checkIfEmpty(idAutora)) return;
  if (!checkIfOnlyNumber(idAutora)) return;

	return true;
}
function validateMiejsce() {  
  if (checkIfEmpty(idMiejscaPostu)) return;
  if (!checkIfOnlyNumber(idMiejscaPostu)) return;
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
function checkIfOnlyNumber(field) {
  if (/^[0-9]+$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `${field.name} może zawierać tylko cyfry`);
    return false;
  }
}
function checkIf101(field) {
  if (/^(?:[1-9]|0[1-9]|10)$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `${field.name} może zawierać tylko cyfry w przedziale 1-10`);
    return false;
  }
}