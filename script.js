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

        let dayBtn = document.createElement("button");
        // dayBtn.textContent = "Select Time";
        dayBtn.className = "dayBtn";
        li.append(dayBtn);

        // let dayImg = document.createElement("div");

        let dayImg = document.createElement("img");
        dayImg.className = "dayImg";
        li.append(dayImg);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    inputBox.value = "";
    saveData();
}


let index = 0;

list.addEventListener("click", (e) =>{
    let dayZones = ["early_morning.png","morning.png","afternoon.png","evening.png","night.png"];
    let dayTitles = ["early_morning_title.png","morning_title.png","afternoon_title.png","evening_title.png","night_title.png"];
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "BUTTON") {

        let currentIndex = parseInt(e.target.dataset.index || "0");
        currentIndex = (currentIndex + 1) % (dayZones.length);
        e.target.dataset.index = currentIndex;
        e.target.style.backgroundImage = `url(./icons/${dayZones[currentIndex]})`;

        let imgDay = e.target.closest("li").querySelector(".dayImg");
        if (imgDay) {
           imgDay.style.backgroundImage = `url(./icons/${dayTitles[currentIndex]})`;
        }
        
    }
},false);

function saveData() {
    localStorage.setItem("data",list.innerHTML);
}

function showTasks() {
    list.innerHTML = localStorage.getItem("data");
}

showTasks();