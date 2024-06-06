let regulador_velocidad = 0;
const margenTablero = 10

function setup() {
  createCanvas(320, 520); //Crea un canvas

  crearMapeoTetriminos();
  tetrimino = new Tetrimino();
  tablero = new Tablero();
  resizeCanvas(
    tablero.ancho + 2 * margenTablero,
    tablero.alto + 2 * margenTablero
  )
}

function draw() {
  clear();
  background("lightgrey");
  tablero.dibujar();
  tetrimino.dibujar();
  keyEvents();
}

function keyEvents() {
  if (millis() - regulador_velocidad<60) {
    return
  }
  regulador_velocidad = millis();
  if (keyIsDown(RIGHT_ARROW)) {
    tetrimino.moverDerecha();
  }
  if (keyIsDown(LEFT_ARROW)) {
    tetrimino.moverIzquierda();
  }
  if (keyIsDown(UP_ARROW)) {
    tetrimino.moverArriba();
  }
  if (keyIsDown(DOWN_ARROW)) {
    tetrimino.moverAbajo();
  }
}
