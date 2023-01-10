'use strict';

const enteredData = document.querySelector('.form__data input');
const formBtn = document.querySelector('.form__btn');
const checkboxData = document.querySelectorAll('.form__checkbox');
const resultBanner = document.querySelector('.result');
const USD = 400;
const EUR = 500;
const GBP = 450;

checkboxData.forEach(item => {
    item.addEventListener('click', () => {
        if(item.checked){
            let checkboxes = document.querySelectorAll('.form__checkbox');
            for (let i=0; i<checkboxes.length; i++) { 
                checkboxes[i].checked = false; 
            }
            item.checked = true;
        }
    });
})

enteredData.addEventListener('input', () => {
    enteredData.value = enteredData.value.replace(/\D/, '');
});

function countMoney(localСurrency, anotherCurrency){
    const result = localСurrency / anotherCurrency
    return result.toFixed(2);
}

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkboxData.forEach((item) => {
        if(enteredData.value == ''){
            resultBanner.textContent = 'Пожалуйста, введите число';
        }
        if(item.checked){
            switch (item.getAttribute('id')) {
                case 'usd':
                    resultBanner.textContent = `${enteredData.value} тенге будет ${countMoney(enteredData.value, USD)} долларов США`;
                    break;
                case 'eur':
                    resultBanner.textContent = `${enteredData.value} тенге будет ${countMoney(enteredData.value, EUR)} евро`;
                    break;
                case 'gbp':
                    resultBanner.textContent = `${enteredData.value} тенге будет ${countMoney(enteredData.value, GBP)} фунтов Стерлинга`;
                    break;
            }
        }
    });
});