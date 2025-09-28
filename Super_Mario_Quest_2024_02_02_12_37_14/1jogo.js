// Mario
var personagem;
// Posição Inicial
var xP = 260;
var yP = 260;
// Andar
var andar = 0
var andar1 = 0;

// Pular
var up = 0;
var yChao = 260;
var yP = yChao;
var estaPulando = false;

// Vilão
var vilao;
var xV = 410;
var yV = 40;
var velov = 1;
var parado = 0;

// Colisão respostas
var yQ0 = 168;
var xQ1 = 40;
var xQ2 = 147;
var xQ3 = 270;
var xQ4 = 377;
    
function tela5(){
  image(img0, 0, 0, 500, 400)
  textAlign(CENTER);

  
// Vilão se movimentando: Bowser
  image(vilao[parado%1], xV, yV, 68, 80);
  
  yV = yV + velov;
  if (yV < 20){
    velov = 1
  }
   if (yV > 50){
    velov = -1
  }
  parado++;
  
// Personagem Mario
  image(personagem[andar1%3], xP, yP, 68, 80);
  
// Botões Andar
  // Esquerda
    if (keyIsDown(LEFT_ARROW)) {
      image(mariod[andar%2], xP, yP, 68, 80);
      if (xP > -10) {
        xP = xP - 5;
      }
     
    }

  // Direita
    if (keyIsDown(RIGHT_ARROW)) {
      image(marioe[andar1%2], xP, yP, 68, 80);
      if (xP < 495 - 70) {
        xP = xP + 10
      }
        
  }
  if (keyIsDown(UP_ARROW)&& estaPulando == false && yP ==  yChao){
    estaPulando = true;
    
  }
  
  if(estaPulando == true){
    yP -= 5
    
    if(yP <= 200){
      console.log(yP +" "+xP)
      estaPulando = false
    }
    
  }else{
  
    if (estaPulando == false){
      if (yP < yChao ){
        yP = yP + 5
      }
      else {
        estaPulando = false;
        yP = yChao
      }
    }
    
  }
  
  
  
// Fase 1
  if ( fase == 1){
    image(img1, 0, 0, 500, 400)
    ellipse(xP, yP, 1)
    // Certa 1
    ellipse(xQ1, yQ0,1)
    // Errado 2
    ellipse(xQ2, yQ0, 1)
    // Errado 3
    ellipse(xQ3, yQ0, 1)
    // Errado4
    ellipse(xQ4, yQ0, 1)
  
// Caso o Mario pule Certo.
  if(yP <= 200 && (xP+34) >= xQ1 && (xP+34) <= 135){
    console.log("iupi")
    fase=2
    x=0
    y=300
  } 
}else {

// Fase 2
  if ( fase == 2){
    image(img2, 0, 0, 500, 400)
    ellipse(xP, yP, 1)
    // Errado 1
    ellipse(xQ1, yQ0,1)
    // Errado 2
    ellipse(xQ2, yQ0, 1)
    // Certa 3
    ellipse(xQ3, yQ0, 1)
    // Errado4
    ellipse(xQ4, yQ0, 1)

// Caso o Mario pule Certo.
  if(yP <= 200 && (xP+34) >= xQ3 && (xP+34) <= 368){
    console.log("iupi")
    fase=3
    x=0
    y=300
  } 
}
}

// Fase 3 
  if (fase == 3){
    image(img3, 0, 0, 500, 400)
    ellipse(xP, yP, 1)
    // Errado 1
    ellipse(xQ1, yQ0,1)
    // Certo 2
    ellipse(xQ2, yQ0, 1)
    // Errado 3
    ellipse(xQ3, yQ0, 1)
    // Errado4
    ellipse(xQ4, yQ0, 1)

// Caso o Mario pule Certo.
  if(yP <= 200 && (xP+34) >= xQ2 && (xP+34) <= 244){
    console.log("iupi")
    fase=4
    x=0
    y=300
  }
}else
  
// Fase 4
  if (fase == 4){
    image(img5, 0, 0, 500, 400)
    ellipse(xP, yP, 1)
    // Errado 1
    ellipse(xQ1, yQ0,1)
    // Errado 2
    ellipse(xQ2, yQ0, 1)
    // Errado 3
    ellipse(xQ3, yQ0, 1)
    // Certo 4
    ellipse(xQ4, yQ0, 1)

// Caso o Mario pule Certo.
  if(yP <= 200 && (xP+34) >= xQ4 && (xP+34) <= 472){
    console.log("iupi")
    fase=5
    x=0
    y=300
  }
}else
 
// Fase 5
  if (fase == 5){
    image(img4, 0, 0, 500, 400)
    ellipse(xP, yP, 1)
    // Errado 1
    ellipse(xQ1, yQ0,1)
    // Certo 2
    ellipse(xQ2, yQ0, 1)
    // Errado 3
    ellipse(xQ3, yQ0, 1)
    // Errado 4
    ellipse(xQ4, yQ0, 1)

// Caso o Mario pule Certo.
  if(yP <= 200 && (xP+34) >= xQ2 && (xP+34) <= 243){
    console.log("iupi")
    fase=6
    x=0
    y=300
  }    
}else

// Fase 6
  if (fase == 6){
    image(img6, 0, 0, 500, 400)
    ellipse(xP, yP, 1)
    // Errado 1
    ellipse(xQ1, yQ0,1)
    // Errado 2
    ellipse(xQ2, yQ0, 1)
    // Errado 3
    ellipse(xQ3, yQ0, 1)
    // Certa 4
    ellipse(xQ4, yQ0, 1)

// Caso o Mario pule Certo.
  if(yP <= 200 && (xP+34) >= xQ4 && (xP+34) <= 472){
    console.log("iupi")
    fase=7
    x=0
    y=300
  }   
}else
  
// Fase 7
  if (fase == 7){
    image(img7, 0, 0, 500, 400)
    ellipse(xP, yP, 1)
    // Certa 1
    ellipse(xQ1, yQ0,1)
    // Errado 2
    ellipse(xQ2, yQ0, 1)
    // Errado 3
    ellipse(xQ3, yQ0, 1)
    // Errado 4
    ellipse(xQ4, yQ0, 1)

// Caso o Mario pule Certo.
  if(yP <= 200 && (xP+34) >= xQ1 && (xP+34) <= 135){
    console.log("iupi")
    fase=8
    x=0
    y=300
  }   
}else

// Fase 8
 
    if (fase == 8){
    image(img9, 0, 0, 500, 400)
    ellipse(xP, yP, 1)
    // Certo 1
    ellipse(xQ1, yQ0,1)
    // Errado 2
    ellipse(xQ2, yQ0, 1)
    // Errado 3
    ellipse(xQ3, yQ0, 1)
    // Errado 4
    ellipse(xQ4, yQ0, 1)

// Caso o Mario pule Certo.
  if(yP <= 200 && (xP+34) >= xQ1 && (xP+34) <= 135){
    console.log("iupi")
    fase=9
    x=0
    y=300
  }  
}else
  
// Fase 9
  if (fase == 9){
    image(img8, 0, 0, 500, 400)
    ellipse(xP, yP, 1)
    // Errado 1
    ellipse(xQ1, yQ0,1)
    // Errado 2
    ellipse(xQ2, yQ0, 1)
    // Errado 3
    ellipse(xQ3, yQ0, 1)
    // Certo 4
    ellipse(xQ4, yQ0, 1)

// Caso o Mario pule Certo.
  if(yP <= 200 && (xP+34) >= xQ4 && (xP+34) <= 472){
    console.log("iupi")
    fase=10
    x=0
    y=300
  }
}else

// Fase 10
  if (fase == 10){
    image(img10, 0, 0, 500, 400)
    ellipse(xP, yP, 1)
    // Certo 1
    ellipse(xQ1, yQ0,1)
    // Errado 2
    ellipse(xQ2, yQ0, 1)
    // Errado 3
    ellipse(xQ3, yQ0, 1)
    // Errado 4
    ellipse(xQ4, yQ0, 1)

// Caso o Mario pule Certo.
  if(yP <= 200 && (xP+34) >= xQ1 && (xP+34) <= 135){
    console.log("iupi")
    tela = 7;
    x=0
    y=300
    }  
  }
}