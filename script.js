//Event Handler Increase
let text1 = document.getElementById("text1");
let btn1 = document.getElementById("button1");
let clicked1 = 0;

btn1.addEventListener("click", () => {
  clicked1++;
  text1.innerText = `Number is ${clicked1}`;
});

//Event Handler decrease
let text2 = document.getElementById("text2");
let btn2 = document.getElementById("button2");
let clicked2 = 0;

btn2.addEventListener("click", () => {
  clicked2--;
  text2.innerText = `Number is ${clicked2}`;
});

//Reset
let btn3 = document.getElementById("reset");

btn3.addEventListener('click',()=>{
  clicked1 =0;
  clicked2 = 0;
  text1.innerText = `Number is ${clicked1}`;
  text2.innerText = `Number is ${clicked2}`;
})