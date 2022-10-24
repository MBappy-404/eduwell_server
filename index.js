const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');



app.get('/', (req, res) => {
     res.send('EduWell Server is Running!')
})

app.use(cors());




app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})