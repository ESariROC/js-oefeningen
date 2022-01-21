const nowTime = prompt("hoe laat is het ?", "12");
if (nowTime >= 6 ) {
    alert('Goede morgen');
} else if (nowTime >= 12 ) {
    alert('Goede middag');
} else if (nowTime >= 18 ) {
    alert('Goede avond');
} else { (nowTime >= 24 )
    alert('Goede Nacht');
}

document.querySelector(".textTime").innertext = nowTime + "user";
console.log("textTime");