const aleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const eleccion = (jugada) => {
  let resultado = "";

  if (jugada == 1) {
    resultado = "Piedra 🥌";
  } else if (jugada == 2) {
    resultado = "Papel 🧻";
  } else if (jugada == 3) {
    resultado = "Tijera ✂️";
  } else {
    resultado = "MAL ELEGIDO";
  }

  return resultado;
};

let jugador = 0;
let pc = 0;
let triunfos = 0;
let derrotas = 0;

while (triunfos < 3 && derrotas < 3) {
  pc = aleatorio(1, 3);
  jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

  alert("PC eligio: " + eleccion(pc));
  alert("Tu eliges: " + eleccion(jugador));

  // COMBATE
  if (pc == jugador) {
    alert("Empate");
  } else if (jugador == 1 && pc == 3) {
    triunfos = triunfos + 1;
    alert("GANASTE");
  } else if (jugador == 2 && pc == 1) {
    triunfos = triunfos + 1;
    alert("Ganaste");
  } else if (jugador == 3 && pc == 2) {
    triunfos = triunfos + 1;
    alert("Ganaste");
  } else {
    derrotas = derrotas + 1;
    alert("Perdiste");
  }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + derrotas + " veces.");
