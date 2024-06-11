import prompt from 'prompt-sync'
let ler = prompt ()

import {exi} from './exibicao.js' 

export function depositar(saldo) { 
  exi('Quanto quer depositar?')

    let depositado = Number(ler())
    let novoValor = 0

   while (depositado <= 0){
        exi('Quanto quer depositar?')
        depositado = Number(ler()); 
    }
    if(depositado == 'c'){
      novoValor = saldo
    }
    
    novoValor = saldo + depositado; 
  
    
    return novoValor; 
   } 

  export function sacar(saldo) {
    exi('Quanto quer sacar?')
    let sacado = Number(ler())
    let novoValor = 0

   while (sacado <= 0){
        exi('Quanto quer sacar?')
        sacado = Number(ler()); 
    }
    if(sacado == 'c'){
      novoValor = saldo 
    }
   
    novoValor = saldo - sacado; 
    
    
    return novoValor; 
   } 



 export function exibirSaldo(saldo) {

  let x = saldo.toFixed(2)
   exi(x)

   }


   export function composto (saldo){
    let novoValor = saldo*((1 + 0.06 )**3)
    return novoValor;
   }
   