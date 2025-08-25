// store data------------------------------

const pin = 1234;
const bonusCoupon = "GR4500";
const transactionData = [];


// Function generate -----------------------

// take input function ---------------------

function takeInputValue(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

function takeInputValueNumber(id){
    const inputValueNumber = parseInt(document.getElementById(id).value);
    return inputValueNumber;
}

//  inner text -------------------------------

function takeInnerTextNumber(id){
    const innerText = document.getElementById(id).innerText;
        return parseInt(innerText);
}

// Toggle function ------------------------------

function toggleCard(id){
                 const moneyCards = document.getElementsByClassName('money-card');
                 for(const card of moneyCards){
                 card.style.display = 'none';
            }
            document.getElementById(id)
                .style.display = 'block';
            }

function styleChangeCard(id){
         const moneyClass = document.getElementsByClassName('money-class');
            for(const money of moneyClass){
                money.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
                money.classList.add('border-[#0808081a]');
            }
            document.getElementById(id)
                .classList.remove('border-[#0808081a]');
            document.getElementById(id)
                .classList.add("border-[#0874f2]","bg-[#0874f20d]");
}


// logout -----------------------------------------

    document.getElementById('log-out-btn')
            .addEventListener('click',function (e){
                e.preventDefault();
                window.location.href = "./login.html";
            })

       
 // Add Money Features -----------------------------  
        const noSelect = document.getElementById("no-Select");
        const wrongBankAccount = document.getElementById('wrong-bank-account');
        const wrongAmount = document.getElementById('Wrong-amount');
        const wrongPin = document.getElementById('wrong-pin');
 

         document.getElementById('add-money-card')
            .addEventListener('click',function(){
                toggleCard('add-money-form');
                styleChangeCard('add-money-card');  
            })

        document.getElementById("add-money-btn")
            .addEventListener('click',function(e){
                e.preventDefault();
        
         const availableAmount = takeInnerTextNumber('available-amount') ;
         const addAmount = takeInputValueNumber('add-amount');
        
        if(takeInputValue('select-any') === ''){
            noSelect.textContent = 'Please select a bank';
            return;
        }else {
            noSelect.textContent = '';
        }
        if(takeInputValue('bank-account-number') === ""){
            wrongBankAccount.textContent = 'Please Enter an Account Number';
            return;
        }else if(takeInputValue('bank-account-number').length !== 11 || String(parseInt(takeInputValue('bank-account-number'))).length !==11){
            wrongBankAccount.textContent = 'Invalid Bank Account Number';
            return;
        }else {
            wrongBankAccount.textContent = '';
        }
        if(takeInputValue('add-amount') === "" ){
            wrongAmount.textContent = 'please Enter Amount';
            return;
        } else if( addAmount < 50 ) {
            wrongAmount.textContent = 'Invalid amount';
            return;
        }else {
            wrongAmount.innerText = '';
        }
        if(takeInputValue('pin-number') === "" ){
            wrongPin.innerText = 'Please Enter Pin Number';
            return;
        }else if(takeInputValueNumber('pin-number') !== pin ){
            wrongPin.innerText = 'Wrong pin number';
            return;
        }else{
            wrongPin.innerText = '';
        }

        alert(addAmount + " " + "$ has been added to your Payoo A/C" )
        const newAvailableAmount = availableAmount + addAmount;
        document.getElementById('available-amount')
        .innerText = newAvailableAmount;

        document.getElementById('select-any')
            .value = '';
        document.getElementById('bank-account-number')
            .value = '';
        document.getElementById('add-amount')
            .value = '';
        document.getElementById('pin-number')
            .value = '';


        const data = {
            name: "Add Money",
            image: "./assets/wallet1.png",
            date: new Date().toLocaleString()
        } 
        transactionData.push(data) ;  
    })



 // Cash out Features -----------------------------     
        const wrongCashOutAmount = document.getElementById('wrong-cash-out-amount');
        const wrongCashOutPin = document.getElementById('wrong-cash-out-pin');
        const wrongAgentAccount = document.getElementById('wrong-agent-account');


 document.getElementById('cash-out-card')
    .addEventListener('click',function(e){
        toggleCard('cashout-form');
        styleChangeCard('cash-out-card');
    })

    document.getElementById('cash-out-btn')
        .addEventListener('click',function(e){
            e.preventDefault();

        const availableAmount = takeInnerTextNumber('available-amount') ;
        const cashOutAmount = takeInputValueNumber('cash-out-amount');
        
        if(takeInputValue('agent-account-number') === ""){
            wrongAgentAccount.textContent = 'Please Enter an Agent Number';
            return;
        }else if(takeInputValue('agent-account-number').length !== 11 || String(parseInt(takeInputValue('agent-account-number'))).length !==11){
            wrongAgentAccount.textContent = 'Invalid Agent Number';
            return;
        }else {
            wrongAgentAccount.textContent = '';
        }
        if(takeInputValue('cash-out-amount') === "" ){
            wrongCashOutAmount.textContent = 'please Enter Amount';
            return;
        } else if( cashOutAmount < 50 || cashOutAmount > availableAmount ) {
            wrongCashOutAmount.textContent = 'Invalid amount';
            return;
        }else {
            wrongCashOutAmount.innerText = '';
        }
        if(takeInputValue('cash-out-pin-number') === "" ){
            wrongCashOutPin.innerText = 'Please Enter Pin Number';
            return;
        }else if(takeInputValueNumber('cash-out-pin-number') !== pin ){
            wrongCashOutPin.innerText = 'Wrong pin number';
            return;
        }else{
            wrongCashOutPin.innerText = '';
        }

        alert("Cash Out" + " " + cashOutAmount + "$" + " " + "from your Payoo A/C.")
        const newAvailableAmount = availableAmount - cashOutAmount;
        document.getElementById('available-amount')
        .innerText = newAvailableAmount;

        document.getElementById('agent-account-number')
            .value = '';
        document.getElementById('cash-out-amount')
            .value = '';
        document.getElementById('cash-out-pin-number')
            .value = '';


        const data = {
            name: "Cash Out",
            image: "./assets/send1.png",
            date: new Date().toLocaleString()
        } 
        transactionData.push(data) ;  
        })



 // Transfer Money -----------------------------     
        const wrongTransferAccount = document.getElementById('wrong-transfer-account');  
        const wrongTransferAmount = document.getElementById('wrong-transfer-amount');
        const wrongTransferPin = document.getElementById('wrong-transfer-pin');
        

     document.getElementById('transfer-money-card')
        .addEventListener('click',function(e){
        toggleCard('transfer-money-form');
        styleChangeCard('transfer-money-card');
    })

    document.getElementById('transfer-btn')
        .addEventListener('click',function(e){
            e.preventDefault();

        const availableAmount = takeInnerTextNumber('available-amount') ;
        const transferAmount = takeInputValueNumber('transfer-amount');
        
        if(takeInputValue('transfer-account-number') === ""){
            wrongTransferAccount.textContent = 'Please Enter an User Account';
            return;
        }else if(takeInputValue('transfer-account-number').length !== 11 || String(parseInt(takeInputValue('transfer-account-number'))).length !==11){
            wrongTransferAccount.textContent = 'Invalid User Account Number';
            return;
        }else {
            wrongTransferAccount.textContent = '';
        }
        if(takeInputValue('transfer-amount') === "" ){
            wrongTransferAmount.textContent = 'please Enter Amount';
            return;
        } else if( transferAmount < 1 || transferAmount > availableAmount ) {
            wrongTransferAmount.textContent = 'Invalid amount';
            return;
        }else {
            wrongTransferAmount.innerText = '';
        }
        if(takeInputValue('transfer-pin-number') === "" ){
            wrongTransferPin.innerText = 'Please Enter Pin Number';
            return;
        }else if(takeInputValueNumber('transfer-pin-number') !== pin ){
            wrongTransferPin.innerText = 'Wrong pin number';
            return;
        }else{
            wrongTransferPin.innerText = '';
        }

        alert("Transfer Money" + " " + transferAmount + "$" + " " + "from your Payoo A/C.")
        const newAvailableAmount = availableAmount - transferAmount;
        document.getElementById('available-amount')
        .innerText = newAvailableAmount;

        document.getElementById('transfer-account-number')
            .value = '';
        document.getElementById('transfer-amount')
            .value = '';
        document.getElementById('transfer-pin-number')
            .value = '';

            const data = {
            name: "Transfer Money",
            image: "./assets/money1.png",
            date: new Date().toLocaleString()
        } 
        transactionData.push(data) ;  
        })


 // Get Bonus Features -----------------------------     
 
const wrongCouponNumber = document.getElementById('wrong-coupon-number');
        
    document.getElementById("get-bouns-card")
    .addEventListener('click',function(e){
        toggleCard('get-bouns-form');
        styleChangeCard("get-bouns-card");
    })

    document.getElementById('bonus-btn')
        .addEventListener('click',function(e){
            e.preventDefault();

        const availableAmount = takeInnerTextNumber('available-amount') ;

       if(takeInputValue('bonus-coupon-number') === ''){
            wrongCouponNumber.innerText = 'Please enter a valid Coupon';
            return;
        }else if(takeInputValue('bonus-coupon-number') !== bonusCoupon){
            wrongCouponNumber.innerText = 'Wrong Coupon';
            return;
        }else {
            wrongCouponNumber.innerText = '';
        }

        alert("You got bonus 4500$ by using coupon")
        const newAvailableAmount = availableAmount + 4500;
        document.getElementById('available-amount')
        .innerText = newAvailableAmount;

        document.getElementById('bonus-coupon-number')
            .value = '';


            const data = {
            name: "Get Bonus",
             image: "./assets/bonus1.png",
            date: new Date().toLocaleString()
        } 
        transactionData.push(data) ;  
        })


 // Pay Bill Features -----------------------------     
 
        const wrongSelect = document.getElementById("wrong-Select");
        const wrongPayBillNumber = document.getElementById('wrong-pay-bill');
        const wrongPayBillAmount = document.getElementById('wrong-pay-bill-amount');
        const wrongPayBillPin = document.getElementById('wrong-pay-bill-pin');
 

        document.getElementById('pay-bill-card')
            .addEventListener('click',function(e){
            toggleCard('pay-bill-form');
            styleChangeCard('pay-bill-card');
    })

        document.getElementById("pay-bill-btn")
            .addEventListener('click',function(e){
                e.preventDefault();
        
         const availableAmount = takeInnerTextNumber('available-amount') ;
         const payBillAmount = takeInputValueNumber('pay-bill-amount');
        
        if(takeInputValue('select-any-bank') === ''){
            wrongSelect.textContent = 'Please select a bank';
            return;
        }else {
            wrongSelect.textContent = '';
        }
        if(takeInputValue('pay-bill-number') === ""){
            wrongPayBillNumber.textContent = 'Please Enter a Pay Bill Number';
            return;
        }else if(takeInputValue('pay-bill-number').length !== 11 || String(parseInt(takeInputValue('pay-bill-number'))).length !==11){
            wrongPayBillNumber.textContent = 'Invalid Pay Bill Number';
            return;
        }else {
            wrongPayBillNumber.textContent = '';
        }
        if(takeInputValue('pay-bill-amount') === "" ){
            wrongPayBillAmount.textContent = 'please Enter Amount';
            return;
        } else if( payBillAmount < 1 || payBillAmount > availableAmount ) {
            wrongPayBillAmount.textContent = 'Invalid amount';
            return;
        }else {
            wrongPayBillAmount.innerText = '';
        }
        if(takeInputValue('pay-bill-pin') === "" ){
            wrongPayBillPin.innerText = 'Please Enter Pin Number';
            return;
        }else if(takeInputValueNumber('pay-bill-pin') !== pin ){
            wrongPayBillPin.innerText = 'Wrong pin number';
            return;
        }else{
            wrongPayBillPin.innerText = '';
        }

        alert("Pay Bill" + " " + payBillAmount + "$ from your Payoo A/C.");
        const newAvailableAmount = availableAmount - payBillAmount;
        document.getElementById('available-amount')
        .innerText = newAvailableAmount;

        document.getElementById('select-any-bank')
            .value = '';
        document.getElementById('pay-bill-number')
            .value = '';
        document.getElementById('pay-bill-amount')
            .value = '';
        document.getElementById('pay-bill-pin')
            .value = '';

            const data = {
            name: "Pay Bill",
            image: "./assets/purse1.png",
            date: new Date().toLocaleString()
        } 
        transactionData.push(data) ;  
    })


 // Transaction Features -----------------------------     
 
 document.getElementById('transaction-card')
    .addEventListener('click',function(e){
        toggleCard('transaction-form');
        styleChangeCard('transaction-card');

        const transactionContainer = document.getElementById('transaction-container')
            transactionContainer.innerText = '';
        for(const data of transactionData){
            const div = document.createElement("div");
            div.innerHTML =`
            <div class="mx-5 bg-white py-[10px] pl-4 mb-4 rounded-xl flex justify-between items-center ">
                <div class="flex items-center gap-3">
                    <div class="bg-[#f4f5f7] p-3 rounded-full">
                        <img class="  " src= ${data.image}>
                    </div>

                <div>
                    <h1 class="font-semibold">${data.name}</h1>
                    <p class="text-[#080808b3] text-[12px]">${data.date}</p>
                </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical mr-3 text-[20px] text-[#08080880]"></i>
            </div>
            
            `

            transactionContainer.appendChild(div);
        } 
    })
 

