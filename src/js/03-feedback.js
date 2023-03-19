import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";

const mail = document.querySelector('input')
const message = document.querySelector('textarea')

const localStorageData = localStorage.getItem(LOCALSTORAGE_KEY)


let formDataValues = {};

const saveMessage = evt => {
    formDataValues[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formDataValues));
}

const formSubmit = evt => {
    evt.preventDefault();
    if (mail.value !== '' && message.value !== '') {
        console.log(formDataValues)
        localStorage.removeItem(LOCALSTORAGE_KEY)
        evt.target.reset()
        return
    }
    alert('Заповніть всі поля')
}

function fillForm() {
    if (localStorageData) {
        formDataValues = JSON.parse(localStorageData);
        mail.value = formDataValues.email || '';
        message.value = formDataValues.message || '';

     }
 }

form.addEventListener("input", throttle(saveMessage, 500))
form.addEventListener("submit", formSubmit)
fillForm();
