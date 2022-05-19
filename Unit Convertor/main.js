let num = prompt("Enter the number:")

function display() {
    document.getElementById("number").textContent  = num
    lengthCalculator()
    volumeCalculator()
    massCalculator()
}

function lengthCalculator() {
    let feet = 3.2808 * num 
    let meter = 0.3048 * num 
    let result = `${num} meters = ${feet.toFixed(3)} feet | ${num} feet = ${meter.toFixed(3)} meters`

    document.getElementById("length").textContent = result
}

function volumeCalculator() {
    let liter = 0.2641 * num 
    let gallon = 3.7854 * num 
    let result = `${num} liters = ${liter.toFixed(3)} gallons | ${num} gallons = ${gallon.toFixed(3)} liters`

    document.getElementById("volume").textContent = result
}

function massCalculator() {
    let kg = 2.2046 * num 
    let lbs = 0.4536 * num 
    let result = `${num} kilos = ${kg.toFixed(3)} pounds | ${num} pounds = ${lbs.toFixed(3)} kilos`

    document.getElementById("mass").textContent = result
}