let qntCards = 0;
function startGame(){
    alert("entrei")
}

function validateInput(){
    qntCards = Number(prompt("Com quantas cartas você quer jogar? [4 - 14]"));
    if(qntCards < 4 || qntCards%2 !== 0 || qntCards > 14){
        validateInput();
    }

    startGame();
}

validateInput();