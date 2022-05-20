// Clicking "I Accept" will dismiss the cookie policy message

function accept(element){
    // console.log("accept function is working");
    document.getElementById(element).remove();
}


// When the user clicks on a city display an alert 

function alertMessage(){
    alert("Loading weather report...");
}


// Convert the temperatures when the <select> is changed

function tempUnit(element) {
    console.log("ho");
    console.log(element.value);


    if(element.value === "fahrenheit"){
        // hotest degrees in F
        document.getElementById("today-hotest").innerHTML = "75°";
        document.getElementById("tomorrow-hotest").innerHTML = "80°";
        document.getElementById("friday-hotest").innerHTML = "69°";
        document.getElementById("saturday-hotest").innerHTML = "78°";
        // coldest degrees in F
        document.getElementById("today-coldest").innerHTML = "65°";
        document.getElementById("tomorrow-coldest").innerHTML = "66°";
        document.getElementById("friday-coldest").innerHTML = "61°";
        document.getElementById("saturday-coldest").innerHTML = "70°";
    } else {
        // hotest degrees in C
        document.getElementById("today-hotest").innerHTML = "24°";
        document.getElementById("tomorrow-hotest").innerHTML = "27°";
        document.getElementById("friday-hotest").innerHTML = "21°";
        document.getElementById("saturday-hotest").innerHTML = "26°";
        // coldest degrees in C
        document.getElementById("today-coldest").innerHTML = "18°";
        document.getElementById("tomorrow-coldest").innerHTML = "19°";
        document.getElementById("friday-coldest").innerHTML = "16°";
        document.getElementById("saturday-coldest").innerHTML = "21°";
    }
}

/* there should be a way to complete the C/F conversion in array

var hotest = [0, 0, 0, 0];
var coldest = [0, 0, 0, 0];
var hotestSpan = [
    document.getElementById("today-hotest"),
    document.getElementById("tomorrow-hotest"),
    document.getElementById("friday-hotest"),
    document.getElementById("saturday-hotest"),
];
var coldestSpan = [
    document.getElementById("today-coldest"),
    document.getElementById("tomorrow-coldest"),
    document.getElementById("friday-coldest"),
    document.getElementById("saturday-coldest"),
];

console.log(hotestSpan);
console.log(coldestSpan);

*/