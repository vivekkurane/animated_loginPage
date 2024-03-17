
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const createPassword = document.getElementById('createPassword');
const userName = document.getElementById('userName');
const userId = document.getElementById('userId');
const signUp = document.getElementById('signUp');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// function signUp(){
//     let pass = createPassword.value;
//     let email = userId.value;
//     let username = userName.value;

//     console.log( pass , email, username);

// }

signUp.addEventListener('click', () => {
    let pass = createPassword.value;
    let email = userId.value;
    let username = userName.value;

    console.log( pass , email, username);
})