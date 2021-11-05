let qntCards = 0;
let countSelected = 0;
let qntMoves = 0;
let card1, card2;
let card1Selected, card2Selected;

function compareCards(){
    qntMoves++;    

    if(card1 !== card2){
        card1Selected.classList.remove("spin");
        card2Selected.classList.remove("spin");
    } else{
        qntCards -= 2;
        card1Selected.removeAttribute("onclick");
        card2Selected.removeAttribute("onclick");
    }
    console.log(qntCards)
    countSelected = 0;
    card1 = undefined;
    card2 = undefined;

    if(qntCards === 0){
        alert(`Você ganhou em ${qntMoves} jogadas!`);
    }
}

function cardsSelect(card){ 
    if (countSelected === 1){
        card1 = card.innerHTML;
        card1Selected = card;
    } else if(countSelected === 2){
        card2 = card.innerHTML;
        card2Selected = card;
        compareCards();
    }
}

function turnCard(card){
    countSelected++;
    card.classList.add("spin");
    setTimeout(() => cardsSelect(card), 1000);
}

function distributeCards(cardsGame){
    const gameBoard = document.querySelector("main");
    cardsGame.map(card => {
        gameBoard.innerHTML += `
        <div class="card" data-identifier="card" onclick="turnCard(this);">
            <div class="front-face face" data-identifier="front-face">
                <img src="assets/front.png" alt="Parrot localizado na frente das cartas">
            </div>
            <div class="back-face face" data-identifier="back-face">
                <img src="assets/${card}parrot.gif" alt="Gif do ${card}parrot">
            </div>
        </div>
        `;
    });    
}

function comparator() { 
	return Math.random() - 0.5; 
}

function shuffleCards(){
    const cards = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
    let cardsGame = [];
    cards.map((card, i) => {
        if (i < qntCards/2){
            cardsGame.push(card);
            cardsGame.push(card);
        }
    });
    cardsGame.sort(comparator);
    distributeCards(cardsGame);
}

function validateInput(){
    qntCards = 10; //Number(prompt("Com quantas cartas você quer jogar? [4 - 14]"));
    if(qntCards < 4 || qntCards%2 !== 0 || qntCards > 14){
        validateInput();
    }

    shuffleCards();
}

validateInput();