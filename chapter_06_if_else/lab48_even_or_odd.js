// print if number is even or odd

let number =7;
if (number%2===0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// student grade calculator

let marks =90;

if (marks>=90) {
    console.log("A grade");
}
else if(marks >= 80 && marks < 90) {
    console.log("B grade");
}
else if(marks >= 70 && marks < 80) {
    console.log("C grade");
} else if(marks >= 60 && marks < 70) {
    console.log("D grade");
}
else {
    console.log("F grade");
}

// leap year check
let year =2026;
 if (year%4==0 && year%100!=0 || year%400==0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}
