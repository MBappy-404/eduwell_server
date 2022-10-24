const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');
app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
     res.send('EduWell Server is Running!')
})

app.get('/course-categories', (req, res) => {
     res.send(categories);
})

app.get('/course-details', (req, res) =>{
     res.send(courses);
 });

app.get('/course-details/:id', (req, res) => {
     const id = req.params.id;
     const getCourse = courses.find( course => course.id === id);
     res.send(getCourse);
})





app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})