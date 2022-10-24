const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');
app.use(cors());

const categories = require('./Data/categories.json');

app.get('/', (req, res) => {
     res.send('EduWell Server is Running!')
})

app.get('/course-categories', (req, res) =>{

     res.send(categories);
})








app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})