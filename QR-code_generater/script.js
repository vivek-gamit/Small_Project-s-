let btn = document.querySelector("button");
let imgBox = document.getElementById("imgtag");
let qrImg = document.getElementById("qrimg");
let qrText = document.getElementById("qrText");

btn.addEventListener("click",()=>{
    if(qrText.value.length > 0){
            qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
            imgBox.classList.add("show-img");
    }else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
        
    }
    qrText.value = "";
})

