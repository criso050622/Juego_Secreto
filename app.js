let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número secreto, en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'Numero secreto es menor!');
        }else{
            asignarTextoElemento('p', 'Numero secreto es mayor!');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    /*1era forma
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';*/

    //2da forma optima
    document.querySelector('#valorUsuario').value = '';
}

function generaNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;    
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles...')
    }else{
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p',`Indica el numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //mensaje de inicio intervalo de numeros
    //generar numero aleatorio
    //reestablecer el contador
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

