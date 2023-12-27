


const inciarJuago = () => {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

const aleatoria = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const seleccionarMascotaEnemigo = () => {
    let ataqueAleatorio = aleatoria(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

const seleccionarMascotaJugador = () => {
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

window.addEventListener('load', inciarJuago)
