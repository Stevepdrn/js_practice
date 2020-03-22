const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 3, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];

const batch = [valid1, valid2, valid3, invalid1, invalid2, invalid3];

function isOdd(number) {
    return number % 2 === 0;
}

const validateCred = array => {
    let sum = 0;
    let newArray = array.slice();
    let checkValue = newArray.pop();
    newArray.reverse();
    // console.log(array)
    for (let i = 0; i < newArray.length; i++) {
        if (isOdd(i)) {
            let numb = newArray[i] * 2
            if (numb > 9) {
                sum += (numb - 9);
            } else {
                sum += numb;
            }
        } else {
            sum += newArray[i];
        }
        // console.log(sum)
    }
    let checkNumber = sum + checkValue
    return (checkNumber % 10 === 0);
}


console.log(validateCred(valid2));




function findInvalidCards(cards) {
    let invalidCards = [];
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        // console.log(card);
        if (!validateCred(card)) {
            // console.log(card);
            invalidCards.push(card);
            // console.log('Hi' + checkInv[i]);
        }
    }
    return invalidCards;
}


// console.log(findInvalidCards(batch));
let cards = findInvalidCards(batch);
console.log(cards);