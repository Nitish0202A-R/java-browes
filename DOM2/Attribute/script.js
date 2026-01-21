let first = document.getElementById("first");

let a = first.getAttribute("class");
console.log(a); // nit

console.log(first.hasAttribute("class")); // true
console.log(first.hasAttribute("style")); // false
