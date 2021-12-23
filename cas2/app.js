// Vezba za cas:
// Da se iskoristat 2 core modules po vas izbor (iskoristete 3 funkcii od sekoj modul (vkupno 6) i bidete spremni da ni gi prezentirate i objasnite)
// Da se iskoristi faker.js da se generiraat podatoci za 100 lugje (ime i prezime, rabotna pozicija, adresa, grad, drzava, tel. broj i email adresa). Podatocite da se cuvaat vo niza i da se ispecatat vo terminal.


const faker = require('faker');

var os = require('os');
var fs = require('fs');


console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Memory: " + os.totalmem());

// var myInt = setInterval(function () {
//     console.log("Tekst ispisan so timer event");
// }, 500);


let people = []


for(let i = 0; i<=10; i++){
    people.push({
        name : faker.name.findName(),
        workposition : faker.commerce.department(),
        address : faker.address.streetAddress(),
        town : faker.address.city(),
        state : faker.address.state(),
        phone : faker.phone.phoneNumber(),
        email : faker.internet.email(),
        music : faker.music.genre(),
        avatar : faker.image.avatar(),
        car : faker.vehicle.vehicle(),
        bio : faker.lorem.paragraph()
    })
    fs.writeFile(`./docs/${people[i].name}.json`,JSON.stringify(people[i]),()=>{
        console.log(people[i].car);
    });  
}










