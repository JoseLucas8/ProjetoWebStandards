var valor1 = 0;
var valor2 = 0;


function soma(){
    valor1 = parseFloat(document.getElementsByClassName("inputVisorCalculadora")[0].value);
    Limpar();
}

function subtracao(){
    valor1 = parseFloat(document.getElementsByClassName("inputVisorCalculadora")[0].value);
    Limpar();

}

function multiplicacao(){
    valor1 = parseFloat(document.getElementsByClassName("inputVisorCalculadora")[0].value);
    Limpar();

}

function divisao(){
    valor1 = parseFloat(document.getElementsByClassName("inputVisorCalculadora")[0].value);
    Limpar();

}


function Limpar(){
 document.getElementsByName("visorCalculadora")[0].value = 0;
}

function numero0(){
   let visor = document.getElementsByName("visorCalculadora")[0];
   visor.value += 0
}

function numero1(){
    let visor = document.getElementsByName("visorCalculadora")[0];
   visor.value += 1

}

function numero2(){
    let visor = document.getElementsByName("visorCalculadora")[0];
    visor.value += 2

}

function numero3(){
    let visor = document.getElementsByName("visorCalculadora")[0];
    visor.value += 3

}

function numero4(){
    let visor = document.getElementsByName("visorCalculadora")[0];
    visor.value += 4

}

function numero5(){
    let visor = document.getElementsByName("visorCalculadora")[0];
    visor.value += 5

}

function numero6(){
    let visor = document.getElementsByName("visorCalculadora")[0];
    visor.value += 6

}

function numero7(){
    let visor = document.getElementsByName("visorCalculadora")[0];
    visor.value += 7

}

function numero8(){
    let visor = document.getElementsByName("visorCalculadora")[0];
    visor.value += 8

}

function numero9(){
    let visor = document.getElementsByName("visorCalculadora")[0];
    visor.value += 9

}