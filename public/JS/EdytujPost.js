// Form
const form = document.getElementById('form');

// Input
const title = document.getElementById('title');
const score = document.getElementById('score');
const desc = document.getElementById('desc');

// Głowna funkcja
form.addEventListener('submit', (e)=> {
    event.preventDefault();
    if (
      validateTitle() && 
	  validateScore() &&
	  validateDesc()
    ) {
      alert("Udało się poprawnie wypełnić formularz !");
    } else {
      console.log(validateTitle(title));
	  console.log(validateScore(score));
	  console.log(validateDesc(desc));
	  alert("Coś poszło nie tak, formularz zawiera błędy !");	
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
		return true;
	}
	setInvalid(score, `Pole (${score.name}) musi mieć wybraną wartość`);
	return false;
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