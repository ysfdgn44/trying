const divContainer = document.querySelectorAll(".div");
const checkBox1 = document.getElementById("check1");
const checkBox2 = document.getElementById("check2");
const checkBox3 = document.getElementById("check3");
const checkBox4 = document.getElementById("check4");
const checkBox5 = document.getElementById("check5");

checkBox1.addEventListener("click", () => {
  document.querySelector(".div1").classList.toggle("checked");
});

checkBox2.addEventListener("click", () => {
  document.querySelector(".div2").classList.toggle("checked");
});

checkBox3.addEventListener("click", () => {
  document.querySelector(".div3").classList.toggle("checked");
});

checkBox4.addEventListener("click", () => {
  document.querySelector(".div4").classList.toggle("checked");
});

checkBox5.addEventListener("click", () => {
  document.querySelector(".div5").classList.toggle("checked");
});
