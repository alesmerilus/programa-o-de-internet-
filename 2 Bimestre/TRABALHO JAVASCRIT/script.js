let  inputnumero1 = document.querySelector("#inputnumero1"); 
let  inputnumero2 = document.querySelector("#inputnumero2");
let BTsomar = document.querySelector("#BTsomar") 
let resultado = document.querySelector("#resuldado")


function somanumero1(){
    //converte o valor retornado no input em numero 
    let num1 = Number(inputnumero1.value)
     let num2 = Number(inputnumero2.value)
     resultado.textContent= num1+num2


}
BTsomar.onclick=function(){
    somanumero1()
}
