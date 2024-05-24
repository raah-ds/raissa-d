let palavra
  
  function setup(){
      createCanvas(400, 400);
    
      palavra= palavraAleatoria();
    
  }

  function palavraAleatoria(){
    
      let palavras = ["caminhar","Saúde","Felicidade","Alegria","Amor"];
    
    return random(palavras);
    
  }

  function inicializaCores(){
      background("blue");
      fill("white");
      textSize(64);
      textAlign(CENTER, CENTER);
  }

  function palavrasParcial(minimo, maximo){
      
    let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
    let parcial = palavra.substring(0, quantidade);
    return parcial;
    
  }
  
  function draw(){
    
      inicializaCores();
    
      let texto = palavrasParcial(0, width);
    
      text(texto, 200, 200);
    
  }

  function modoNoturno(horario){
    
    if (horario > 18){
      console.log("Voce precisa ligar o modo escuro!!");
   
    }else{
      console.log("Modo noturno não é necessario neste momento");
      
    }
    
  }
modoNoturno(15);
modoNoturno(20);