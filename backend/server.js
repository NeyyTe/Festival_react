const express = require('express');
const app = express();
const port=5000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const authRoute = require('./routes/authentification');

app.use(express.json()); 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
})

.then(() => console.log('Connecté à MongoDB') )

.catch((err) => console.log(err));


app.use("/backend/authentification",authRoute);



app.listen(port,()=>{console.log(`Vous etes sur le port ${port}`)});

