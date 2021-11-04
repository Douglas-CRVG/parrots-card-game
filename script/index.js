let qntCards = 0;

function cardsSelect(card){
    alert(card);
}

function turnCard(card){
    card.classList.add("spin");
    cardsSelect(card);
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