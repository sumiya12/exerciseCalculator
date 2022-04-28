const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const modul = document.querySelector(".modul");
const concate = document.querySelector(".concate");

function fnconcate() {
  let num1 = parseInt(document.querySelector(".num1").value);
  let num2 = parseInt(document.querySelector(".num2").value);
  let sum = `${num1}${num2}` 
  return sum;
}
function fnmodul() {
  let num1 = parseInt(document.querySelector(".num1").value);
  let num2 = parseInt(document.querySelector(".num2").value);
  let sum = num1 % num2;
  return sum;
}
function adds() {
  let num1 = parseInt(document.querySelector(".num1").value);
  let num2 = parseInt(document.querySelector(".num2").value);
  let sum = num1 + num2;
  return sum;
}
function subb() {
  let num1 = parseInt(document.querySelector(".num1").value);
  let num2 = parseInt(document.querySelector(".num2").value);
  let sum = num1 - num2;
  return sum;
}
function fnmultiply() {
  let num1 = parseInt(document.querySelector(".num1").value);
  let num2 = parseInt(document.querySelector(".num2").value);
  let sum = num1 * num2;
  return sum;
}
function fndivide() {
  let num1 = parseInt(document.querySelector(".num1").value);
  let num2 = parseInt(document.querySelector(".num2").value);
  let sum = num1 / num2;
  return sum;
}
concate.addEventListener("click", () => {
  let result = document.querySelector(".result");
  let ad = fnconcate();
  result.innerHTML = ad;
  // console.log(result)
});
modul.addEventListener("click", () => {
  let result = document.querySelector(".result");
  let ad = fnmodul();
  result.innerHTML = ad;
  // console.log(result)
});
divide.addEventListener("click", () => {
  let result = document.querySelector(".result");
  let ad = fndivide();
  result.innerHTML = ad;
  // console.log(result)
});
multiply.addEventListener("click", () => {
  let result = document.querySelector(".result");
  let ad = fnmultiply();
  result.innerHTML = ad;
  // console.log(result)
});

add.addEventListener("click", (e) => {
  let result = document.querySelector(".result");
  let ad = adds();
  result.innerHTML = ad;
  //  num1.value.remove();
});
subtract.addEventListener("click", (e) => {
  let result = document.querySelector(".result");
  let ad = subb();
  result.innerHTML = ad;
  //  num1.value.remove();
});

const clear = document.getElementById("clear");
clear.addEventListener("click",function handleClick(event) {
    event.preventDefault();
  const inputs =document.querySelectorAll("input");
  inputs.forEach(element => {
      element.value=''
  });

});
