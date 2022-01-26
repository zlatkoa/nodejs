var express = require('express');
var router = express.Router();

const cars = [
    {
        "Name":"volkswagen rabbit",
        "Miles_per_Gallon":29.5,
        "Cylinders":4,
        "Displacement":97,
        "Horsepower":71,
        "Weight_in_lbs":1825,
        "Acceleration":12.2,
        "Year":"1976-01-01",
        "Origin":"Europe"
     },
     {
        "Name":"datsun b-210",
        "Miles_per_Gallon":32,
        "Cylinders":4,
        "Displacement":85,
        "Horsepower":70,
        "Weight_in_lbs":1990,
        "Acceleration":17,
        "Year":"1976-01-01",
        "Origin":"Japan"
     },
     {
        "Name":"toyota corolla",
        "Miles_per_Gallon":28,
        "Cylinders":4,
        "Displacement":97,
        "Horsepower":75,
        "Weight_in_lbs":2155,
        "Acceleration":16.4,
        "Year":"1976-01-01",
        "Origin":"Japan"
     },
     {
        "Name":"ford pinto",
        "Miles_per_Gallon":26.5,
        "Cylinders":4,
        "Displacement":140,
        "Horsepower":72,
        "Weight_in_lbs":2565,
        "Acceleration":13.6,
        "Year":"1976-01-01",
        "Origin":"USA"
     },
     {
        "Name":"volvo 245",
        "Miles_per_Gallon":20,
        "Cylinders":4,
        "Displacement":130,
        "Horsepower":102,
        "Weight_in_lbs":3150,
        "Acceleration":15.7,
        "Year":"1976-01-01",
        "Origin":"Europe"
     },
     {
        "Name":"plymouth volare premier v8",
        "Miles_per_Gallon":13,
        "Cylinders":8,
        "Displacement":318,
        "Horsepower":150,
        "Weight_in_lbs":3940,
        "Acceleration":13.2,
        "Year":"1976-01-01",
        "Origin":"USA"
     },
     {
        "Name":"peugeot 504",
        "Miles_per_Gallon":19,
        "Cylinders":4,
        "Displacement":120,
        "Horsepower":88,
        "Weight_in_lbs":3270,
        "Acceleration":21.9,
        "Year":"1976-01-01",
        "Origin":"Europe"
     },
     {
        "Name":"toyota mark ii",
        "Miles_per_Gallon":19,
        "Cylinders":6,
        "Displacement":156,
        "Horsepower":108,
        "Weight_in_lbs":2930,
        "Acceleration":15.5,
        "Year":"1976-01-01",
        "Origin":"Japan"
     },
     {
        "Name":"mercedes-benz 280s",
        "Miles_per_Gallon":16.5,
        "Cylinders":6,
        "Displacement":168,
        "Horsepower":120,
        "Weight_in_lbs":3820,
        "Acceleration":16.7,
        "Year":"1976-01-01",
        "Origin":"Europe"
     },
     {
        "Name":"cadillac seville",
        "Miles_per_Gallon":16.5,
        "Cylinders":8,
        "Displacement":350,
        "Horsepower":180,
        "Weight_in_lbs":4380,
        "Acceleration":12.1,
        "Year":"1976-01-01",
        "Origin":"USA"
     },
     {
        "Name":"chevy c10",
        "Miles_per_Gallon":13,
        "Cylinders":8,
        "Displacement":350,
        "Horsepower":145,
        "Weight_in_lbs":4055,
        "Acceleration":12,
        "Year":"1976-01-01",
        "Origin":"USA"
     },
     {
        "Name":"ford f108",
        "Miles_per_Gallon":13,
        "Cylinders":8,
        "Displacement":302,
        "Horsepower":130,
        "Weight_in_lbs":3870,
        "Acceleration":15,
        "Year":"1976-01-01",
        "Origin":"USA"
     },
     {
        "Name":"dodge d100",
        "Miles_per_Gallon":13,
        "Cylinders":8,
        "Displacement":318,
        "Horsepower":150,
        "Weight_in_lbs":3755,
        "Acceleration":14,
        "Year":"1976-01-01",
        "Origin":"USA"
     },
     {
        "Name":"honda Accelerationord cvcc",
        "Miles_per_Gallon":31.5,
        "Cylinders":4,
        "Displacement":98,
        "Horsepower":68,
        "Weight_in_lbs":2045,
        "Acceleration":18.5,
        "Year":"1977-01-01",
        "Origin":"Japan"
     },
     {
        "Name":"buick opel isuzu deluxe",
        "Miles_per_Gallon":30,
        "Cylinders":4,
        "Displacement":111,
        "Horsepower":80,
        "Weight_in_lbs":2155,
        "Acceleration":14.8,
        "Year":"1977-01-01",
        "Origin":"USA"
     },
     {
        "Name":"renault 5 gtl",
        "Miles_per_Gallon":36,
        "Cylinders":4,
        "Displacement":79,
        "Horsepower":58,
        "Weight_in_lbs":1825,
        "Acceleration":18.6,
        "Year":"1977-01-01",
        "Origin":"Europe"
     },
     {
        "Name":"plymouth arrow gs",
        "Miles_per_Gallon":25.5,
        "Cylinders":4,
        "Displacement":122,
        "Horsepower":96,
        "Weight_in_lbs":2300,
        "Acceleration":15.5,
        "Year":"1977-01-01",
        "Origin":"USA"
     },
     {
        "Name":"datsun f-10 hatchback",
        "Miles_per_Gallon":33.5,
        "Cylinders":4,
        "Displacement":85,
        "Horsepower":70,
        "Weight_in_lbs":1945,
        "Acceleration":16.8,
        "Year":"1977-01-01",
        "Origin":"Japan"
     },
     {
        "Name":"chevrolet caprice classic",
        "Miles_per_Gallon":17.5,
        "Cylinders":8,
        "Displacement":305,
        "Horsepower":145,
        "Weight_in_lbs":3880,
        "Acceleration":12.5,
        "Year":"1977-01-01",
        "Origin":"USA"
     },
     {
        "Name":"oldsmobile cutlass supreme",
        "Miles_per_Gallon":17,
        "Cylinders":8,
        "Displacement":260,
        "Horsepower":110,
        "Weight_in_lbs":4060,
        "Acceleration":19,
        "Year":"1977-01-01",
        "Origin":"USA"
     }
];

router.get('/', (req, res) => {
        res.render('cars/index', { cars });
      })
      .get('/create', (req, res) => {
        res.render('cars/create');
      })
      .post('/create', (req, res) => {
        cars.push(req.body);

        res.redirect('/cars');
      });

module.exports = router;