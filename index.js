var cardInput = document.querySelector(".card-input");
cardInput.addEventListener("input", function (event) {
    var value = filterNonDigits(cardInput.value);
    cardInput.value = Dash(value);
    var firstCharMastercard = value.charAt(0) + value.charAt(1) + value.charAt(2) + value.charAt(3);
    var firstCharVisa = value.charAt(0);
    var firstCharAmex = value.charAt(0) + value.charAt(1);
    var firstCharDiscover = value.charAt(0) + value.charAt(1) + value.charAt(2) + value.charAt(3);
    var firstCharDiners = value.charAt(0) + value.charAt(1);
    var mastercard = document.querySelector("#mastercard");
    var visa = document.querySelector("#visa");
    var amex = document.querySelector("#amex");
    var discover = document.querySelector("#discover");
    var diners = document.querySelector("#diners");
    //Podmienka na mastercard
    if (firstCharMastercard >= "51" && firstCharMastercard <= "55" || firstCharMastercard >= "2221" && firstCharMastercard <= "2720") {
        mastercard.classList.add("active");
    }
    else {
        mastercard.classList.remove("active");
    }
    //Podmienka na visu
    if (firstCharVisa == "4") {
        visa.classList.add("active");
    }
    else {
        visa.classList.remove("active");
    }
    //Podmienka na AmericanExpress
    if (firstCharAmex == "34" || firstCharAmex == "37") {
        amex.classList.add("active");
    }
    else {
        amex.classList.remove("active");
    }
    //Podmienka na Discover
    if (firstCharDiscover == "65" || firstCharDiscover >= "644" && firstCharDiscover <= "649" || firstCharDiscover == "6011") {
        discover.classList.add("active");
    }
    else {
        discover.classList.remove("active");
    }
    //Podmienka na Diners club
    if (firstCharDiners == "36" || firstCharDiners == "55") {
        diners.classList.add("active");
    }
    else {
        diners.classList.remove("active");
    }
});
var filterNonDigits = function (cardInput) {
    return cardInput.replace(/\D/g, '').slice(0, 16);
};
function Dash(cardInput) {
    var filterNumber = cardInput.match(/.{1,4}/g);
    if (filterNumber) {
        return filterNumber.join('-');
    }
    else {
        return '';
    }
}
;
