class Tablero {
  // Creación y dimensionamiento de la cuadricula
  constructor() {
    //Medidas de los parametros
    this.columnas = 12;
    this.filas = 20;
    this.lado_celda = 25;
    this.ancho = this.columnas * this.lado_celda;
    this.alto = this.filas * this.lado_celda;
    this.posicion = createVector(margenTablero, margenTablero);
  }

  coordenada(x, y) {
    return createVector(x, y).mult(this.lado_celda).add(this.posicion);
  }

  //Procesamiento logico para el dibujo de los elementos
  dibujar() {
    push();
    for (let columna = 0; columna < this.columnas; columna++) {
      for (let fila = 0; fila < this.filas; fila++) {
        fill("#1D082A");
        let c = this.coordenada(columna, fila);
        rect(c.x, c.y, this.lado_celda);
      }
    }
    pop();
  }
}
