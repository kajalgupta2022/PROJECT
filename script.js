let totalSteps = 0;
let totalCalories = 0;
let totalWater = 0;

function updateSteps() {
    const steps = parseInt(document.getElementById('steps').value);
    if (!isNaN(steps) && steps > 0) {
        totalSteps += steps;
        document.getElementById('steps-count').innerText = `Total Steps: ${totalSteps}`;
    }
}

function updateCalories() {
    const calories = parseInt(document.getElementById('calories').value);
    if (!isNaN(calories) && calories > 0) {
        totalCalories += calories;
        document.getElementById('calories-count').innerText = `Total Calories: ${totalCalories}`;
    }
}

function updateWater() {
    const water = parseFloat(document.getElementById('water').value);
    if (!isNaN(water) && water > 0) {
        totalWater += water;
        document.getElementById('water-count').innerText = `Total Water: ${totalWater} liters`;
    }
}
