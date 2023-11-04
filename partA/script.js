$(document).ready(() => {
    $("button").prop("disabled", true);
    $("input#inputEmailId, input#inputPassword, input#inputUsername, input#inputConfirmPassword").on("input", validate);
    $("button").click((e)=>{
        e.preventDefault();
        let Username = $("input#inputUsername").val();
        localStorage.setItem("userName", Username);
        window.location.href = "calculator.html";    
    })
});

let regExEmailId = /([\w\.]+)@northeastern.edu$/;
let regExUserName = /^[a-zA-Z\d_]{2,20}$/;
let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let defaultValidCheck = {
    validEmail: false,
    validPassword: false,
    validUserName: false,
    validConfirmPassword: false
};

let validCheck = {...defaultValidCheck};

let validate = (e) => {
    let value = e.target.value;
    let type = e.target.id;
    let em = $("#error_" + type);

    switch(type){
        case "inputEmailId":
            if(!value.trim().match(regExEmailId)){
                em.show();
                // em.css({"display" : "block", "border" : "2px solid red"});
                validCheck.validEmail = false;
                console.log("valid email id", validCheck.validEmail);
            } else{
                // em.css({"display" : "none", "border" : ""});
                em.hide();
                validCheck.validEmail = true;
                console.log("valid email id", validCheck.validEmail);
            }
            break;

        case "inputPassword":
            if(!value.trim().match(regExPassword)){
                // em.css({"display" : "block", "border" : "2px solid red"});
                em.show();
                validCheck.validPassword = false;
                console.log("valid Password", validCheck.validPassword);
            } else{
                // em.css({"display" : "none", "border" : ""});
                em.hide();
                validCheck.validPassword = true;
                console.log("valid Password", validCheck.validPassword);
            }
            break;

        case "inputUsername":
            if(!value.trim().match(regExUserName)){
                // em.css({"display" : "block", "border" : "2px solid red"});
                em.show();
                validCheck.validUserName = false;
                console.log("valid Username", validCheck.validUserName);
            } else{
                // em.css({"display" : "none", "border" : ""});
                em.hide();
                validCheck.validUserName = true;
                console.log("valid Username", validCheck.validUserName);
            }
            break;
        
        case "inputConfirmPassword":
            if(value !== $("input#inputPassword").val()){
                // em.css({"display" : "block", "border" : "2px solid red"});
                em.show();
                validCheck.validConfirmPassword = false;
                console.log("valid Password", validCheck.validConfirmPassword);
            }else{
                // em.css({"display" : "none", "border" : ""});
                em.hide();
                validCheck.validConfirmPassword = true;
                console.log("valid Password", validCheck.validConfirmPassword);
            }
            break;
    }

    if(Object.values(validCheck).every((ele) => ele)){
        $("button").removeAttr('disabled');
    } else $("button").prop("disabled", true);
}

