// Autor: Edson Maciel de Barros Junior
// Vídeo no Youtube: https://youtu.be/3uat1dMJjeo
// Vídeo do Jogo: https://youtu.be/G4Np2XQUvZU
// Jogo Tela Cheia: https://editor.p5js.org/edsonmaciel661/full/V8hCa3NHM
// Colabeduc: http://www.colabeduc.org/projeto/show/1280


// Variavéis Tela
var tela = 1;
var l = 120;
var h = 40;

//Botões Menu para ir para as Telas.

var a = 30;
var b = 350;

// Midia
// Fases
var img0;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
// Telas
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;
// Outros
var font1;
let music;

// Personagens
var personagem = [];
var mariod = [];
var marioe = [];
var vilao = [];
// Andar
var i = 0;
var j = 0;
var k = 0;

// Carregar arquivos.
function preload(){
  
// Fases
  img0 = loadImage("fase.png")
  img1 = loadImage("pergunta0.png");
  img2 = loadImage("pergunta1.png");
  img3 = loadImage("pergunta2.png");
  img4 = loadImage("pergunta3.png");
  img5 = loadImage("pergunta4.png");
  img6 = loadImage("pergunta5.png");
  img7 = loadImage("pergunta6.png");
  img8 = loadImage("pergunta7.png");
  img9 = loadImage("pergunta8.png");
  img10 = loadImage("pergunta9.png");
  
// Telas
  img11 = loadImage("Telas/Menu.png");
  img12 = loadImage("Telas/História.png");
  img13 = loadImage("Telas/Manual.png");
  img14 = loadImage("Telas/Créditos.png");
  img15 = loadImage("Telas/Vitoria.gif");
  img16 = loadImage("Telas/Derrota.gif");
  img17 = loadImage("Outros/Heart.png");
  
// Fontes & Música
  font1 = loadFont("New_Super_Mario_Font_U.ttf");
  soundFormats ("mp3");
  music = loadSound ("Musica/Menu.Music.mp3");

// Sprite Mario
// Parado
  personagem[0] = loadImage("frente_0.png");
  
// Direita
  for (i = 0; i < 3; i++) {
    mariod[i] = loadImage("direita_"+i+".png");
  }

// Esquerda
  //personagem esquerda
  for (j = 0; j < 3; j++) {
    marioe[j] = loadImage("esquerda_" + j + ".png");
  }

// Bowser
  for(k=0; k<=5; k++){
    vilao[k] = loadImage("vilao_"+k+".png")
  }
}

// Setup
function setup(){
  textAlign(CENTER);
  createCanvas(500, 400);
  
// Música em loop
  music.loop();
}

// Draw
function draw(){
  
  background(0);

// Tela 1: Inicio
  if (tela == 1){
    image(img11, 0, 0, 500, 400);
   
// Botões Jogar, Manual e Créditos
    
// Fontes   
  textFont(font1);
  fill(0);
  textSize(22);
    
  noFill();
  noStroke();
  cursor(HAND);
  rect(a, b, l, h, 15);
  
// Textos
  noStroke();
  fill(255);
  text("JOGAR", 90, 375);
    
  noStroke();
  fill(255);
  text("MANUAL", 250, 375);
    
  noStroke();
  fill(255);
  text("CREDITOS", 408, 375);

  }

// Tela 2: História  
  if (tela == 2){
    image(img12, 0, 0, 500, 400);
    textAlign(CENTER);
  }
  
// Tela 3: Manual
  if(tela == 3){
    image(img13, 0, 0, 500, 400);
    textAlign(CENTER);
  }
  
// Tela 4: Créditos
  if (tela == 4){
    image(img14, 0, 0, 500, 400);
    textAlign(CENTER);
  }
  
// Tela 5: Jogo
  if ( tela == 5){
    tela5();
  }
  
// Tela 6: Derrota
  if( tela == 6){
    image(img16, 0, 0, 500, 400);
    textAlign(CENTER);
  }
  
// Tela 7: Vitória
  if( tela == 7){
    image(img15, 0, 0, 500, 400);
    textAlign(CENTER);
  }
}