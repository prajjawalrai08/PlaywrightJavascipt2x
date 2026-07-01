let rajkumar_age = 18;
let rj_will_Goa = rajkumar_age = 18 ? "Rj will Go" : "Rj will not Go";
console.log(rj_will_Goa);

// let a = 10;
// a+=10;
// a=+10;  this does not work because it is not a valid syntax. It will give an error. The correct syntax is a+=10; which means a = a + 10;

// Real life example of ternary operator

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "Test Passed" : "Test Failed";
console.log(testResult);

let evironment = "staging";
let url = evironment === "staging" ? "https://staging.example.com" : "https://production.example.com";
console.log(url);

let isCi = true;
let browserMode = isCi ? "headless" : "headed";
console.log("launching browser in mode:", browserMode);

let responseTime = 850;
let SLA = responseTime < 1000 ? "SLA met" : "SLA not met";
console.log(`Response time: ${responseTime}m, SLA status: ${SLA}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);


/// Nested ternary operator example

// Multiple Condtions
let age =26;
let is_prajj_go = age >26 ? "Prajj can go" : "Prajj cannot go";
console.log(is_prajj_go);

let age_prajj = 45;
let is_prajj_d = age_prajj >18 ?(  age_prajj > 26 ? "Prajj can drink" : "Prajj cannot drink") : "No Goa";
console.log(is_prajj_d);

// Gretest number using ternary operator
let a=10, b=50,c=8
let result = a>b ?(a>c ? "a is greatest" : "c is greatest") : "b is greatest";
console.log(result);