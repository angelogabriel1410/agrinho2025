// Variáveis para a posição e tamanho do campo
let campoX, campoY, campoLargura, campoAltura;

// Variáveis para a posição e tamanho dos prédios
let predios = [];
let numPredios = 10;

// Variáveis para a posição e tamanho das árvores
let arvores = [];
let numArvores = 5;

function setup() {
  createCanvas(800, 600);

  // Inicializa a posição e tamanho do campo
  campoLargura = width * 0.8;
  campoAltura = height * 0.6;
  campoX = (width - campoLargura) / 2;
  campoY = (height - campoAltura) / 2;

  // Inicializa os prédios
  for (let i = 0; i < numPredios; i++) {
    predios.push({
      x: random(width),
      y: random(campoY - 100, campoY),
      largura: random(50, 100),
      altura: random(50, 200)
    });
  }

  // Inicializa as árvores
  for (let i = 0; i < numArvores; i++) {
    arvores.push({
      x: random(campoX, campoX + campoLargura),
      y: random(campoY, campoY + campoAltura),
      tamanho: random(20, 50)
    });
  }
}

function draw() {
  background(135, 206, 235); // Cor do céu

  // Desenha o campo
  fill(107, 142, 35); // Cor do campo
  rect(campoX, campoY, campoLargura, campoAltura);

  // Desenha os prédios
  for (let predio of predios) {
    fill(128); // Cor dos prédios
    rect(predio.x, predio.y, predio.largura, predio.altura);
  }

  // Desenha as árvores
  for (let arvore of arvores) {
    fill(139, 69, 19); // Cor do tronco
    rect(arvore.x, arvore.y, arvore.tamanho / 5, arvore.tamanho);
    fill(34, 139, 34); // Cor das folhas
    ellipse(arvore.x + arvore.tamanho / 10, arvore.y - arvore.tamanho / 2, arvore.tamanho * 1.5);
  }

  // Desenha o sol
  fill(255, 255, 0); // Cor do sol
  ellipse(width * 0.8, height * 0.2, 60, 60);
}

function mousePressed() {
  // Adiciona um novo prédio ao clicar
  predios.push({
    x: mouseX,
    y: random(campoY - 100, campoY),
    largura: random(50, 100),
    altura: random(50, 200)
  });

  // Adiciona uma nova árvore ao clicar
  arvores.push({
    x: random(campoX, campoX + campoLargura),
    y: random(campoY, campoY + campoAltura),
    tamanho: random(20, 50)
  });
}
