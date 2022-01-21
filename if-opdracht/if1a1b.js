console.log("test");

const time = prompt('Hoe laat is het');
if (time <= 0 || time >= 25) {alert('This is not possible')}

else if (time <=12 && time >6) {
    console.log("Het is ochtend");
}

else if (time >=12 && time <=18) {
    console.log("Het is middag");
}

else if (time >=18 && time <=24) {
    console.log("Het is avond");
}

else if (time >=24 && time <=6) {
    console.log("Het is nacht");
}
