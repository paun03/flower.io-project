// DOM

// INPUTS

let rosesAmount = document.querySelector("#roses-amount");
let liliesAmount = document.querySelector("#lilies-amount");
let gerberaAmount = document.querySelector("#gerbera-amount")

let chocolateAmount = document.querySelector("#chocolate-amount");
let champagneAmount = document.querySelector("#champagne-amount");
let boxOfChocolatesAmount = document.querySelector("#box-of-candies-amount");

let payWithCash = document.querySelector("#cash");
let payWithCard = document.querySelector("#card");

console.log(payWithCash);
console.log(payWithCard);

// BUTTONS

let btnCalculate = document.querySelector("#calculate");
let btnReset = document.querySelector("#reset");

// DIVS + PARAGRAPHS

let divRoses = document.querySelector("#roses-amount-print");
let divLilies = document.querySelector("#lilies-amount-print");
let divGerbera = document.querySelector("#gerbera-amount-print");

let divChocolates = document.querySelector("#chocolate-amount-print");
let divChampagne = document.querySelector("#champagne-amount-print");
let divBoxOfChocolates = document.querySelector("#chocolate-box-amount-print");

let withoutDiscount = document.querySelector("#without-discount");
let withDiscount = document.querySelector("#with-discount");

let chocolatePar = document.createElement("p");
let champagnePar = document.createElement("p");
let boxOfChocolatesPar = document.createElement("p");

let calculateToTotalComp = document.querySelector("#calculate-total-comp");

let totalSumPar = document.createElement("p");
let discountSumPar = document.createElement("p");

// COUNTERS

let rosesCounter = 0;
let liliesCounter = 0;
let gerberaCounter = 0;

let totalSum = 0;


// FUNCTIONS

let addFlowers = () => {
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
    totalSum += rosesCounter * 150 + liliesCounter * 120 + gerberaCounter * 70;
};

let addGifts = () => {
    if (chocolateAmount.checked && ((rosesAmount.value > 0) || (liliesAmount.value > 0) || (gerberaAmount.value > 0))) {
    chocolatePar.innerText = "+ Chocolate";
    chocolatePar.style.color = "#9E00FF";
    chocolatePar.style.fontSize = "24px";
    divChocolates.appendChild(chocolatePar);
    totalSum += 500;
    } else {
        chocolatePar.innerText = "";
        totalSum += 0;
    }

    if (champagneAmount.checked && ((rosesAmount.value > 0) || (liliesAmount.value > 0) || (gerberaAmount.value > 0))) {
        champagnePar.innerText = "+ Champagne";
        champagnePar.style.color = "#9E00FF";
        champagnePar.style.fontSize = "24px";
        divChampagne.appendChild(champagnePar);
        totalSum += 500;
    } else {
        champagnePar.innerText = "";
    }
    if (boxOfChocolatesAmount.checked && ((rosesAmount.value > 0) || (liliesAmount.value > 0) || (gerberaAmount.value > 0))) {
        boxOfChocolatesPar.innerText = "+ Box Of Chocolates";
        boxOfChocolatesPar.style.color = "#9E00FF";
        boxOfChocolatesPar.style.fontSize = "24px";
        divBoxOfChocolates.appendChild(boxOfChocolatesPar);
        totalSum += 500; 
    } else {
        boxOfChocolatesPar.innerText = "";
    }
};

let calculateToTotal = () => {
    if ((rosesAmount.value > 0) || (liliesAmount.value > 0) || (gerberaAmount.value > 0)) {
        calculateToTotalComp.textContent = "Total Sum: ";
    }
};

let totalSumCalculation = () => {
    if (payWithCard.checked && totalSum > 2000) {
        totalSumPar.innerText = `Your Total Without Discount is: ${totalSum}RSD`;
        totalSumPar.style.color = "#9E00FF";
        totalSumPar.style.fontSize = "16px"; 
        withoutDiscount.appendChild(totalSumPar);
        let discountSum = totalSum * 9/10; 
        discountSumPar.innerText = `Your Total WITH DISCOUNT is: ${discountSum}RSD`;
        discountSumPar.style.color = "#9E00FF";
        discountSumPar.style.fontSize = "32px";  
        withDiscount.appendChild(discountSumPar);
        totalSum = 0;
        discountSum = 0;
    } else {
        discountSumPar.innerText = `Your Total is: ${totalSum}RSD`;
        discountSumPar.style.color = "#9E00FF";
        discountSumPar.style.fontSize = "32px";  
        withDiscount.appendChild(discountSumPar);
        totalSum = 0;
    }
};

btnCalculate.addEventListener("click", () => {
    calculateToTotal();
    addFlowers();
    addGifts();
    totalSumCalculation();
});

btnReset.addEventListener("click", () => {
    location.reload(true);
});
