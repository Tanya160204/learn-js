const name="Tanya"
const repoCount=10

//console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('TanyaSingh')//here string is object
console.log(gameName[0]);

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newString1="   Tanya  "
console.log(newString1);
console.log(newString1.trim());

const url= "https://Tanya.com/tanya%20singh"
console.log(url.replace('%20','_'))

console.log(url.includes('hehe'));





