function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText)
    // clear input field 
    depositInput.value = '';
    return depositAmount;
};
function updateTotalField(totalFieldId,totalAmount) {
    const total = document.getElementById(totalFieldId);
        const totalText = total.innerText;
        const previousTotal = parseFloat(totalText)
        // console.log(depositTotalText);
        total.innerText = totalAmount + previousTotal;
};
function getCurrentBalance() {
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        return previousBalanceTotal;
};
function updateBalance(depositAmount,isAdd) {
        const balanceTotal = document.getElementById('balance-total');
        // const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = updateBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
            
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
        
    }
};

document.getElementById('deposit-btn').addEventListener

    ('click', function () {
        
        const depositAmount = getInputValue('deposit-amount');
        if (depositAmount > 0) {
            updateTotalField('total-deposit',depositAmount)
            updateBalance(depositAmount,true)
        }
    });

document.getElementById('withdrow-btn').addEventListener
    ('click', function () {
        const withdrawAmount = getInputValue('withdrow-amount');
        const currentBalance = updateBalance();
        if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
            updateTotalField('withdrow-total', withdrawAmount);
            updateBalance(withdrawAmount, false)
        }
    });
