const mobileNumber = "01122334455" ;
const pinNumber = 1234;
 
// Get Input Value function-----------------------------------------

function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}


// Login system--------------------------------

document.getElementById('login-btn')
    .addEventListener('click', function(e){
        e.preventDefault();
         const invalidMobileNumber = document.getElementById('invalid-mobile-number');
         const invalidPin = document.getElementById("invalid-pin-number");
        if(getInputValue("login-mobile-number").length === 0){
          
            invalidMobileNumber.textContent = 'Please enter mobile number';
            return;
        } else if(mobileNumber !== getInputValue("login-mobile-number")) {
            invalidMobileNumber.textContent = 'Wrong mobile number';
            return;
        }else if(mobileNumber === getInputValue("login-mobile-number")){
            invalidMobileNumber.textContent ='';
        }

        if(getInputValue("login-pin-number").length === 0){
            invalidPin.textContent = 'Please enter pin number';
            return;
        } else if(pinNumber !== parseInt(getInputValue("login-pin-number"))){
             invalidPin.textContent = 'Wrong pin Number'
            return;
        }

        document.getElementById("login-mobile-number").value = '';
        window.location.href = "./home.html";
     
    });



    
