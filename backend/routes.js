const express = require('express');
const app = express();

app.use(express.json())

app.get('/api/photos', (res, req) => {
    //query database
    //send response to frontend
})

app.delete('/api/photos/:id', (req, res) =>{
    const photo = posts.find((photo) => photo.id == req.params.id)
    res.json(photo)
})

app.post('/api/photos/', (req, res) => {
    //add photo to database
    //return photo to frontend
})

