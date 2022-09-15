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

//Ingreso dinamico del nombre
nameInput.addEventListener('input', ()=>{ 
    if(nameInput.value == ''){
        nameCard.innerText = 'NOMBRE Y APELLIDO'
    } else{
    nameCard.innerText = nameInput.value
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
        hideError(numberInput, numberErrorDiv);
    }

    if(numberInput.value == ''){
        numberCard.innerText = '1234 1234 1234 1234'
    } else {
        
    }
});

// Ingreso dinamico del mes

monthInput.addEventListener('input', ()=>{
    monthCard.innerText = monthInput.value;
})

// Ingreso dinamico del ano



// Boton confirm

let confirmBtn = document.querySelector('.form__submit');

confirmBtn.addEventListener('click', (e)=>{
    e.preventDefault(); 
    
    //Validar mes
    if (parseInt(monthInput.value) > 0 && parseInt(monthInput.value) <=12){ 
            hideError(monthInput, monthErrorDiv);
            //showError(monthInput, monthErrorDiv, '', false)
        } else{
            showError(monthInput, monthErrorDiv, 'Month invalid')
        }
})


// Funciones

function showError(divInput, divError, msgError){
    divError.innerText = msgError;
    divInput.style.borderColor = '#FF0000';
}

function hideError(divInput, divError){
    divError.innerText = '';
    divInput.style.borderColor = '';
}