$(document).ready(()=>{
    const Username = localStorage.getItem("userName");
    $("h2#loggedInUser").text(`Welcome Back, ${Username}!`)
    $("input#inputNumber1, input#inputNumber2").on('input', validate);
    $("button#add, button#substract, button#multiply, button#divide").on('click', calculate);
    $("input#resetBtn").click((e) => {
        $("input#inputNumber1, input#inputNumber2, input#output").val(0);
    })
});

let regExNumber1 = /^-?[0-9]\d*(\.\d+)?$/;
let regExNumber2 = /^-?[0-9]\d*(\.\d+)?$/;

let defaultValidCheck = {
    validNumber1 : false,
    validNumber2 : false,
}

let validCheck = {...defaultValidCheck};

//Single arrow function to calculate basic arithmetic operatios
let calculate = (e) => {
    e.preventDefault();
    let num1 = parseFloat($("input#inputNumber1").val());
    let num2 = parseFloat($("input#inputNumber2").val());
    let result = 0;
    type = e.target.id;
    
    switch(type){
        case "add":
            $("input#output").prop('value', num1+num2);
            break;
        
        case "substract":
            $("input#output").prop('value', num1-num2);
            break;

        case "multiply":
            $("input#output").prop('value', num1*num2);
            break;
        
        case "divide":
            $("input#output").prop('value', num1/num2);
            break;
    }
}

//Number validations
let validate = (e) => {
    let value = e.target.value;
    let type = e.target.id;
    let em = $("#error_" + type);

    switch(type){
        case "inputNumber1":
            if(!value.trim().match(regExNumber1)){
                em.show();
                validCheck.validNumber1 = false;
            } else{
                em.hide();
                validCheck.validEmail = true;
            }
            break;

        case "inputNumber2":
            if(!value.trim().match(regExNumber2)){
                em.show();
                validCheck.validNumber2 = false;
            } else{
                em.hide();
                validCheck.validNumber2 = true;
            }
            break;
    }
}