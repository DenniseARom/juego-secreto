let numeroSecreto = 0;
let intentos= 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//funcion1 para asignar e imprimir texto especifico en html
function asignarTextoElemento(elemento, texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

//funcion2 para solicitar numero al usuario y indicarle si acerto o no
function verificarIntento() {
    let numeroDeUsuario= parseInt(document.getElementById ('valorUsuario').value);
    
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos ===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    }else{
        //el usuario no acerto
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento ('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento ('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//funcion3 para limpiar la caja
function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

//funcion4 para que el juego elija numero aleatorios a adivinar
function generarNumeroSecreto()  {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) +1;
    
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Se sortearon todos los numeros posibles');
    }else{
    //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto ();
        }else{
            listaNumerosSorteados.push (numeroGenerado);
            return numeroGenerado;
        }
    }
}

//funcion5 de mensajes iniciales para el juego
function condicionesiniciales (){
    asignarTextoElemento ('h1','Juego del numero secreto');
    asignarTextoElemento ('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos =1;
}

//funcion6 para reiniciar el juego
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja ();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesiniciales ();
    //deshabilitar el boton de nuevo juego
    document.querySelector ('#reiniciar').setAttribute('disabled','true');
}

condicionesiniciales();


