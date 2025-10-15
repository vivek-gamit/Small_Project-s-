const button = document.getElementById("toggleTheme");
const body = document.body;

button.addEventListener("click",()=>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        button.textContent = "Switch to Light Mode 🌞";
    }else{
        button.textContent = "Switch to Dark Mode 🌚";
    }
});