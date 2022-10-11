let bolsonaro = document.querySelector(".bolsonaro");
let lula = document.querySelector(".lula");
let boxes = document.querySelectorAll(".box");
let bottons = document.querySelectorAll("#buttons-conteiner button");
let message = document.querySelector("#mensagem");
let messageText = document.querySelector("#mensagem p")
let secondPlayer;


let player1 = 0;
let player2 = 0;
 
//funcao de click nos boxes

for (i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function() {
        
        let x;

        if (player1 == player2) {
            x = bolsonaro;
        } else {
            x = lula;
        }
        
        if (this.childNodes.length == 0) {
            
            let cloneX = x.cloneNode(true);

            this.appendChild(cloneX);
        
            if (player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        }

        ganhador();
        
        

 });

 //logica: checar quem venceu

 function ganhador() {
    b1 = document.querySelector("#box-1");
    b2 = document.querySelector("#box-2");
    b3 = document.querySelector("#box-3");
    b4 = document.querySelector("#box-4");
    b5 = document.querySelector("#box-5");
    b6 = document.querySelector("#box-6");
    b7 = document.querySelector("#box-7");
    b8 = document.querySelector("#box-8");
    b9 = document.querySelector("#box-9");

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == "bolsonaro" && b2Child == "bolsonaro" && b3Child == "bolsonaro") {
            declararWinner("bolsonaro");
        } else if(b1Child == "lula" && b2Child == "lula" && b3Child == "lula") {
            declararWinner("lula");
        }

    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == "bolsonaro" && b5Child == "bolsonaro" && b6Child == "bolsonaro") {
            declararWinner("bolsonaro");
        } else if(b4Child == "lula" && b5Child == "lula" && b6Child == "lula") {
            declararWinner("lula");
        }

    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == "bolsonaro" && b8Child == "bolsonaro" && b9Child == "bolsonaro") {
            declararWinner("bolsonaro");
        } else if(b7Child == "lula" && b8Child == "lula" && b9Child == "lula") {
            declararWinner("lula");
        }

    }

    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == "bolsonaro" && b4Child == "bolsonaro" && b7Child == "bolsonaro") {
            declararWinner("bolsonaro");
        } else if(b1Child == "lula" && b4Child == "lula" && b7Child == "lula") {
            declararWinner("lula");
        }

    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == "bolsonaro" && b5Child == "bolsonaro" && b8Child == "bolsonaro") {
            declararWinner("bolsonaro");
        } else if(b2Child == "lula" && b5Child == "lula" && b8Child == "lula") {
            declararWinner("lula");
        }

    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == "bolsonaro" && b6Child == "bolsonaro" && b9Child == "bolsonaro") {
            declararWinner("bolsonaro");
        } else if(b3Child == "lula" && b6Child == "lula" && b9Child == "lula") {
            declararWinner("lula");
        }

    }

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == "bolsonaro" && b5Child == "bolsonaro" && b9Child == "bolsonaro") {
            declararWinner("bolsonaro");
        } else if(b1Child == "lula" && b5Child == "lula" && b9Child == "lula") {
            declararWinner("lula");
        }

    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == "bolsonaro" && b5Child == "bolsonaro" && b7Child == "bolsonaro") {  
            declararWinner("bolsonaro");
        } else if(b3Child == "lula" && b5Child == "lula" && b7Child == "lula") {
            declararWinner("lula");
        }

    }

    let quant = 0;

    for (let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined) {
            quant++;
        }
    }

    if (quant == 9) {
        declararWinner("Deu Velha")
    }

 }

}

function declararWinner(winner){

    let scoreBolsonaro = document.querySelector("#score-1");
    let scoreLula = document.querySelector("#score-2");
    let imagem = "";

    if(winner == "bolsonaro") {
        scoreBolsonaro.textContent = parseInt(scoreBolsonaro.textContent) + 1;
        imagem = "O vencedor foi o Bolsonaro, ta ok?";
    } else if (winner == "lula") {
        scoreLula.textContent = parseInt(scoreLula.textContent) + 1;
        imagem = "O vencedor foi o Lula, companheiro...";
    } else {
        imagem = "Deu velha";
    }
    
    messageText.innerHTML = imagem;
    message.classList.remove("hide"); 
    
    setTimeout(function() {
        message.classList.add("hide");
    }, 2000);

    player1 = 0;
    player2 = 0;

    let boxesRemove = document.querySelectorAll(".box div");

    for (let i = 0; i < boxesRemove.length; i++) {
        boxesRemove[i].parentNode.removeChild(boxesRemove[i]);
    }
 }




