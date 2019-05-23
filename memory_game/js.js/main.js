console.log("Up and running!");




var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png",

},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png",

},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png",

},
{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png",

}
];

var cardsInPlay = [];



var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
};

var flipcard = function(cardId) {
	console.log("User flipped" + cards[1].rank);
	console.log(cards[1].suit);
    console.log(cards[1].cardImage);
    cardsInPlay.push(cards[1].rank);
    console.log("User flipped" + cards[2].rank);
	console.log(cards[2].suit);
    console.log(cards[2].cardImage);
    cardsInPlay.push(cards[2].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

flipcard();





