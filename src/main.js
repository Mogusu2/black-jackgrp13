class Card {
    static cardDesign(myCard){
        const card = document.createElement('div');
        card.style.width = "150px";
        card.style.height = "230px";
        card.style.border = "2px solid black"
        card.style.borderRadius = "15px"
        card.style.alignContent = "center"
        card.style.textAlign = "center"
        card.style.display = "block"
        card.style.position = "relative"
        
        const suit = document.createElement('img');
        suit.src = "./media/suit.png"
        suit.style.width = "75%"
        suit.style.height = "60%"
        card.appendChild(suit); 

        const cardNumber = document.createElement('p');
        cardNumber.innerText = myCard;
        cardNumber.style.fontSize = "20px"
        cardNumber.style.position = "absolute"
        cardNumber.style.top = '3px'
        cardNumber.style.left = "10px"
        cardNumber.style.fontWeight = "bold"
        card.appendChild(cardNumber);

        const reversecardNumber = document.createElement('p');
        reversecardNumber.innerText = myCard;
        reversecardNumber.style.fontSize = "20px"
        reversecardNumber.style.position = "absolute"
        reversecardNumber.style.bottom = '-15px'
        reversecardNumber.style.right = "10px"
        reversecardNumber.style.fontWeight = "bold"
        reversecardNumber.style.transform = "rotate(180deg)"
        card.appendChild(reversecardNumber);
        return card;
    }
}


class HigherCards {

    static cardDesign(myImage, myCard){
        
        const card = document.createElement('div');
        card.style.width = "150px";
        card.style.height = "230px";
        card.style.border = "2px solid black"
        card.style.borderRadius = "15px"
        card.style.alignContent = "center"
        card.style.textAlign = "center"
        card.style.display = "block"
        card.style.position = "relative"
        
        const suit = document.createElement('img');
        
        suit.src = `${myImage}`
        suit.style.width = "75%"
        suit.style.height = "60%"

        //change image dimentions if card is upside down
        if (myCard  === ""){
            suit.style.display ="block"
            suit.style.margin = "auto"
            suit.style.width = "93%"
            suit.style.height = "93%"
        }
        card.appendChild(suit);

        const cardNumber = document.createElement('p');
        cardNumber.innerText = myCard;
        cardNumber.style.fontSize = "20px"
        cardNumber.style.fontWeight = "bold"
        cardNumber.style.position = "absolute"
        cardNumber.style.top = '3px'
        cardNumber.style.left = "10px"
        card.appendChild(cardNumber);

        const reversecardNumber = document.createElement('p');
        reversecardNumber.innerText = myCard;
        reversecardNumber.style.fontSize = "20px"
        reversecardNumber.style.position = "absolute"
        reversecardNumber.style.bottom = '-15px'
        reversecardNumber.style.fontWeight = "bold"
        reversecardNumber.style.right = "10px"
        reversecardNumber.style.transform = "rotate(180deg)"
        card.appendChild(reversecardNumber);
        
        return card
    }
    static setDownsideDimentions(width,height){
        this.suit.style.width = width;
        this.suit.style.height = height
    }
}
const card2 = Card.cardDesign(2)
let card3 = Card.cardDesign(3)
let card4 = Card.cardDesign(4)
const card5 = Card.cardDesign(5)
let card6 = Card.cardDesign(6)
const card7 = Card.cardDesign(7)
const card8 = Card.cardDesign(8)
const card9 = Card.cardDesign(9)
const card10 = Card.cardDesign(10)

let king = HigherCards.cardDesign("./media/king.png", "K")
const queen = HigherCards.cardDesign("./media/queen.png", "Q")
let jack = HigherCards.cardDesign("./media/jack.png",'J')
const ace = HigherCards.cardDesign("./media/ace.png", "A")


function displayLowLevelCards (){
    const cards2_7 = document.querySelector('#cards2_7');
    cards2_7.appendChild(card2);
    cards2_7.appendChild(card3);
    cards2_7.appendChild(card4);
    cards2_7.appendChild(card5);
    cards2_7.appendChild(card6);
    cards2_7.appendChild(card7);
    cards2_7.appendChild(card8);
    cards2_7.appendChild(card9);
    cards2_7.appendChild(card10);
}


function displayFaceCards (){
    const faceCards = document.querySelector('#face_cards');
    faceCards.appendChild(jack);
    faceCards.appendChild(queen);
    faceCards.appendChild(king);
}


function displayAce (){
    const aces = document.querySelector('#aces');
    aces.appendChild(ace);
}