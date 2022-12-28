const mongoose = require('mongoose');

let validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email);
  };
  
const userSchema = new mongoose.Schema({  

    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Pour l'inscription, votre adresse email est requise"],
        validate: [validateEmail, " Merci d'inscrire un email valide "],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, " Merci d'inscrire un email valide "]
    },

    age: {
        type: Number,
        required: [true, "Quel âge avez-vous ? Cette app est réservée aux 15 ans et plus !"],
        min: 15,
    },

    password: {
        type: String,
        required: [true, "Vous devez enregistrer un mot de passe"]
    },

    gender: String,

    occupation: String,

    country: {
        type: String,
        required: [true, "Nous avons besoin de savoir dans quel pays vous êtes :)"]
    },        
});
  
module.exports = mongoose.model("Users", userSchema);