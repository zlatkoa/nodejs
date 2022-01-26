const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

/**
Zadaca za cas:
Da se napravi Express API za menadziranje na studenti. 
Za sekoj student se cuva ime, prezime, smer, godina na zapisuvanje i prosek. 
Preku API-to treba da moze da dodavame studenti, 
da gi dobieme site studenti vo bazata, da filtrirame studenti po smer i godina na zapisuvanje.
 */

const students = [];

app
  .get('/students', (req, res) => {
    res.send({
      message: 'List of all students',
      students: students
    })
  })
  .get('/students/:degree', (req, res) => {
    let filteredStudents = students.filter(student => {
      return student.degree.toLowerCase() == req.params.degree.toLowerCase()
    })
    res.send({
      message: 'All students with the degree ' + req.params.degree,
      students: filteredStudents
    })
  })
  .get('/students/year/:start_year', (req, res) => {
    let filteredStudents = students.filter(students.start_year)
    res.send({
      message: 'All students with the start year ' + req.params.start_year,
      students: filteredStudents
    })
  })
  .post('/students', (req, res) => {
    students.push(req.body);
    res.send({
      message: 'New student with the name of ' + req.body.name + ' is added to the database.',
      students: students
    })
  })

app.listen(port, () => {
  console.log(`App is running and listening at http://localhost:${port}`)
});
