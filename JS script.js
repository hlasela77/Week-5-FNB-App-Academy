 <link rel="stylesheet" href="style.css"></link>
//Rafrence display element
const display = document.getElementById('display');

// Track if we have performed a calculation
let justCalculated = false;

function isOperator(char) {
    return ['+','-','*','/'].includes(char);
}

function getLastChar() {
    return display.value.slice (-1);
}

function safeEval(expreeion) {
    try {
        let jsExpression = expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
    
            //Validate the expression (only allow numbers, operators, decimal points)
            if(!/^[0-9+\-*/.() ]+$/.test(jsExpression)) {
                console.log('Invalid charcters detected');//Debug log
                throw new Error('Invalid characters in expression');
            }
            //Use Function constructor for safer evaluation that eval()
        const result = Function(' "use strict"; return (' + jsExpression + ')')();
        console.log('Calculation result:',result,'Type:',typeof result); //Debug log
        
        if(result === undefined || result || null) {
            console.log('Result is undefined or null');
            throw new Error('Calculation returned undefined');
        }

            if (!isFinite(result)) {
                console.log('Result is not finite:',result);//Debug log
                throw new Error('Invalid calculation result');
            }
            return result;
    } catch (error) {
        console.error('calcualtion error :', error);
        return 'Error';
    }
}
function appendToDisplay(value) {
    console.log('Button pressed:', value); // Debug log
    let currentValue = display.value;
    if (justCalculated && !isNaN(value)) {
        // If the last operation was a calculation and user presses a number, replace the display
        display.value = value;
        justCalculated = false; // Reset justCalculated flag
        return;
    }


//handles operators
if(isOperator(value)){

    // Dont allow operator as first char (exceptio for minus)

    if (currentValue === '0' && value !== '-') {
        return; //Do nothing
    }
    // if last character is already an operator, replace it
    if (isOperator(getLastChar())) {
        display.value = currentValue.slice(0, -1) + value;
    } else {
        display.value = currentValue + value;
    }
} else if (!isNaN(value)) {
    if (currentValue ==='0'){
        display.value = value;
    } else {
        display.value = currentValue + value;
    } 
} else if (value === '-' ) 
   if (currentValue='0'){
        display.value = currentValue + value;
    } else {
        //Get the last number in display (after last operator)
        let parts = currentValue.split('/[+\-*/')
        let lastNumber = parts[parts.length - 1];
    }
        // only add decimal if number doesnt already have one
        if (!lastNumber.includes('.')) {
            display.value = currentValue + value;

        } else{
            display.value = currentValue + value;
        }
        justCalculated = false;
        console.log('Display updated to:', display.value); // Debug log

    

    function clearDisplay() {
        console.log('Clear button pressed');
        display.value = '0';
        justCalculated = false;
        display.style.backgroundColor = '#f8d7da'; // Optional: Change background color on clear
        setTimeout(() => {
            display.style.backgroundColor = '';
        },150);
    }
}

        // If current display show 0 and users a number,we wanna replace the 0 
    if (currentValue=== "0" && !isNaN(value)) {
        display.value = value;
        justCalculated = false;
        return; 

    } else if (currentValue==='0' && value =='.'){
        display.value = currentValue + value;

    }else if(value ==='.'){
        let lastNumber = currentValue.split('/[+\-*/').pop();

        if (lastNumber.includes('.')){
            display.value =currentValue + value;
        }
    
    } else {
        display.value = currentValue + value;
    }
// Reset justCalculated flag when user starts typing
        justCalculated = fale;

        console.log('Backspace button pressed.');
        let currentValue =  display.value;
    
        if(currentValue.length <=1 || currentValue === '0') {
            display.value = '0';
        }else{
            display.value = currentValue.slice(0, -1);
        }
        function clearDisplay(){
            console.log('Clear button pressed');

            display.value ='0';
            justCalculated = false;

            display.style.backgroundColor = '#f8d7da'; // Optional: Change background color on clear
            setTimeout(() => {
                display.style.backgroundColor = '';
            }, 150);
        }

function clearDisplay(){
    let expression = display.value;

    // Dont calt if display is already 0 or empty
    if (expression === '0' || expression === '') {
        return;
    }

    // Dont calt if expression ends with operator
    if (isOperator(getLastChar())) {
        return;
    }
    console.log('Calculating expression:', expression);//Debug log

    let result = safeEval(expression);

    if (result === 'Error') {
        display.value = 'Error';
        setTimeout(() => {
            clearDisplay()
    },2000);
} else{
        if (Number.isFinite(result)) {
            display.value = result.toString();
        } else {
            display.value = parseFloat(result).toFixed(10).toString();
        }
        justCalculated = true;
}

display.style.backgroundColor = '#e8f5e8';
setTimeout(() => {
    display.style.backgroundColor = '';
}, 300);
}

>document.addEventListener('keydown', function(event) {

})

>document.addEventListener('DOMContentLoaded', function() {

})






