//random player number 1
let p1 = Math.floor(Math.random()*6) + 1;
console.log(p1)
//random player number 2
let p2 = Math.floor(Math.random()*6) + 1;
console.log(p2)

// logic
if(p1>p2){
    document.querySelector("h1").innerHTML="Player1 Wins";
  if(p2==1){//p2==1
        document.querySelector(".img2").setAttribute("src","./images/dice1.png")
    if(p1==2){
        document.querySelector(".img1").setAttribute("src","./images/dice2.png")
    }
    else if(p1==3){
        document.querySelector(".img1").setAttribute("src","./images/dice3.png")
    }
    else if(p1==4){
        document.querySelector(".img1").setAttribute("src","./images/dice4.png")
    }
    else if(p1==5){
        document.querySelector(".img1").setAttribute("src","./images/dice5.png")
    }
    else if(p1==6){
        document.querySelector(".img1").setAttribute("src","./images/dice6.png")
    }
   }
  else if(p2==2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png")
    if(p1==3){
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
    }
    else if(p1==4){
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    }
    else if(p1==5){
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    }
    else if(p1==6){
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    }
   }
    else if(p2==3){
        document.querySelector(".img2").setAttribute("src","./images/dice3.png")
    if(p1==4){
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    }
    else if(p1==5){
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    }
    else if(p1==6){
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    }
   }
    else if(p2==4){
        document.querySelector(".img2").setAttribute("src","./images/dice4.png")
    if(p1==5){
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    }
    else if(p1==6){
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    }
   }
    else if(p2==5){
        document.querySelector(".img2").setAttribute("src","./images/dice5.png")
     if(p1==6){
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    }
   }
}
// logic 2
else if(p1<p2){
    document.querySelector("h1").innerHTML="Player2 Wins";
  if(p1==1){//p1==1
        document.querySelector(".img1").setAttribute("src","./images/dice1.png");
    if(p2==2){
        document.querySelector(".img2").setAttribute("src","./images/dice2.png")
    }
    else if(p2==3){
        document.querySelector(".img2").setAttribute("src","./images/dice3.png")
    }
    else if(p2==4){
        document.querySelector(".img2").setAttribute("src","./images/dice4.png")
    }
    else if(p2==5){
        document.querySelector(".img2").setAttribute("src","./images/dice5.png")
    }
    else if(p2==6){
        document.querySelector(".img2").setAttribute("src","./images/dice6.png")
    }
   }
  else if(p1==2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png")
    if(p2==3){
        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
    }
    else if(p2==4){
        document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    }
    else if(p2==5){
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    }
    else if(p2==6){
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    }
   }
    else if(p1==3){
        document.querySelector(".img1").setAttribute("src","./images/dice3.png")
    if(p2==4){
        document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    }
    else if(p2==5){
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    }
    else if(p2==6){
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    }
   }
    else if(p1==4){
        document.querySelector(".img1").setAttribute("src","./images/dice4.png")
    if(p2==5){
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    }
    else if(p2==6){
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    }
   }
    else if(p1==5){
        document.querySelector(".img1").setAttribute("src","./images/dice4.png")
     if(p2==6){
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    }
   }
}
else if(p1==p2){
    document.querySelector("h1").innerHTML="Draw!";
    if(p1==1){
        document.querySelector(".img1").setAttribute("src","./images/dice1.png");
        document.querySelector(".img2").setAttribute("src","./images/dice1.png");
    }
    if(p1==2){
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");
        document.querySelector(".img2").setAttribute("src","./images/dice2.png");
    }
    if(p1==3){
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
    }
    if(p1==4){
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
        document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    }
    if(p1==5){
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    }
    if(p1==6){
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    }
}
