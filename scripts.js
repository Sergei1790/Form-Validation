const form = document.getElementById('form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('cpassword');
const inputs = document.querySelectorAll('#form input');

function validatePasswords() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match");
    } else {
        confirmPasswordInput.setCustomValidity(""); // Clear the custom error
    }
}
// submit.addEventListener('click', (e)=>{
//     e.preventDefault();
//     if (Array.from(inputs).every((input) => input.validity.valid)) {
//         submitForm();
//     } else {
//         // alert('Please fill in all fields');
//         console.log('Please fill in all fields');
//     }
// });
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(passwordInput.value);
    console.log(confirmPasswordInput.value);
    if (!form.checkValidity()) {
         // Prevent form submission if invalid
        console.log('Please fill in all fields');
    } else {
        submitForm(); // Call submitForm if everything is valid
    }
});
inputs.forEach(input =>{
    input.addEventListener('input', () =>{
        if (input === passwordInput || input === confirmPasswordInput) {
            validatePasswords();
        }
        if (input.validity.valid) {
            hideError(input);
        } else{
            showError(input);
        }
    })
})

function showError(input){
    const errorEl =  input.closest('.sund-form__field').querySelector('span.error');
    if (input.validity.valueMissing) {
        errorEl.textContent = 'Please fill up the field';
    } else if (input.validity.typeMismatch) {
        errorEl.textContent = "Entered value needs to be correct type";
        // errorEl.textContent = input.validationMessage;
    } else if (input.validity.tooShort) {
        errorEl.textContent = `Input should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
    } else if(input.validity.patternMismatch){
        errorEl.textContent = `Input should have pattern of 5 numbers;`
    } 
    // this else if for all validations, both inbuild and custom
    else{
        errorEl.textContent = input.validationMessage;
    }

    // if (input === confirmPasswordInput) {
    //     // The validationMessage property of an input element reflects the message
    //     // set by setCustomValidity().
    //     errorEl.textContent = confirmPasswordInput.validationMessage;
    // }

}
function hideError(input){
    const errorEl =  input.closest('.sund-form__field').querySelector('span.error');
    errorEl.textContent = '';
}
function submitForm(){
   console.log('OK');
   document.getElementById('done').textContent = 'DONE';
}