console.log("test");

const age = prompt('Wat is uw leeftijd?');

if (age >= 21) {
    document.body.innerHTML += 'U kan wiskey kopen';
}   

else if (age >=18 || age < 21) {
    document.body.innerHTML += 'Je kan wel bier kopen maar geen whiskey' ;
}

else {
    document.body.innerHTML +='U kan geen whiskey en bier kopen!';
}




