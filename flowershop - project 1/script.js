// DOM

// INPUTS

let rosesAmount = document.querySelector("#roses-amount");
let liliesAmount = document.querySelector("#lilies-amount");
let gerberaAmount = document.querySelector("#gerbera-amount")

let chocolateAmount = document.querySelector("#chocolate-amount");
let champagneAmount = document.querySelector("#champagne-amount");
let boxOfCandiesAmount = document.querySelector("#box-of-candies-amount");

// BUTTONS

let btnCalculate = document.querySelector("#calculate");
let btnReset = document.querySelector("#reset");

// DIVS

let divRoses = document.querySelector("#roses-amount-print");
console.log(divRoses);
let divLilies = document.querySelector("#lilies-amount-print");
console.log(divLilies);
let divGerbera = document.querySelector("#gerbera-amount-print");
console.log(divGerbera);

let divChocolates = document.querySelector("#chocolate-amount-print");
let divChampagne = document.querySelector("#champagne-amount-print");
let divboxOfChocolates = document.querySelector("#box-of-chocolates-amount-print");

let withoutDiscount = document.querySelector("#without-discount");
let withDiscount = document.querySelector("#with-discount");

// COUNTERS

let rosesCounter = 0;
let liliesCounter = 0;
let gerberaCounter = 0;

btnCalculate.addEventListener("click", () => {
    for (let i = 0; i < rosesAmount.value; i++) {
        if (rosesCounter < rosesAmount.value) {
        let rosesImage = document.createElement('img');
        rosesImage.src = "https://www.onlygfx.com/wp-content/uploads/2016/05/red-rose-2.png";
        rosesImage.width = 100;
        divRoses.appendChild(rosesImage);
        rosesCounter++;
        }
    }
    for (let i = 0; i < liliesAmount.value; i++) {
        if (liliesCounter < liliesAmount.value) {
        let liliesImage = document.createElement('img');
        liliesImage.src = "https://i.pinimg.com/originals/5c/eb/d9/5cebd9561dd9d567137a63e0dd3eff45.png";
        liliesImage.width = 100;
        divLilies.appendChild(liliesImage);
        liliesCounter++;
        }
    }
    for (let i = 0; i < gerberaAmount.value; i++) {
        if (gerberaCounter < gerberaAmount.value) {
        let gerberaImage = document.createElement(`img`);
        gerberaImage.src = "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Flowers-PNG/Red_Gerber_%20Daisy_with_Stem_Clipart.png?m=1434276716";
        gerberaImage.width = 100;
        divGerbera.appendChild(gerberaImage);
        gerberaCounter++;
        }
    }
});