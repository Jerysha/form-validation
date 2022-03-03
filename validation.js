const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const check = document.getElementById("check");
const form = document.getElementById("form");

form.addEventListener('submit', e =>{
    e.preventDefault();
    checkInputs();
})
function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkValue = check.value.trim();
    
    if(usernameValue === ''){
        setErrors(username, "Username cannot be blank");
    }else{
        setSuccess(username)
    }

    if(emailValue === ''){
        setErrors(email, 'Email cannot be blank')
    }else if(!isSpecialCharacter(emailValue)){
        setErrors(email, 'Not valid email')
    }else{
        setSuccess(email)
    }

    if(passwordValue === ''){
        setErrors(password, 'Password cannot be blank')
    }/*else if(!isSpecialCharacter(passwordValue)){
        setErrors(password, 'At least one special character')
    }*/else{
        setSuccess(password)
    }

    if(checkValue === ''){
        setErrors(check, 'Password check cannot be blank')
    }/*else if(!isSpecialCharacter(check)){
        setErrors(check, 'At least one special character')
    }*/else if(checkValue !== passwordValue){
        setErrors(check, 'Password check does not match')
    }else{
        setSuccess(check)
    }
}
function setErrors(input, message){
    const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccess(input){
    const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
function isSpecialCharacter(value) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}