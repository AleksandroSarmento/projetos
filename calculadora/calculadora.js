'use strict'
console.log("Olá");

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;

const atualizarDisplay = (texto) => {
    if (novoNumero){
        display.textContent = texto; 
        novoNumero = false;

    }else{
        display.textContent += texto.toLocaleString('BR'); 
    }    
    document.querySelector(`#igual`).focus();
};



const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

const selecionarOperador = () => {novoNumero = true;}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));

