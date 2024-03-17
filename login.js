
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const createPassword = document.getElementById('createPassword');
const userName = document.getElementById('userName');
const userId = document.getElementById('userId');
const signUp = document.getElementById('signUp');
const signIn = document.getElementById('signIn');
const signEmail = document.getElementById('signEmail');
const signinPass = document.getElementById('signinPass');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


signUp.addEventListener('click', () => {
    let pass = createPassword.value;
    let email = userId.value;
    let username = userName.value;

    console.log( pass , email, username);
    alert(`You have successfully created new account` )
})

signIn.addEventListener('click', () => {
    let pass = signinPass.value;
    let email = signEmail.value;

    alert(`You have successfully signed in` );
})

