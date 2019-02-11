var fakerator = require('fakerator')('fr-FR');
var faker = require('faker');
var fs = require('fs');
var moment = require('moment');

var data = [];
console.log(faker.address.city())
for(var i=0; i< 7000; i++) {
    var futureDate = faker.date.future()
    var item = {
        from: fakerator.address.city(),
        to: fakerator.address.city(),
        departureDate: futureDate,
        arrivalDate: moment(futureDate).add(3, 'hours'),
        via:[
            fakerator.address.city(),
            fakerator.address.city(),
            fakerator.address.city(),
            fakerator.address.city(),
        ],
        remainingSeats:  Math.ceil(Math.random()*20),
        imgUrl: faker.image.city(),
        price: Math.ceil(Math.random()*15),

    }

    data.push(item)
}


var jsonData = JSON.stringify(data)

fs.writeFile('./src/data/data.json', jsonData, 'utf8', function(error)  {
    if(error) {
        console.log(error)
    }
    console.log('file saved')
});