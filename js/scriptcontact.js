
let choiceValue = adopt.checked ? "adopt" : "donate"

function getChoice() {
 return document.querySelector('input[name="choice"]:checked')
}

document.addEventListener("DOMContentLoaded", function() {
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message');
})

function isNotEmpty(value) {
 if (value == null || typeof value == 'undefined' ) return false;
 return (value.length > 0);
}

function isEmail(email) {
  console.log('we here too')
 let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
 return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
 if (field == null) return false;

 let isFieldValid = validationFunction(field.value)
 if (!isFieldValid) {
 field.className = 'placeholderRed';
 } else {
 field.className = '';
 }

 return isFieldValid;
}

function isValid(fields) {
  var valid = isNotEmpty(fields.username) &&
  isEmail(fields.email) &&
  isNotEmpty(fields.phone) &&
  isNotEmpty(fields.choice) &&
  isNotEmpty(fields.message);

  return valid;
}

class User {
  constructor(username, email, phone, choice, message) {
      this.username = username;
      this.email = email;
      this.phone = phone;
      this.choice = choice;
      this.message = message;
  }
}

function sendContact(){
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var choice = document.querySelector('input[name="choice"]:checked').value;
  var message = document.getElementById('message').value;

  var userObject = new User(username,email,phone,choice,message);

	if(isValid(userObject)){
    alert(`${username} thank you for registering.`);		
    window.open("review.html");
    debugger;
	}else{		
		alert("There was an error")
	}
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});