function tester() {
  console.log("Hello! I am an alert box!");
}
tester();
const prompt = require('prompt-sync')();
const a = prompt('Enter first number:');
const b = prompt('Enter second number:');
console.log('Adding two numbers',Number(a)+Number(b));