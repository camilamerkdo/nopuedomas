/*// Avances hasta 24.06.2024 

let CapamanchaG;
let CapamanchaN;
let Capalineas;
let Capafondo;
let fondo;
let cant = 5;
let manchaG = []; // Almacenar las imágenes de manchas
let manchaN = []; // Almacenar las imágenes de manchas
let lineas = []; // Almacenar las imágenes de manchas
let tiempoDentroCapa = 0;
let tiempoAnterior = 0;
let tiempoRotacion = 2000; // 2 segundos
let capaActual = "";
let limiteImagenes = 5;
let manchasG = []; // Almacenar las instancias de la clase ManchaG
let manchasN = []; // Almacenar las instancias de la clase ManchaN
let manchasLineas = []; // Almacenar las instancias de la clase Lineas

function preload() {
  fondo = loadImage("data/Lienzo2.png"); // Cargar la imagen de fondo

  for (let i = 0; i < cant; i++) {
    let dmanchaG = "data/manchasg" + (i + 1) + ".png";
    let dmanchaN = "data/manchasn" + (i + 1) + ".png";
    let dlineas = "data/Linea" + (i + 1) + ".png";

    manchaG[i] = loadImage(dmanchaG);
    manchaN[i] = loadImage(dmanchaN);
    lineas[i] = loadImage(dlineas);
  }
}

function setup() {
  createCanvas(300, 550);
  Capafondo = createGraphics(300, 550);
  Capafondo.image(fondo, 0, 0, 300, 550);
   
  CapamanchaG = createGraphics(300, 550);
  CapamanchaN = createGraphics(300, 550);
  Capalineas = createGraphics(300, 550);
}

function draw() {
  background(200);
  image(Capafondo, 0, 0); // Dibujar la capa de fondo

  let tiempoTranscurrido = millis() - tiempoAnterior;
  tiempoAnterior = millis();

  actualizarCapa(tiempoTranscurrido);

  // Manejar las manchas para cada capa
  if (capaActual === "N") {
    manejarManchas(manchasN, ManchaN, manchaN, 250, 450);
  } else if (capaActual === "L") {
    manejarManchas(manchasLineas, Linea, lineas, 200, 250);
  } else if (capaActual === "G") {
    manejarManchas(manchasG, ManchaG, manchaG, 250, 450);
  }

  // Dibujar las manchas en sus capas
  dibujarManchas(CapamanchaN, manchasN);
  dibujarManchas(CapamanchaG, manchasG);
  dibujarManchas(Capalineas, manchasLineas);

  // Dibujar las capas en el canvas principal
  image(CapamanchaG, 0, 0);
  image(CapamanchaN, 0, 0);
  image(Capalineas, 0, 0);
}

function actualizarCapa(tiempoTranscurrido) {
  let nuevaCapa = "";

  if (mouseY > 0 && mouseY < 183) {
    nuevaCapa = "N";
  } else if (mouseY > 366 && mouseY < 550) {
    nuevaCapa = "L";
  } else if (mouseY > 183 && mouseY < 366) {
    nuevaCapa = "G";
  }

  if (nuevaCapa !== capaActual) {
    if (capaActual !== "") {
      detenerRotacionManchas(capaActual); // Detener la rotación de las manchas al cambiar de capa
    }
    capaActual = nuevaCapa;
    tiempoDentroCapa = 0; // Resetear el tiempo al cambiar de capa
  } else {
    tiempoDentroCapa += tiempoTranscurrido;
    iniciarRotacionManchas(capaActual); // Reiniciar la rotación de las manchas al regresar a la capa anterior
  }
}

function manejarManchas(manchas, ClaseMancha, imagenes, minSize, maxSize) {
  if (tiempoDentroCapa >= tiempoRotacion) {
    tiempoDentroCapa = 0;

    if (manchas.length < limiteImagenes) {
      let i = floor(random(cant));
      let w = random(minSize, maxSize);
      let h = random(minSize, maxSize);
      let x = random(0, width); // Generar posición aleatoria sin límites
      let y = random(0, height); // Generar posición aleatoria sin límites
      let velocidad = random(0.01, 0.05); // Velocidad aleatoria
      let nuevaMancha = new ClaseMancha(imagenes[i], x, y, w, h, velocidad);
      nuevaMancha.rotacionInicial = random(TWO_PI); // Asignar rotación inicial aleatoria
      nuevaMancha.apareciendo = true; // Marcar como apareciendo
      nuevaMancha.opacidad = 0; // Empezar con opacidad 0
      manchas.push(nuevaMancha);
    } else {
      // Si hay al menos 5 manchas, iniciar rotación con velocidad aleatoria
      for (let mancha of manchas) {
        if (!mancha.rotando) {
          mancha.velocidad = random(0.01, 0.05); // Asignar velocidad aleatoria
          mancha.startRotating();
        }
      }
    }
  }
}

function dibujarManchas(capa, manchas) {
  capa.clear();
  for (let mancha of manchas) {
    mancha.dibujar(capa);
  }
}

function detenerRotacionManchas(capa) {
  let manchas;
  if (capa === "N") {
    manchas = manchasN;
  } else if (capa === "L") {
    manchas = manchasLineas;
  } else if (capa === "G") {
    manchas = manchasG;
  }

  if (manchas) {
    for (let mancha of manchas) {
      mancha.stopRotating();
    }
  }
}

function iniciarRotacionManchas(capa) {
  let manchas;
  if (capa === "N") {
    manchas = manchasN;
  } else if (capa === "L") {
    manchas = manchasLineas;
  } else if (capa === "G") {
    manchas = manchasG;
  }

  if (manchas && manchas.length >= limiteImagenes) {
    for (let mancha of manchas) {
      if (!mancha.rotando) {
        mancha.startRotating();
      }
    }
  }
}
*/
let CapamanchaG, CapamanchaN, Capalineas, Capafondo;
let fondo;
let cant = 5;
let manchaG = [], manchaN = [], lineas = [];
let tiempoDentroCapa = 0, tiempoAnterior = 0;
let tiempoRotacion = 2000; // 2 segundos
let capaActual = "";
let limiteImagenes = 5;
let manchasG = [], manchasN = [], manchasLineas = [];

