const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const timeToken = 2*14*60*60; // Durée de validité du token
const createToken = (id) => {return jwt.sign({id},"secret_key",{expiresIn : timeToken})}; // Génère un JWT en utilisant l'identifiant, une clé secrète ("secret_key") et la durée de validité définie précédemment

router.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    const userExist = await userSchema.findOne({ email });
    if (userExist) {
      return res.status(400).json("Cet utilisateur est déjà crée");
      
    }
    const salt = await bcrypt.genSalt(11);
    const cryptedPassword = await bcrypt.hash(password, salt);
    const newUser = new userSchema({
      fname,
      lname,
      email,
      password: cryptedPassword,
    });
    const userSaved = await newUser.save();
    return res.status(201).json({ message: "Votre compte enregistré avec succès" });

  } 
  
  catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userSchema.findOne({ email });
      if (!user) {
        return res.status(400).json("Vos identifiants sont incorrects");
        
      }
      const passwordCompare = await bcrypt.compare(password,user.password);
      if
      (!passwordCompare) { return res.status(400).json ("Mot de passe incorrect");
    }

    const token = createToken (user._id);
    
      const {Password, ...others} = user._doc;
      res.status (200).json ({others,token:token});
    }
    catch(err){
        res.status(500).json(err); 
    }
}); 

module.exports = router;
