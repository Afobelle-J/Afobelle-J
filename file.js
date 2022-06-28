//display() function
function display(val){

    document.getElementById('result').value += val

    return val

}

//solve() function
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}

//clearScreen()
function clearScreen(){

    document.getElementById('result').value = ''

}

// to take only numbers not alphabets
function isInputNumber(evt){

    var ch = String.fromCharCode(evt.which);
    
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }  
}

var a, b , c;
a= prompt("please input your first number?");
b= prompt("please input your second number?");
c= prompt(" please input symbol of operator: +, -, *, /");
if (c == "+"){
    var sum = Number(a) + Number(b);
} else if ( c == "-") {
    var sum = Number(a) - Number(b);
} else if (c == "*") {
    var sum = Number(a) * Number(b);
} else if (c == "/") {
    var sum = Number(a) / Number(b);
} else if (c == "%") {
    var sum = Number(a) % Number(b);
}
else {
    var sum= "Error, please input symbol shown above"
}

alert("sum = "+sum);