function preload() {
  fondo = loadImage("data/Lienzo2.png"); // Cargar la imagen de fondo

  for (let i = 0; i < cant; i++) {
    let dmanchaG = "data/manchasg" + (i + 1) + ".png";
    let dmanchaN = "data/manchasn" + (i + 1) + ".png";
    let dlineas = "data/Linea" + (i + 1) + ".png";

    manchaG[i] = loadImage(dmanchaG);
    manchaN[i] = loadImage(dmanchaN);
    lineas[i] = loadImage(dlineas);
  }
}

function setup() {
  createCanvas(300, 550); // Crear el canvas principal
  Capafondo = createGraphics(300, 550); // Crear la capa de fondo
  Capafondo.image(fondo, 0, 0, 300, 550); // Dibujar la imagen de fondo en la capa
  CapamanchaG = createGraphics(300, 550); // Crear la capa para las manchas grandes
  CapamanchaN = createGraphics(300, 550); // Crear la capa para las manchas negras
  Capalineas = createGraphics(300, 550); // Crear la capa para las líneas
}

function draw() {
  background(200); // Establecer el color de fondo del canvas principal
  image(Capafondo, 0, 0); // Dibujar la capa de fondo en el canvas principal

  let tiempoTranscurrido = millis() - tiempoAnterior; // Calcular el tiempo transcurrido desde la última actualización
  tiempoAnterior = millis(); // Actualizar el tiempo anterior

  actualizarCapa(tiempoTranscurrido); // Actualizar la capa actual en función de la posición del mouse y el tiempo transcurrido

  // Manejar las manchas para cada capa
  if (capaActual === "N") {
    manejarAparicionManchas(manchasN, ManchaN, manchaN, 250, 450); // Manejar la aparición de manchas negras
    manejarRotacionManchas(manchasN); // Manejar la rotación de manchas negras
  } else if (capaActual === "L") {
    manejarAparicionManchas(manchasLineas, Linea, lineas, 200, 250); // Manejar la aparición de líneas
    manejarRotacionManchas(manchasLineas); // Manejar la rotación de líneas
  } else if (capaActual === "G") {
    manejarAparicionManchas(manchasG, ManchaG, manchaG, 250, 450); // Manejar la aparición de manchas grandes
    manejarRotacionManchas(manchasG); // Manejar la rotación de manchas grandes
  }

  dibujarManchas(CapamanchaN, manchasN); // Dibujar las manchas negras
  dibujarManchas(CapamanchaG, manchasG); // Dibujar las manchas grandes
  dibujarManchas(Capalineas, manchasLineas); // Dibujar las líneas

  image(CapamanchaG, 0, 0); // Dibujar la capa de manchas grandes en el canvas principal
  image(CapamanchaN, 0, 0); // Dibujar la capa de manchas negras en el canvas principal
  image(Capalineas, 0, 0); // Dibujar la capa de líneas en el canvas principal
}


