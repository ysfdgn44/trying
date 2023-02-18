const check1 = document.getElementById("check1");
const line1 = document.querySelector(".checkbox1");
const check2 = document.getElementById("check2");
const line2 = document.querySelector(".checkbox2");
const check3 = document.getElementById("check3");
const line3 = document.querySelector(".checkbox3");
const check4 = document.getElementById("check4");
const line4 = document.querySelector(".checkbox4");
const check5 = document.getElementById("check5");
const line5 = document.querySelector(".checkbox5");
const check6 = document.getElementById("check6");
const line6 = document.querySelector(".checkbox6");
const check7 = document.getElementById("check7");
const line7 = document.querySelector(".checkbox7");
const check8 = document.getElementById("check8");
const line8 = document.querySelector(".checkbox8");
const check9 = document.getElementById("check9");
const line9 = document.querySelector(".checkbox9");
let sayac = 0;
check1.addEventListener("click", () => {
  check1.classList.toggle("checked");
  line1.classList.toggle("text");
  if (line1.classList.contains("text")) {
    sayac.innerHTML++;
  }
});
check2.addEventListener("click", () => {
  check2.classList.toggle("checked");
  line2.classList.toggle("text");
  if (line2.classList.contains("text")) {
    sayac.innerHTML++;
  }
});
check3.addEventListener("click", () => {
  check3.classList.toggle("checked");
  line3.classList.toggle("text");
  if (line3.classList.contains("text")) {
    sayac.innerHTML++;
  }
});
check4.addEventListener("click", () => {
  check4.classList.toggle("checked");
  line4.classList.toggle("text");
  if (line4.classList.contains("text")) {
    sayac.innerHTML++;
  }
});
check5.addEventListener("click", () => {
  check5.classList.toggle("checked");
  line5.classList.toggle("text");
  if (line5.classList.contains("text")) {
    sayac.innerHTML++;
  }
});
check6.addEventListener("click", () => {
  check6.classList.toggle("checked");
  line6.classList.toggle("text");
  if (line6.classList.contains("text")) {
    sayac.innerHTML++;
  }
});
check7.addEventListener("click", () => {
  check7.classList.toggle("checked");
  line7.classList.toggle("text");
  if (line7.classList.contains("text")) {
    sayac.innerHTML++;
  }
});
check8.addEventListener("click", () => {
  check8.classList.toggle("checked");
  line8.classList.toggle("text");
  if (line8.classList.contains("text")) {
    sayac.innerHTML++;
  }
});
check9.addEventListener("click", () => {
  check9.classList.toggle("checked");
  line9.classList.toggle("text");
  if (line9.classList.contains("text")) {
    sayac.innerHTML++;
  }
});
console.log(line1.classList.contains("text"));
checked = [line1, line2, line3, line4, line5, line6, line7, line8, line9];
console.log(checked[0]);

const sonuc = document.querySelector(".sonuc");
sonuc.innerHTML = `<p>${sayac} is done of 9 task</p>`;
