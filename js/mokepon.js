 let ataqueJugador
 let ataqueEnemigo
 let vidasJugador = 3
 let vidasEnemigo = 3

 const aleatoria = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

 const seleccionarMascotaEnemigo = () => {
    let mascotaAleatorio = aleatoria(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

 const seleccionarMascotaJugador = () => {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatiguaya = document.getElementById('ratiguaya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatiguaya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Debes seleccionar una mascota')
    }

    seleccionarMascotaEnemigo()
}

const ataqueFuego = () => {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

const ataqueAgua = () => {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

const ataqueTierra = () => {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

const crearMensaje = (resultado) => {
    let sectionMensaje = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataque-del-jugador')
    let ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

const crearMensajeFinal = (resultadoFinal) => {
    let botonReiniciar = document.getElementById('boton-reiniciar')
    let sectionMensaje = document.getElementById('resultado')

    sectionMensaje.innerHTML = resultadoFinal


    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    
    botonReiniciar.style.display = 'block'
}

const revisarVidas = () => {
    if(vidasEnemigo == 0) {
        crearMensajeFinal('Felicitaciones, GANASTE')
    } else if(vidasJugador == 0) {
        crearMensajeFinal('Lo siento, PERDISTE')
    }
}

const combate = () => {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE");
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE");
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE");
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE");
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE");
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

const ataqueAleatorioEnemigo = () => {
    let ataqueAleatorio = aleatoria(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

const reiniciarJuego = () => {
    location.reload()
}

const inciarJuago = () => {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display = 'none'
}

window.addEventListener('load', inciarJuago)
