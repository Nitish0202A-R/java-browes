let number=prompt("Enter a number:"); 
number=Number.parseInt(number);
if(number>4){
    location.href="www.google.com";
}



let runAgain = true;

while (runAgain) {
    let age = prompt("Enter your age:");
    age = Number.parseInt(age);

    if (age < 0) {
        alert("Age cannot be negative");
        break;
    } 
    else {
        const canDrive = (age) => {
            return age >= 18;
        };

        if (canDrive(age)) {
            alert("You can drive");
        } 
        else {
            alert("You cannot drive");
        }
    }

    runAgain = confirm("Do you want to check again?");
}
