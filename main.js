//Cardholder Name
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#cardholder');
let nameErrorDiv = document.querySelector('.form__cardholder--error');

// Card Number

let numberCard = document.querySelector('.card__number');
let numberInput = document.querySelector('#cardNumber');
let numberErrorDiv = document.querySelector('.form__inputnumber--error');

// MM

let monthCard = document.querySelector('.card__month');
let monthInput = document.querySelector('#cardMonth');
let monthErrorDiv = document.querySelector('.form__input-mm--error');

//YY

let yearCard = document.querySelector('.card__year');
let yearInput = document.querySelector('#cardYear');
let yearErrorDiv = document.querySelector('.form__input-yy--error');

// CVC

let cvcCard = document.querySelector('.card-back__cvc');
let cvcInput = document.querySelector('#cardCvc');
let cvcErrorDiv = document.querySelector('.form__input-cvc-error');

//Ingreso dinamico del nombre
nameInput.addEventListener('input', ()=>{ 
    if(nameInput.value == ''){
        nameCard.innerText = 'NOMBRE Y APELLIDO'
    } else{
    nameCard.innerText = nameInput.value;
    showError(nameInput, nameErrorDiv, '',false)
    }
})

//Ingreso dinamico del numero

numberInput.addEventListener('input', e=>{
    let inputValue = e.target.value;

    //Actualizando la card en tiempo real
    numberCard.innerText = numberInput.value;
   
    let regExp = /[A-z]/g;
    if(regExp.test(numberInput.value)){
        showError(numberInput, numberErrorDiv, 'Wrong format, only numbers');
    }else{
        numberInput.value = inputValue.replace(/\s/g, "").replace(/([0-9]{4})/g, '$1 ').trim();    
        showError(numberInput, numberErrorDiv, '',false);
    }

    if(numberInput.value == ''){
        numberCard.innerText = '1234 1234 1234 1234'
    } else {
    }
});

// Ingreso dinamico del mes

monthInput.addEventListener('input', ()=>{
    monthCard.innerText = monthInput.value;
    validateLetters(monthInput, monthErrorDiv);
})

// Ingreso dinamico del ano

yearInput.addEventListener('input', ()=>{
    yearCard.innerText = yearInput.value;
    validateLetters(yearInput, yearErrorDiv);
})

// Ingreso dinamico del cvc

cvcInput.addEventListener('input', ()=>{
    cvcCard.innerText = cvcInput.value;
    validateLetters(cvcInput, cvcErrorDiv);
})

// Boton confirm
let confirmBtn = document.querySelector('.form__submit');
let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvcValidation = false;

// Secciones, forms y thanks

let formSection = document.querySelector('.form');
let thanksSection = document.querySelector('.thanks-section');

confirmBtn.addEventListener('click', (e)=>{
    e.preventDefault(); 

    // Validar name
    if(verifyIsFilled(nameInput, nameErrorDiv)){
        nameValidation = true;
    }else{
        nameValidation = false;
    }

    // Validar numero
    if (verifyIsFilled(numberInput, numberErrorDiv) == true){
        if(numberInput.value.length == 19){ 
            showError(numberInput, numberErrorDiv, '', false);
            numberValidation = true;
        }else{
            showError(numberInput,numberErrorDiv, 'Wrong number');
            numberValidation = false;
        }
    };

    //Validar mes
    if (verifyIsFilled(monthInput, monthErrorDiv) == true){
       
        if(parseInt(monthInput.value) > 0 && parseInt(monthInput.value) < 13) {
            showError(monthInput, monthErrorDiv, '', false)
            monthValidation = true;
        }else{
            showError(monthInput, monthErrorDiv, 'Wrong month');
            monthValidation = false;
        }
    }

    // Validar el ano
    if (verifyIsFilled(yearInput, yearErrorDiv) == true){
        if(parseInt(yearInput.value) > 22 && parseInt(yearInput.value) < 29){
            showError(yearInput, yearErrorDiv, '', false);
            yearValidation = true;
        }else{
            showError(yearInput, yearErrorDiv, 'Wrong Year');
            yearValidation = false;
        }
    }
    // Validar CVC
    
    if (verifyIsFilled(cvcInput, cvcErrorDiv) == true){
        if(parseInt(cvcInput.value.length) == 3){
            showError(cvcInput, cvcErrorDiv,'',false);
            cvcValidation = true;
        }else{
            showError(cvcInput, cvcErrorDiv,'Wrong CVC');
            cvcValidation = false;
        }
    }

    if(nameValidation == true && numberValidation == true && monthValidation == true && yearValidation == true && cvcValidation == true){
        formSection.style.display = 'none';
        thanksSection.style.display = 'block';
    }
})

// Funciones
 
 function showError(divInput, divError, msgError, show = true){
     if(show){
         divError.innerText = msgError;
         divInput.style.borderColor = '#ff0000';
     } else{
        divError.innerText = msgError;
        divInput.style.borderColor = 'hsl(270,3%,87%)';
    }
}

function verifyIsFilled(divInput, divError){
    if(divInput.value.length > 0){ 
        showError(divInput, divError, '', false);
        return true;
    } else {
        showError(divInput, divError, "Can't be empty");
        return false;
    }
}

function validateLetters(input, divError){
    let regExp = /[A-z]/g;
    if(regExp.test(input.value)){
        showError(input, divError, 'Wrong format, only numbers');
    }else{
        showError(input, divError, '', false);
    }
}