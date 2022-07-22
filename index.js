const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')

const showError = (input,message) => {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

const showSuccess = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

//event listeners
form.addEventListener('submit', e => {
    e.preventDefault()

    console.log(name.value)
    console.log(email.value)
    console.log(password.value)
    console.log(cpassword.value)

    if(name.value === '' || name.value == null){
        //alert('Name cannot be blank')
        showError(name,'Name is required')
    }   else{
        showSuccess(name,)
    }

    if(password.value !== cpassword.value){
        alert('Passswords dont match')
    }

    if(password.value === 'password'){
        alert('password cannot be set as password')
    }

})