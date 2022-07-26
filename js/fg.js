function incomeCount() {
    const income = document.getElementById('income-amount');
    const incomeText = income.value;
    const totalIncome = parseInt(incomeText);
    income.value = '';
    
    return totalIncome;
    
}
function getItems(name) {
    const income = document.getElementById(name);
    const incomeText = income.value;
    const totalIncome = parseInt(incomeText);
    // income.value = '';
    return totalIncome;
}
function costCount() {
    const foodCostInput = document.getElementById('food-cost');
    const foodCostText = foodCostInput.value;
    const totalFoodCost = parseInt(foodCostText);
    // foodCostInput.value = '';
    const totalFoodCost = getItems('food-cost');
    const totalRentCost = getItems('rent-cost');
    const totalClothsCost = getItems('cloths-cost');
    const rentCostInput = document.getElementById('rent-cost');
    const rentCostText = rentCostInput.value;
    const totalRentCost = parseInt(rentCostText);
    // rentCostInput.value = '';

    const clothsCostInput = document.getElementById('cloths-cost');
    const clothsCostText = clothsCostInput.value;
    const totalClothsCost = parseInt(clothsCostText);

    const totalCost = totalFoodCost + totalRentCost + totalClothsCost;
    console.log(totalCost);
    return totalCost;
    
}
function balanceCount() {
    const totalIncome = incomeCount();
    console.log(totalIncome);
    const totalCost = costCount();
    console.log(totalCost);
    const balance = parseInt(totalIncome) - parseInt(totalCost);
    console.log(balance);
    return balance;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    
    const expences = document.getElementById('total-expences');
    expences.innerText = costCount();

    const balance = document.getElementById('balance');
    balance.innerText = incomeCount()-costCount();
    console.log(balanceCount());
})

document.getElementById('save-btn').addEventListener('click', function () {
    const saveAmountText = document.getElementById('save-amount').value;
    const saveAmount = parseInt(saveAmountText);
    const bakiTaka =balanceCount();
    const savepersent = bakiTaka * saveAmount /100;
    const totalSaved = document.getElementById('total-save');
    totalSaved.innerText = savepersent;
    const remain = document.getElementById('remain');
    remain.innerText = bakiTaka - savepersent;
})
