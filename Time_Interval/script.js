let progess = document.querySelector(".progress-bar");
let percent = document.querySelector("#percent");
let count = 0;
let secound = 5

let setI = setInterval(function(){
    if(count < 100){
        count++;
        progess.style.width = `${count}%`;
        percent.textContent = `${count}%`;
    }else{
        let text = document.querySelector("h2")
        text.textContent = "Downloaded"
        clearInterval(setI)
    }
},(secound*1000)/100)