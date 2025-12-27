// SELECT ELEMENT
let element = document.getElementById("box");

/* =========================
   PARENT TRAVERSAL
========================= */
console.log(element.parentElement);   // parent element
console.log(element.parentNode);      // parent node

/* =========================
   CHILD TRAVERSAL
========================= */
console.log(element.children);              // all child elements
console.log(element.firstElementChild);     // first child
console.log(element.lastElementChild);      // last child

console.log(element.childNodes);            // child nodes (text + element)
console.log(element.firstChild);            // first node

/* =========================
   SIBLING TRAVERSAL
========================= */
console.log(element.previousElementSibling); // previous sibling
console.log(element.nextElementSibling);     // next sibling

console.log(element.previousSibling);        // previous node
console.log(element.nextSibling);            // next node

/* =========================
   LOOP THROUGH CHILDREN
========================= */
for (let child of element.children) {
  console.log(child);
}
