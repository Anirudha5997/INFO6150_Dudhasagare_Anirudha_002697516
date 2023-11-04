$(document).ready(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    const maxDate = '2024-12-31';
    const minDate = '2022-12-31';
    $("input#datePicker").val(currentDate);
    // $("input#datePicker").prop('min', minDate);
    // $("input#datePicker").prop('max', maxDate);

    $("input#datePicker").on('keydown', (e)=>{
        e.preventDefault()
    })
    
    $("button#start").click((e) => {
        if(isPaused){
            isPaused = false;
            startTime = Date.now() - elaspedTime;
            intervalTime = setInterval(updateTime, 75);
        }
    });

    $("button#pause").click(() => {
        if(!isPaused){
            isPaused = true;
            elaspedTime = "00:00:00";
            clearInterval(intervalTime)
        }
    });

    $("button#stop").click(() => { 
        isPaused = true;
        clearInterval(intervalTime);
        
        return new Promise((res, reject) => {
            setTimeout(() => {
                hours = '00'; 
                mins = '00';
                secs = '00';
                startTime = 0;
                elaspedTime = 0;
                currentTime = 0;
                $("div#timerDisplay").text(`${hours}: ${mins}: ${secs}`);
                const err = false;

                if(!err){
                    res(console.log("Stopwatch was resetted successfully"))
                } else {
                    reject(console.log("failed to reset clock"));
                }
            } , 2000);
        });    
    });

})

let hours = 0; 
let mins = 0;
let secs = 0;
let intervalTime;
let isPaused = true;
let startTime = 0; 
let elaspedTime = 0; 
let currentTime = 0;

function digit(placeholder){
    return (("0") + placeholder).length > 2 ? placeholder : "0" + placeholder;
}

let updateTime = async () => {
    elaspedTime = Date.now() - startTime;
    hours = await digit(Math.floor((elaspedTime/ (1000*60*60)) % 60));
    mins = await digit(Math.floor((elaspedTime / (1000 * 60)) % 60));
    secs = await digit(Math.floor((elaspedTime/1000) % 60));

    $("div#timerDisplay").text(`${hours}: ${mins}: ${secs}`);
}



