const password = document.querySelector('#pass')
const password2 = document.querySelector('#pass2')
const span = document.querySelector('span')
password2.addEventListener('keyup', ()=>{
    if (password.value == password2.value) {
        password2.setAttribute('style', 'background-color:green');
        span.textContent = '';
    } else {
        password2.setAttribute('style', 'background-color:red');
        span.textContent = '*Passwords don\'t match';
    }
})