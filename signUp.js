const user_con = document.querySelector('.user-container');
const regis_btn = document.querySelector('.registration-btn');
const login_btn = document.querySelector('.login-btn');
// console.log("working");

regis_btn.addEventListener('click',() =>{
    user_con.classList.remove('login-section--display')
})
login_btn.addEventListener('click',() =>{
    user_con.classList.add('login-section--display')
})

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

windows.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