function actualizarCapa(tiempoTranscurrido) {
  let nuevaCapa = "";

  if (mouseY > 0 && mouseY < 183) {
    nuevaCapa = "N"; // Determinar la capa en función de la posición del mouse
  } else if (mouseY > 366 && mouseY < 550) {
    nuevaCapa = "L"; // Determinar la capa en función de la posición del mouse
  } else if (mouseY > 183 && mouseY < 366) {
    nuevaCapa = "G"; // Determinar la capa en función de la posición del mouse
  }

  if (nuevaCapa !== capaActual) {
    if (capaActual) {
      detenerRotacionManchas(capaActual); // Detener la rotación de las manchas al cambiar de capa
    }
    capaActual = nuevaCapa;
    tiempoDentroCapa = 0; // Resetear el tiempo al cambiar de capa
  } else {
    tiempoDentroCapa += tiempoTranscurrido;
    if (manchasG.length >= limiteImagenes || manchasN.length >= limiteImagenes || manchasLineas.length >= limiteImagenes) {
      iniciarRotacionManchas(capaActual); // Iniciar la rotación de las manchas si se alcanzó el límite
    }
  }
}

function manejarAparicionManchas(manchas, ClaseMancha, imagenes, minSize, maxSize) {
  if (tiempoDentroCapa >= tiempoRotacion) {
    tiempoDentroCapa = 0;

    if (manchas.length < limiteImagenes) {
      let i = floor(random(cant));
      let w = random(minSize, maxSize);
      let h = random(minSize, maxSize);
      let x = random(0, width);
      let y = random(0, height);
      let velocidad = random(0.01, 0.05);
      let nuevaMancha = new ClaseMancha(imagenes[i], x, y, w, h, velocidad);
      nuevaMancha.rotacionInicial = random(TWO_PI); // Asignar rotación inicial aleatoria
      nuevaMancha.apareciendo = true; // Marcar como apareciendo
      nuevaMancha.opacidad = 0; // Empezar con opacidad 0
      manchas.push(nuevaMancha);
    }
  }
}

function manejarRotacionManchas(manchas) {
  if (manchas.length >= limiteImagenes) {
    for (let mancha of manchas) {
      if (!mancha.rotando) {
        mancha.velocidad = random(0.01, 0.05);
        mancha.startRotating();
      }
    }
  }
}

function dibujarManchas(capa, manchas) {
  capa.clear(); // Limpiar la capa antes de dibujar
  for (let mancha of manchas) {
    mancha.dibujar(capa); // Dibujar cada mancha en la capa correspondiente
  }
}

function detenerRotacionManchas(capa) {
  let manchas = obtenerManchasPorCapa(capa); // Obtener las manchas de la capa correspondiente
  if (manchas) {
    for (let mancha of manchas) {
      mancha.stopRotating(); // Detener la rotación de cada mancha
    }
  }
}

function iniciarRotacionManchas(capa) {
  let manchas = obtenerManchasPorCapa(capa); // Obtener las manchas de la capa correspondiente
  if (manchas && manchas.length >= limiteImagenes) {
    for (let mancha of manchas) {
      if (!mancha.rotando) {
        mancha.startRotating(); // Iniciar la rotación de cada mancha si no está rotando
      }
    }
  }
}

function obtenerManchasPorCapa(capa) {
  if (capa === "N") return manchasN;
  if (capa === "L") return manchasLineas;
  if (capa === "G") return manchasG;
  return null; // Devolver las manchas correspondientes a la capa
}
