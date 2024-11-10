// let a = document.getElementById("abc");
let a = document.querySelector("#abc");
a.remove();

// console.log(a.title);
// setTimeout(function () {
//     a.title = "Измененная подсказка";
// }, 5000);
// a.removeAttribute("title");
// console.log(a.attributes);
// a.classList.add("py-1");
// a.classList.remove("mb-2");
// setInterval(function () {
//     a.classList.toggle("text-danger");
// }, 1000);
// a.dataset.title = "Hello";
// console.log(a.dataset.title);
// a.style.color = "green";
// a.style.fontSize = "22px";
// a.style.opacity = "0.5";
// let s = getComputedStyle(a);
// console.log(s.backgroundColor);
// console.log(a.textContent);
// console.log(a.innerHTML);
// console.log(a.outerHTML);

// a.textContent = "1234567";
// a.innerHTML = "123<b>45</b>67";
// a.outerHTML = "<a href='https://google.com'>Hello</a>";

// console.log(a.classList.contains("py-1"));
// console.log(a.className);
// console.log(a.classList);

// let b = document.getElementById("xyz");
// let b = a.querySelector("a#xyz");
// console.log(b.href);
// console.log(b.closest("div"));

// let c = document.getElementById("abcxyz");
// console.log(c);

let d = document.querySelectorAll("div");
// console.log(d);

d.forEach(function (element) {
    if (element.matches("#abc")) {
        element.classList.add("correct");
    }
});

let z = document.createElement("h2");
z.textContent = "Заголовок второго уровня";
z.style.color = "gray";
z.classList.add("text-danger");

let x = document.querySelector("div.hello");
x.after(z);

let y = x.cloneNode(true);
x.append(y);