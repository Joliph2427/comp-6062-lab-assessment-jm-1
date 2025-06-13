console.log('JS Loaded!');

const studentName = "Joliph Macwan";
const studentNumber = "1234169";

const fullName = `${studentName} - ${studentNumber}`;

let headingPrimaryContent = document.querySelector('h1');
headingPrimaryContent.innerHTML = fullName;

let element = document.querySelector('h1');
element.classList.add('headingPrimary');

console.log(fullName);
