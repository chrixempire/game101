"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) console.log("I can now drive :D");

function logger() {
  console.log("My name is Jonas , this is my first Function");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleOrangeJuice = fruitProcessor(5, 6);
console.log(appleOrangeJuice);
console.log(fruitProcessor(3, 4));
// function declaration
function calcAge1(birthYear) {
  const age = 2022 - birthYear;
  return age;
}
const age1 = calcAge1(2001);
// function expression
const calcAge2 = function (birthYear) {
  const age2 = 2037 - birthYear;
  return age2;
};
const age2 = calcAge2(2003);
console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} has ${retirement} years to retire`);
    return retirement;
  } else {
    return `${firstName} has retired ${-retirement} years age`;
  }
};
const retired = yearsUntilRetirement(1990, "Jonas");
console.log(retired);
// function calling function
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

const FruitJuice = fruitProcessor(2, 4);
console.log(FruitJuice);

// coding challenge
const calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const calcAverageDolphins = calAverage(85, 54, 61);
const calcAverageKoalas = calAverage(23, 34, 27);
console.log(calcAverageDolphins, calcAverageKoalas);
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
    return `Dolphins wins (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
    return `Koalas wins (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return `No winner`;
  }
}
checkWinner(calcAverageDolphins, calcAverageKoalas);

const friends = ["Micheal", "Steve", "peter", "David"];
friends[4] = "king";
console.log(friends[friends.length - 1]);

const jonas = ["jonas", "Empire", "2037 - 199", "teacher", friends];
console.log(jonas);

// excercise
const calcAges = function (birthYear) {
  return 2037 - birthYear;
};
const year = [1990, 1967, 2002, 2010, 2018];
const ageOne = calcAges(year[0]);
const ageTwo = calcAges(year[1]);
const ageThree = calcAges(year[year.length - 1]);
console.log(ageOne, ageTwo, ageThree);
const ages = [ageOne, ageTwo, ageThree];
console.log(ages);

friends.push("jay");
friends.unshift("john");

console.log(friends);
friends.pop();

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);
console.log(friends.indexOf("peter"));

console.log(friends.includes("peter"));
if (friends.includes("peter")) {
  console.log("Peter is on my contact list");
}

const calTip = function (amount) {
  let tip;
  if (amount <= 300 && amount >= 50) {
    tip = amount * 0.15;
  } else {
    tip = amount * 0.2;
  }
  return tip;
};
const total = function (amount) {
  return calTip(amount) + amount;
};
console.log(calTip(100));

const bills = [125, 555, 44];
const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
const totals = [total(bills[0]), total(bills[1]), total(bills[2])];
console.log(tips);
console.log(totals);

const jonnas = {
  firstName: "jonas",
  lastName: "Empire",
  age: 2037 - 2001,
  job: "teacher",
  friends: ["Micheal", "peter", "Steven"],
};

console.log(jonnas);
console.log(jonnas.lastName);
console.log(jonnas["job"]);

const namekey = "Name";
console.log(jonnas["first" + namekey]);
// const interestedIn = prompt('what do you want to know about jonas? choose between firstName, lastName, age, job and friends')

// if(jonnas[interestedIn]){
//     console.log([interestedIn])
// }else {
//     console.log('wrong request! choose between firstName, lastName, age,job, friends')
// }

// jonnas.location = 'portugal'
// jonnas['twitter'] = '@jonnasEmpire'

//challenge
// 'Jonas has 3 friends, and his best friends is called Micheal'
jonnas.bestfriend = jonnas.friends[0];
console.log(jonnas.friends.length);
console.log(jonnas);
console.log(
  `${jonnas.firstName} has ${jonnas.friends.length} friends, and his best friend is called ${jonnas.friends[0]}`
);

const jordas = {
  firstName: "jonas",
  lastName: "Empire",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function(birthYear){
  //     return 2037 - birthYear
  // }

  // calcAge: function(){
  //     console.log(this)
  //     return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    this.summary = `${this.firstName} is a ${this.age} years old ${this.job}, ${
      this.hasDriversLicense === true
        ? "He has a driver license"
        : "he has no driver license"
    } 
        `;
    return this.summary;
  },
};
console.log(jordas.calcAge());
console.log(jordas.age);
console.log(jordas.getSummary());

console.log(jordas.summary);

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calBmi: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
john.calBmi();

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calBmi: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
mark.calBmi();
console.log(mark.BMI, john.BMI);

console.log(
  `${
    john.BMI > mark.BMI
      ? `${john.fullName} Bmi (${john.BMI}) is higher than ${mark.fullName}'s BMI(${mark.BMI})`
      : `${mark.fullName} Bmi (${mark.BMI}) is higher than ${john.fullName}'s BMI(${john.BMI})`
  }`
);

// for loop keeps running  while condition is True
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const jonasArray = [
  "jonas",
  "Schmedtann",
  2037 - 1991,
  "teacher",
  ["Micheal", "peter", "Steven"],
  true,
  "Ayo",
];

const types = [];
// for loop keeps running while condition is true
for (let i = 0; i < jonasArray.length; i++) {
  //reading from jonas Array
  console.log(jonasArray[i], typeof jonasArray[i]);

  types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

// for( let rep = 1; rep <= 20; rep++){
//     console.log(`Lifting Weight repetition ${rep} 🤸‍♀️`)
// }

const years = [1991, 2007, 1980, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2037 - years[i]);
}
console.log(age);
console.log("=== ONLY STRING===");
// continue and break statement
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
// break
console.log("=== Break with numbers===");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

const johnson = [
  "jonas",
  "Schmedtann",
  2037 - 1991,
  "teacher",
  ["Micheal", "peter", "Steven"],
];

for (let i = johnson.length - 1; i >= 0; i--) {
  console.log(i, johnson[i]);
}

for (let ex = 1; ex < 4; ex++) {
  console.log(`==== staeting excercise ${ex} ===`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise${ex}:Lifting Weight repitition ${rep}🤸‍♀️`);
  }
}

