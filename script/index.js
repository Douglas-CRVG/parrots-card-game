let qntCards = 0;

function distributeCards(cardsGame){
    alert(cardsGame);
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
    qntCards = Number(prompt("Com quantas cartas você quer jogar? [4 - 14]"));
    if(qntCards < 4 || qntCards%2 !== 0 || qntCards > 14){
        validateInput();
    }

    shuffleCards();
}

validateInput();