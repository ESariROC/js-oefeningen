console.log("test");

const myName = 'Emre Sari';
let todayTemperature = '22 graden celsius';
alert (todayTemperature);

let temperature;
temperature = 22;
temperature = 22 + 5;

//Opdrachten variabelen boven

const result = prompt('Wat is je naam?');
alert(`Jouw naam is ${result}`);

const cookie = confirm('Wilt u cookies bewaren?');
if (cookie) {alert('U wilt cookies bewaren');}
else {alert('U wilt geen cookies');}

const myCity = 'Den Haag';
aler('Ik woon in ' + myCity); //alert verkeerd geschreven

//Opdrachten interactie boven

//Opdracht rekenen en operatoren onder

let x = 7;
let y = 10;
let z = prompt('Geef een getal op');

document.body.innerHTML += 'De macht van getal 7 is 49';
document.body.innerHTML += 'De macht van getal 10 is 100';

const age = prompt('Wat is uw leeftijd?');
let birthyear = '2021' - age;
console.log("geboortejaar " + birthyear);

const x = 4;
const w = 2;
x * w
x / w
x - w
x + w
document.body.innerHTML += x * w + x / w + x - w + x + w

const random = prompt('Geef een willekeurig getal');
alert(random % 2);