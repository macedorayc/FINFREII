import prompt from 'prompt-sync'
let ler = prompt()

import {depositar,sacar,exibirSaldo,composto} from './financeiro.js' 
import {exi} from './exibicao.js' 
import {opcao} from './menu.js' 


exi('Qual o seu saldo atual?')
let saldo = Number(ler())

let continuar = true

while(continuar == true){
 let opc = opcao ()

 if (opc == 5){
    exi('Saindo...')
    continuar = false
}


 else if (opc == 1) {
 saldo = depositar(saldo)
 }

 else if (opc == 2) {
 saldo = sacar(saldo)
}
else if (opc == 4) {
    saldo = composto(saldo)
        }
else if (opc == 3) {
exibirSaldo(saldo)
}




}