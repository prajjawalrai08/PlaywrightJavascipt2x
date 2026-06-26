// Template literal

let firstName = "Prajjawal";
let fullName = `My name is ${firstName} and I am a student.`;
console.log(fullName); // Output: My name is Prajjawal and I am a student.

let env = "staging";
env = "production";
const userID = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userID}`;
console.log(apiUrl); // Output: https://api-production.tekion.com/users/12345 (interpolated)


// Playwright
const rowIndex = 2;
const columnName ='Email';
await page.locator(`[data-row='${rowIndex}"] [data-col='${columnName}"]`).click();

//logs
const testName ="Login Test";
const status ="Failed";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration} seconds`); // Output: [Failed] Login Test completed in 2.3 seconds