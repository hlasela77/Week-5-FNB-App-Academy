//Rafrence display element
const display = document.getElementById(display);

// Track if we have performed a calculation
let justCalculated = false;

function isOperator(char) {
    return ['+','-','*','/'].includes(char);
}

function getLastChar(){
    return display.value.slice (-1);
}

function getLastChar(){
    return display.value.slice(-1);
}
function safeEval(expreeion) {
    try {
        let jsExpression = expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/−/g, '-');

            if(!/^[0-9+\-*/.() ]+$/.test(jsExpression)) {
                throw new Error('Invalid characters in expression');
            }


            const result = function(' "use strict"; return (' + jsExpression + ')')();


            if (!isFinite(result)) {
                throw new Error('Invalid calculation result');
            }
            return result;
    }catch (error) {
        console.error('calcualtion error :', error);
        return 'Error';
    }
}


function appendToDisplay(value){
    console.log('Button pressed:' , value);

    let currentValue= display.value;

    if (justCalculated & !isNaN(value)) {
        display.value= value;
        justCalculated = false;
        return;
    }
if(justCalculated && isOperator(value)){
    display.value = currentValue + value;
    justCalculated = false;
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
} else if (Value === '-' ) 

   if (currentValue='0'){
        display.value = currentValue + value;
    } else {
        
        //Get the last number in display (after last operator)
        let parts = currentValue.split('/[+\-*/')
        let lastNumber = parts[parts.length - 1];

        // only add decimal if number doesnt already have one
        if (!lastNumber.includes('.')) {
            display.value = currentValue + value;
        }


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
            display.value =currentValue + value
        }
    

    } else {
        display.value = currentValue + value;
// Reset justCalculated flag when user starts typing
        justCalculated = fale;

        console.log('Display updated to:', display.value);
    }




}

function clearDisplay(){
    console.log('Clear button pressed.');
    display.value ='0';
    justCalculated = false;

    display.style.backgroundColor ='#f0f0f0'
setTimeout(() => {
    display.style.backgroundColor = '';
},150);
    
}

function deletelast() {
    console.log('Backspace button pressed.');

    let currentValue = display.Value;
    // if theres only one character or its 0 , reset to 0

    if(currentValue.length <= 1 || currentValue ==='0'){
        display.value ='0';
    }else{
        display.value = currentValue.slice(0,-1);
    }

    

function calculate(){
    let expression = display.value;

    // Dont calc if display is 0 or empty
    if(expression === '0' || expression === ''){
        return;
    }
    // Dont calc if expression end with operator
    if (isOperator(getLastChar())) {
        return;
    }
    let result = safeEval(expression);
    if (result === 'Error') {
        display.value = 'Error';
        setTimeout(() => {
            clearDisplay();
        }, 2000);
    } else {

        if (Number.isFinite(result)) {
            display.value = result.toString();
        } else {

            display.value = parseFloat(result).toFixed(10).toString();
        }
        justCalculated = true;
        o
    }
    display.style.backgroundColor = '#d4edda'; // Green background for success
    setTimeout(() => {
        display.style.backgroundColor = '';

    }, 300);


}


>document.addEventListener('Keydown',function(event) {})

>document.addEventListener('DOMContentLoaded', function() {})
    

{
    if (event.key === 'Enter') {}
    }
}



document.addEventListener('DOMContentLoaded', function(){
    console.log('Calculator loaded successfully');
    console.log('Display elemt',display);

    if(display){
        console.log('Current display value',display.value);
        else{
            console.log('Display element not found');
        }
    }
}