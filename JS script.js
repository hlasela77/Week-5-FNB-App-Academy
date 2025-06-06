//Rafrence display element
const display = document.getElementById(display);

// Track if we have performed a calculation
let justCalculated = false;

function isOperator(char) {
    return ['+','-','*','/']
}

function getLastChar(){
    return display.value.slice (-1);
}

function appendToDisplay(value){
    console.log('Button pressed:' , value);

    let currentValue= display.value;

    if (justCalculated & !isNaN(value)) {
        display.value= value;
        justCalculated = false;
        return;
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
    }
    }else {
        display.value = currentValue + value;

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

function deletelast()
    console.log('Backspace button pressed.');
    let currentValue = display

    if(currentValue.length <= 1 || currentValue ==='0'){
        display.value ='0';
    }else{
        display.value = currentValue.slice(0,-1);
    }

    

function calculate(){
    console.log('Equals button pressed');

    alert('Equals button was clicked');
}
document.addEventListener('Keydown',function(event) {
    console.log('key pressed',event.key);

    if(event.ket>='0' && event.key <='9'){ 
        appendToDisplay(event.key);

    } else if (event.key ==='.'){
        appendToDisplay('.');

    } else if (event.key=== '+'){
        appendToDisplay('+');

    } else if(event.key==='-'){
        appendToDisplay('-');

    } else if (event.key==='/'){
        event.preventDrfult();
        appendToDisplay('/');

    }
     else if(event.key==='Enter'|| eve.key ==='='){
        calculate();
    
    } else if (event.key==='Escape'||event.key ==='c'|| event.key ==='C'){
        clearDisplay()

    } else if (event.key ==='Backspace'){
        deleteLast();

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