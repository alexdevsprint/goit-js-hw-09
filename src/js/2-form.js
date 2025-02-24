const formData = { email: "", message: "" }
const feedbackForm = document.querySelector('.feedback-form')

document.addEventListener('input', handlerInput)


function handlerInput(event) {
console.log(event.target.value)
}