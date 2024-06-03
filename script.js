let num1;
let num2;
let operator;
const numerical = '0123456789.';
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const text2 = document.querySelector('#display2');
const text1 = document.querySelector('#display1');
const num_buttons = document.querySelectorAll('#numberbuttons');
const equals = document.querySelector('#equals');
const decimal = document.querySelector('#decimal');
const backspace = document.querySelector('#backspace')
const power = function(a,b) {
    return Math.pow(a,b);
  };

function operate(a,operator,b){
    if(operator=='+'){
        return a + b;
    }

    if(operator=='-'){
        return a - b;
    }

    if(operator=='x'){
        return a*b
    }

    if(operator=='/'){
        if(b==0){
            buttons = document.querySelectorAll('button');
            buttons.forEach((button)=>{
                button.disabled =true;
            });

            document.querySelector('#clear').disabled = false;

            return "divison by 0 is illegal"}
        return a/b
    }

}

decimal.addEventListener('click',()=>{
    if(!text2.innerText.includes('.')){
        text2.innerText += '.';
    }
})

backspace.addEventListener('click',()=>{
        let str = text2.innerText
        text2.innerText = str.slice(0, -1);
    
});


num_buttons.forEach(element => {
    element.addEventListener('click',()=>{
        text2.innerText = text2.innerText + element.innerText;
    })
});

function operation (){
    if(Number(text2.innerText)){
        num1 = Number(text2.innerText);
    }
    text1.innerText = num1 + `${operator}`;
    text2.innerText = '';
}

function calculate(){
    if(operator && Number(num1)){
        num2 = Number(text2.innerText.split('')
    .filter((character) => numerical.includes(character))
    .join(''));
    if(num2){
        text2.innerText= operate(num1,operator,num2)
        
    };
        
    }
}

plus.addEventListener('click',()=>{
    if(operator||text2.innerText){
    calculate();
    operator='+';
    operation();}

})

multiply.addEventListener('click',()=>{
    if(operator||text2.innerText){
    calculate();
    operator='x';
    operation();}
})

divide.addEventListener('click',()=>{
    if(operator||text2.innerText){
    calculate();
    operator='/';
    operation();}
})



minus.addEventListener('click',()=>{
    if(operator||text2.innerText){
    calculate();
    operator='-';
    operation();}
})


function returnequals() {
    num2 = Number(text2.innerText.split('')
    .filter((character) => numerical.includes(character))
    .join(''));

    if(num1 && operator && num2){
    text1.innerText += text2.innerText;
    text2.innerText = operate(num1,operator,num2);
    num1 = NaN;
    num2 = NaN;
    operator = NaN;}
}

equals.addEventListener('click',()=>{
    num2 = Number(text2.innerText.split('')
    .filter((character) => numerical.includes(character))
    .join(''));

    if(num1 && operator && num2){
    text1.innerText += text2.innerText;
    text2.innerText = operate(num1,operator,num2);
    num1 = NaN;
    num2 = NaN;
    operator = NaN;}
})

window.addEventListener('keydown', (e)=>{
    let keyValue = e.key;
    if((keyValue>=0 && keyValue<=9)){
        text2.innerText = text2.innerText + keyValue;
    }
    else if(keyValue==='.'){
        if(!text2.innerText.includes('.')){
            text2.innerText += '.';
        }
    }
    else if(keyValue==='Enter'){
        returnequals();
    }
    else if(keyValue==='Backspace'){
        let str = text2.innerText
        text2.innerText = str.slice(0, -1);
    }
    else if(keyValue === '+' ||
    keyValue === '-' || 
    keyValue === 'x' ||
    keyValue === '/'){
        calculate();
        operator=`${keyValue}`;
        operation();
    }
    else if(keyValue ==='*'){
        calculate();
        operator= 'x';
        operation();
    }


})
