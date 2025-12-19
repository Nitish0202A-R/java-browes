let number=prompt("Enter a number:"); 
number=Number.parseInt(number);
if(number>4){
    location.href="https://www.google.com/";
}

let color=prompt("Enter a background color (e.g., red, blue, green):");
document.body.style.backgroundColor=color;