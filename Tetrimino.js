function crearMapeoTetriminos() {
  tetriminosBase = {
    Z: {
      color: "red",
      mapa: [createVector()],
    },
  };
}

class Tetrimino {
  constructor(nombre = "Z") {
    this.nombre = nombre;
    let tetriminoBase = tetriminosBase[nombre];
    this.color = tetriminoBase.color;
    this.mapa = [];
    for (const posicionMino of tetriminoBase.mapa) {
      this.mapa.push(posicionMino.copy());
    }
    this.posicion = createVector(int(Tablero.columnas / 2), 0);
    console.log(get(tablero.columnas));
  }

  moverDerecha() {
    this.posicion.x++;
  }

  moverIzquierda() {
    this.posicion.x--;
  }

  moverArriba() {
    this.posicion.y--;
  }

  moverAbajo() {
    this.posicion.y++;
  }

  get mapaTablero() {
    let retorno = [];
    for (const posicionMino of this.mapa) {
      retorno.push(tablero.coordenada(posicionMino.x, posicionMino.y));
    }
    return retorno;
  }

  dibujar() {
    push();
    fill("white");
    for (const posicionMino of this.mapaTablero) {
      let coord = tablero.coordenada(this.posicion.x, this.posicion.y);
      rect(coord.x, coord.y, tablero.lado_celda);
    }

    pop();
  }
}

function crearMapeoTetriminos() {
  tetriminosBase = {
    Z: {
      color: "red",
      mapa: [createVector()],
    },
  };
}
