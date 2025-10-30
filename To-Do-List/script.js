let inputBox = document.getElementById("input-box");
let listcontainer =document.getElementById("list-container");
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    if(inputBox.value === ""){
    alert("you must write somthing");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let  span = document.createElement("span")
        span.innerHTML = "&#x2715;"
        li.appendChild(span)
    }
    inputBox.value = "";
    savedata();
})

listcontainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false)

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showdata();
