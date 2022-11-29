const password = document.querySelector('#pass')
const password2 = document.querySelector('#pass2')
password2.addEventListener('change', ()=>{
    if (password.value == password2.value) {
        password2.setAttribute('style', 'background-color:green')
    } else {
        password2.setAttribute('style', 'background-color:red')
    }
})