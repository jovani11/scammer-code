  let objects = ["ay magkakaroon iPhone 14 Pro Max", "ay magkakaroon ng Kotse", "ay magkakaroon Company", "ay magkaka bf", "ay magkaka gf", "ay magiging mahirap", "ay magiging mayaman", "ay papayat", "ay tataba", "ay tatangkad", ];
  
  let year =[" after 5 years no doubt", " next month", " bukas", " next week", "after 5 years", "next month no doubt", "bukas no doubt", "next week no doubt"]
  

let input = objects[Math.floor(Math.random() *objects.length)];

let yearInput = year[Math.floor(Math.random() * year.length)];


let button = document.querySelector(".button");

let startButton = document.querySelector(".start");


//start button 


startButton.addEventListener("click", () => {
   document.getElementById("main").style.display = "none";
   document.getElementById("main2").style.display = "block";
   

})

//button 1 functions 

var analyzer = document.querySelector(".analyzer")

var check = document.querySelector(".button");

function test() {
  document.getElementById("analyzer").style.display = "block";
  
  let counter = 0;
let interval = setInterval(function () {
  let name = document.getElementById("input").value;
  
    counter++;
    if (counter > 2) {
        document.getElementById("analyzer").style.display = "none";
        
        document.getElementById("output").innerHTML = "Si"+ " " + name +" " +input+ " "+ yearInput + ".";
        
        clearInterval(interval);
        return;
    }
    console.log('One second passed...');
}, 1000);
  
}

