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