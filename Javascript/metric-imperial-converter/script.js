const inputEl = document.querySelector("input");
const convertBtn = document.querySelector("button");
const result1P = document.getElementById("result-1-p");
const result2P = document.getElementById("result-2-p");
const result3P = document.getElementById("result-3-p");
const METER_TO_FEET = 3.281;
const FEET_TO_METER = 0.3048;
const LITER_TO_GALLON = 0.264;
const GALLON_TO_LITER = 3.785;
const KILO_TO_POUND = 2.205;
const POUND_TO_KILO = 0.454;


function convertUnits() {
    let baseValue = Number(inputEl.value);

    let metersToFeet = baseValue * METER_TO_FEET;
    let feetToMeters = baseValue * FEET_TO_METER;
    
    result1P.textContent = 
        baseValue + " meters = " + metersToFeet.toFixed(3) + " feet | " + 
        baseValue + " feet = " + feetToMeters.toFixed(3) + " meters";

    let litersToGallons = baseValue * LITER_TO_GALLON;
    let gallonsToLiters = baseValue * GALLON_TO_LITER;
    
    result2P.textContent = 
        baseValue + " liters = " + litersToGallons.toFixed(3) + " gallons | " + 
        baseValue + " gallons = " + gallonsToLiters.toFixed(3) + " liters";

    let kilosToPounds = baseValue * KILO_TO_POUND;
    let poundsToKilos = baseValue * POUND_TO_KILO;
    
    result3P.textContent = 
        baseValue + " kilograms (kilo) = " + kilosToPounds.toFixed(3) + " pounds | " + 
        baseValue+ " pounds = " + poundsToKilos.toFixed(3) + " kilograms (kilo)";

}



convertBtn.addEventListener("click", convertUnits);
function initializeConverter() {

    if (inputEl.value === "") {
        inputEl.value = 1;
    }

    convertUnits();
}

initializeConverter();