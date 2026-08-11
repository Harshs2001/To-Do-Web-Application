const inputBox = document.getElementById("text-box");
const list = document.getElementById("list-container");

function addGoal(){
    if (inputBox.value === ''){
        alert("Wrong!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    inputBox.value = "";
    saveData();
}

list.addEventListener("click", (e) =>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data",list.innerHTML);
}

function showTasks() {
    list.innerHTML = localStorage.getItem("data");
}

showTasks();