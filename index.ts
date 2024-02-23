let cardInput: HTMLInputElement = document.querySelector(".card-input");
cardInput.addEventListener("input", (event) => {
    const value = filterNonDigits(cardInput.value)
    cardInput.value = Dash(value)

    let firstCharMastercard = value.charAt(0) + value.charAt(1) + value.charAt(2) + value.charAt(3);
    let firstCharVisa = value.charAt(0);
    let firstCharAmex = value.charAt(0) + value.charAt(1);
    let firstCharDiscover = value.charAt(0) + value.charAt(1) + value.charAt(2) + value.charAt(3);
    let firstCharDiners = value.charAt(0) + value.charAt(1);
    let mastercard = document.querySelector("#mastercard");
    let visa = document.querySelector("#visa");
    let amex = document.querySelector("#amex");
    let discover = document.querySelector("#discover");
    let diners = document.querySelector("#diners");

    //Podmienka na mastercard
    if (firstCharMastercard >= "51" && firstCharMastercard <= "55" || firstCharMastercard >= "2221" && firstCharMastercard <= "2720") {
        mastercard.classList.add("active");
    } else {
        mastercard.classList.remove("active")
    }

    //Podmienka na visu
    if (firstCharVisa == "4") {
        visa.classList.add("active");
    } else {
        visa.classList.remove("active")
    }

    //Podmienka na AmericanExpress
    if (firstCharAmex == "34" || firstCharAmex == "37") {
        amex.classList.add("active");
    } else {
        amex.classList.remove("active")
    }

    //Podmienka na Discover
    if (firstCharDiscover == "65" || firstCharDiscover >= "644" && firstCharDiscover <= "649" || firstCharDiscover == "6011") {
        discover.classList.add("active");
    } else {
        discover.classList.remove("active")
    }

    //Podmienka na Diners club
    if (firstCharDiners == "36" || firstCharDiners == "55") {
        diners.classList.add("active");
    } else {
        diners.classList.remove("active")
    }
});

const filterNonDigits = (cardInput: string) => {
    return cardInput.replace(/\D/g, '').slice(0, 16);
};

function Dash(cardInput: string): string {
    const filterNumber = cardInput.match(/.{1,4}/g);

    if (filterNumber) {
        return filterNumber.join('-');
    } else {
        return ''; 
    }
};
