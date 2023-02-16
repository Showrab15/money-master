// where we need to click event handler will use there

// step-1 add event listener to the deposit button
document.getElementById('calculate-btn').addEventListener('click', function(){

    // step-2: get the deposit amount  from the deposit input field
    // for input filed use .value to the get the value from inside input filed
    const incomeField = document.getElementById('income-box');
    const newIncomeAmountString = incomeField.value ;
    const newIncomeAmount = parseFloat(newIncomeAmountString);
     // // step-7 for clear the deposit field
     incomeField.value = ' ';
    
   




    const foodField = document.getElementById('food-box');
    const newFoodAmountString = foodField.value ;
    const newFoodAmount = parseFloat(newFoodAmountString);
     // // step-7 for clear the deposit field
     foodField.value = ' ';
    
  


    const rentField = document.getElementById('rent-box');
    const newRentAmountString = rentField.value ;
    const newRentAmount = parseFloat(newRentAmountString);
     // // step-7 for clear the deposit field
      rentField.value = ' ';
    




    const clothesField = document.getElementById('clothes-box');
    const newClothesAmountString = clothesField.value ;
    const newClothesAmount = parseFloat(newClothesAmountString);
     // // step-7 for clear the deposit field
     clothesField.value = ' ';
    
    // // step for give a alert if user do not enter a number 
    if(isNaN(newIncomeAmount && newRentAmount && newClothesAmount && newFoodAmount )){
         alert('please enter a amount with the number');
         return;
     }

const expense = newRentAmount + newFoodAmount + newClothesAmount;
const total = document.getElementById('total-expense');
total.innerText = expense;




const myBalance = newIncomeAmount - expense;
const balance = document.getElementById('total-balance');
balance.innerText = myBalance;


})

    // // step-7 for clear the deposit field
    // depositField.value = ' ';
    
    // // step for give a alert if user do not enter a number 
    // if(isNaN(newDepositAmount)){
    //     alert('please enter a amount with the number');
    //     return;
    // }
    
    // // step-3: get the current deposit  total
    // // for non-input(element other than input, textarea) we will use innerText to get value 
    // const depositTotalElement = document.getElementById('deposit-total');
    // const previousDepositAmountString = depositTotalElement.innerText;
    // const previousDepositAmount = parseFloat(previousDepositAmountString)
    
    // // step-4 add numbers to set total deposit amount
    // const currentDepositTotal = previousDepositAmount + newDepositAmount;
    
    // // set the deposit total
    // depositTotalElement.innerText = currentDepositTotal;
    
    // // step-5: get balance current total
    // const balanceTotalElement = document.getElementById('total-balance');
    // const previousBalanceTotalString = balanceTotalElement.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    
    
    // // // step-6: calculate current total balance
    // const currentBalanceTotal = previousBalanceTotal + newDepositAmount
    
    // // // set the current total balance
    // balanceTotalElement.innerText = currentBalanceTotal;
    
    
    
    
    // 