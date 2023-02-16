// where we need to click event handler will use there

// step-1 add event listener to the calculate button
document.getElementById('calculate-btn').addEventListener('click', function(){


    // step-2: get the income amount  from the income input field
    // for input filed use .value to the get the value from inside input filed
    const incomeField = document.getElementById('income-box');
    const newIncomeAmountString = incomeField.value ;
    const newIncomeAmount = parseFloat(newIncomeAmountString);
     // // step-7 for clear the income field
     incomeField.value = ' ';
    
   




    const foodField = document.getElementById('food-box');
    const newFoodAmountString = foodField.value ;
    const newFoodAmount = parseFloat(newFoodAmountString);
     // // step-7 for clear the food field
     foodField.value = ' ';
    
  


    const rentField = document.getElementById('rent-box');
    const newRentAmountString = rentField.value ;
    const newRentAmount = parseFloat(newRentAmountString);
     // // step-7 for clear the rent field
      rentField.value = ' ';
    




    const clothesField = document.getElementById('clothes-box');
    const newClothesAmountString = clothesField.value ;
    const newClothesAmount = parseFloat(newClothesAmountString);
     // // step-7 for clear the clothes field
     clothesField.value = ' ';
    
    // // step for give a alert if user do not enter a number 
    if(isNaN(newIncomeAmount && newRentAmount && newClothesAmount && newFoodAmount )){
         alert('please enter a amount with the number');
         return;
     }



    
    
        const expense = newRentAmount + newFoodAmount + newClothesAmount;
        const total = document.getElementById('total-expense');
        total.innerText = expense;
        
      
    if(expense > newIncomeAmount){
        alert('sorry!your Income balance is less than your expense balance .So please Try to expense as many income balance you have')
        
    }
       



const myBalance = newIncomeAmount - expense;
const balance = document.getElementById('total-balance');
balance.innerText = myBalance;


})

   