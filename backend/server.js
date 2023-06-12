const express = require('express');
const app = express();
const port=5000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const bodyParser = require('body-parser');
const authRoute = require('./routes/authentification');
const Lists = require('./models/lists');
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// Ajouter un nouveau billet
app.post('/api/lists', (req, res) => {
  const { pass, name, fname, quantity, price } = req.body;
  const newList = new List({ pass, name, fname, quantity, price });

  newList.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send('Billet ajouté avec succès');
    }
  });
});

// Mettre à jour un billet existant
app.put('/api/lists/:id', (req, res) => {
  const { pass, name, fname, quantity, price } = req.body;
  const id = req.params.id;

  List.findByIdAndUpdate(
    id,
    { pass, name, fname, quantity, price },
    { new: true },
    (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send('Billet mis à jour avec succès');
      }
    }
  );
});

// Supprimer un billet
app.delete('/api/lists/:id', (req, res) => {
  const id = req.params.id;

  List.findByIdAndRemove(id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('Billet supprimé avec succès');
    }
  });
});


app.listen(port,()=>{console.log(`Vous etes sur le port ${port}`)});

