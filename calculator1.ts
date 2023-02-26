const prompt2 = require('prompt-sync')();
const number1:number = prompt2('Enter your 1st number: ');
const number2:number = prompt2('Enter your 2nd number: ');
const operator:string=prompt2("Plz enter you operation (+,-,*,/): ")

function cal(num1:number,num2:number,operate:string){
    if (operate==="+"){
        return num1 + num2;

    }else if(operate==="-"){
        return num1-num2;

    }else if(operate==="*"){
        return num1*num2;
    }else if(operate==="/"){
        return num1/num2;}
    }
console.log(cal(number1,number2,operator))