const paul = [
  "Donatus",
  "Schmedtann",
  2037 - 1966,
  "Engineer",
  ["Mitchell", "Isaac", "Samuel"],
];
for (let rep = 1; rep <= 10; rep++) {
  console.log(`FOR: Lifting Weight repitition ${rep}🤸‍♀️`);
}
let rep = 1;
while (rep <= 10) {
  console.log(`wHILE: Lifting Weight repitition ${rep}🤸‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end ....");
}

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tip = [];

let tota = [];

const totall = function (amount) {
  return calTip(amount) + amount;
};
for (let i = 0; i < bill.length; i++) {
  // tip.push(
  //     bill[i] <= 300 && bill[i] >= 50 ?  0.15 * bill[i] : 0.2 * bill[i]
  // )
  const tipped = calTip(bill[i]);
  tip.push(tipped);
  tota.push(tip[i] + bill[i]);
}
console.log(bill, tip, tota);

const numbers = [1, 2, 3, 4, 5];
let totality = 0;
let average;

const averg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(averg(bill), averg(tip), averg(tota));

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9 ,5];
const calctempAmp = function(temperature){
  let max = temperature[0];
  let min = temperature[0]
  for(let i = 0; i < temperature.length; i++){
    let curTemp = temperature[i]
    if(typeof curTemp !=="number") continue;
    if(curTemp > max) max = curTemp;
    if(curTemp < min) min = curTemp;
  }
  
  console.log(max ,min);
  return max - min
 
}
const amplitude = calctempAmp(temperature);
console.log(amplitude)


const calctempAmpNew = function(t1, t2){
const temps = t1.concat(t2)
console.log(temps)
let max = temps[0];
let min = temps[0];
for(let i = 0; i < temps.length; i++){
  let curTemp = temps[i]
  if(typeof curTemp !=="number") continue;
  if(curTemp > max) max = curTemp;
  if(curTemp < min) min = curTemp;
}
console.log(max,min);
return max - min



}
const amplitudeNew = calctempAmpNew([3, 5, 1],[9, 0, 5]);
console.log(amplitudeNew)


const measureKelvin = function(){
  const measurement = {
    type:'temp',
    unit: 'celsius',
    value: 10

  }
  
  console.table(measurement)
  const kelvin = Number(measurement.value) + 273;
  return kelvin
}
console.log(measureKelvin())



const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr){
  let str = ''
  for(let i =0; i < arr.length; i++){
    str += `${arr[i]}°c in ${i + 1} days ... `
  }
  console.log('...' + str)
}
printForecast(data1)




let body = document.querySelector('body')
let number = Math.floor( Math.random()*20)+1;
let message = document.querySelector('.message');
let newNumber = document.querySelector('.number');
let scored = document.querySelector('.score')
let CheckButton = document.querySelector('.check')
let score = Number(scored.textContent);
let PlayAgain = document.querySelector('.again')

CheckButton.addEventListener('click', function(){
let guessNumber = Number(document.querySelector('.guess').value);
let highscore = 0
  if(!guessNumber){
    message.textContent = '⛔No Content';


  }else if (guessNumber === number){
     
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore
      score = 20
    }
    message.textContent = '✨Correct Number!';
    body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '400px'
    newNumber.textContent = number;
   
   


  }else if(guessNumber > number){
    if(score > 1){
      message.textContent = '📈Too high!';
      score--;
      scored.textContent = score
      body.style.backgroundColor = '#222'
     
    }else{
      message.textContent = '💥You lost the the Game'
      scored.textContent = 0;
      body.style.backgroundColor = '#222'
    }
  
  }else if(guessNumber < number){
    if(score > 1){
      message.textContent = '📈Too low';
      score--;
      scored.textContent = score
      body.style.backgroundColor = '#222'
    }else{
      message.textContent = '💥You lost the the Game'
      scored.textContent = 0;
      body.style.backgroundColor = '#222'
    }
  }

})
PlayAgain.addEventListener('click',function(){
  body.style.backgroundColor = '#222'
  newNumber.textContent = '?'
  scored.textContent = 20;
  scored.number --
   number = Math.trunc( Math.random()*20)+1;
  document.querySelector('.guess').value = ''
  message.textContent = '🤦Start guessing ...'

})

