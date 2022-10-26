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


app.get('/category/:id', (req, res) =>{
     const id = req.params.id;
     const course_category = courses.filter( course => course.category_id === id);
     res.send(course_category)
 });
app.get('/category', (req, res) =>{
     res.send(courses)
 });

app.get('/course-details/:id', (req, res) => {
     const id = req.params.id;
     const getCourse = courses.find( course => course.id === id);
     res.send(getCourse);
})





app.listen(port, () => {
     console.log(`EduWell app listening on port ${port}`)
})