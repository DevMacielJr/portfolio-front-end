function intervalo(coordenada, limiteInferior, limiteSuperior) {
    var ehMaior = coordenada > limiteInferior;
    var ehMenor = coordenada < limiteSuperior;
    var taNoMeioDosDois = ehMaior && ehMenor;
    return taNoMeioDosDois;
}

function mousePressed(event) {
 
 console.log("x: "+mouseX+" y: "+mouseY)
  
// Menu
  if (tela == 1 && intervalo(mouseY, 350, 390)) {
    
// História   
  if (intervalo(mouseX, 30, 150)) {
      console.log("Clicou em História!!!");
      tela = 2;
      fase=1
      draw();
     } else 
// Manual
  if (intervalo(mouseX, 190, 310)) {
      console.log("Clicou em Manual!!!");
      tela = 3;
      draw();
      } else 
// Créditos
  if (intervalo(mouseX, 350, 470)) {
      console.log("Clicou em Créditos!!!")
      tela = 4;  
      draw();
        }
}
// Jogar
  if (tela == 2 && intervalo(mouseX, 122, 374)){
    if (intervalo(mouseY, 329, 350)){
    console.log("Clicou em Jogar!!!");
      tela = 5;
      fase=1
      draw();
    }
}
  
// Botões de Voltar
  
  //História
   else if (tela == 2) {
        if (intervalo(mouseX, 450, 570) && intervalo(mouseY, 1, 41)){
            console.log("Clicou em voltar!!!")
            tela = 1;  
        }
    }
  
// Manual
    else if (tela == 3) {
        if (intervalo(mouseX, 450, 570) && intervalo(mouseY, 1, 41)){
            console.log("Clicou em voltar!!!")
            tela = 1;  
        }
    }
  
// Créditos
    else if (tela == 4) {
        if (intervalo(mouseX, 450, 570) && intervalo(mouseY, 1, 41)){
            console.log("Clicou em voltar!!!")
            tela = 1; 
        }
    }
  
// Vitoria & Derrota
  
// Caso o jogador Perca
  
    else if(tela == 6){
        if(intervalo(mouseX, 72, 434) &&       intervalo(mouseY, 352, 380)){
            console.log("voltar");
            tela = 1;
        }
    }
  
// Caso o jogador Vença
  
   else if(tela == 7){
        if(intervalo(mouseX, 72, 434) &&       intervalo(mouseY, 352, 380)){
          console.log("HOME");
          tela = 1;
   }
  } 
}