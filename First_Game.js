document.addEventListener("DOMContentLoaded", () => {

//data array

     const cardArrayList = [
         {
             name: 'fries',
             img: './fries.png'
         },
         {
            name: 'fries',
            img: './fries.png'
        },
        {
            name: 'cheeseburger',
            img: './cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: './cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: './hotdog.png'
        },
        {
            name: 'hotdog',
            img: './hotdog.png'
        },
        {
            name: 'ice-cream',
            img: './ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: './ice-cream.png'
        },
        {
            name: 'milkshake',
            img: './milkshake.png'
        },
        {
            name: 'milkshake',
            img: './milkshake.png'
        },
        {
            name: 'pizza',
            img: './pizza.png'
        },
        {
            name: 'pizza',
            img: './pizza.png'
        }
     ];


     cardArrayList.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createCardBoard() {
        for (let i = 0; i < cardArrayList.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', './images/blank.png')
            card.className = "blank"
            card.setAttribute('data-id', i)
            card.addEventListener('click', changeCard)
            grid.appendChild(card)
        }
    }

    function Refresh(t){
        setTimeout("location.reload(true);",t);
    }

    function checkCardMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', './white.png')
            cards[optionTwoId].setAttribute('src', './white.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', './blank.png')
            cards[optionTwoId].setAttribute('src', './blank.png')
            alert('Sorry, try again')     
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArrayList.length/2) {
            resultDisplay.textContent = ' Congragulation you found them all.'
            Refresh(100);
        }
    }



    function changeCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArrayList[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArrayList[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkCardMatch, 500)
        }
    }


    createCardBoard();

});
