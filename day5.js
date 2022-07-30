// que1:: create a button ,on click of which new heading tag h1 should be added with text as "MERN STACK"
// on the screen above button .


let heading =document.getElementById("heading");
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click",function(){
let h1= document.createElement("h1");
h1.innerText="MERN STACK";
heading.append(h1);

})


//que2:: write a code to get H1 element from a webpage using DOM
document.getElementsByTagName("h1")[0];


// que3::write code to implement timer clock using js display time HH:MM:SS 
// the time should keep updating every second 




function clock(){
    const hour = document.getElementById('hour')
    const mins = document.getElementById('min')
    const secs = document.getElementById('sec')
  
    var time = new Date();
  
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    
    hour.innerHTML=a;
    mins.innerHTML = b;
    secs.innerHTML = c;
  }
  setInterval(clock,1000);


//que4::Create an HTML page having content as Hello world and a button named Replace Text. 
//When user will click on this button page content should be changed to "Welcome to Elevation academy"


const btn2 = document.getElementById('btn2')
btn2.addEventListener('click',function(){
  world.innerText='Welcome to Elevation academy';

})


//que5:: create an html page having content hello world and button named "hide text". when user click on
// this button hide the "hello world" text

const btn3 = document.getElementById('btn3')
btn3.addEventListener('click',function(){
    hello.style.display ="none";

}) 


//Que-6.Given an array of 0's and 1's find out number of 0's




//Que-7.Given an array find out total no. of odd and even nos.




//Que-8.Given a string find out number of vowels .



//Que-9.Write a code to create two objects with 2 properties each, one will be string and other will be an array.
// Create a function to check if all the elements of the arrays in both the objects are same.














  