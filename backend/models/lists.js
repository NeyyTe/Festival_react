const mongoose = require("mongoose");

const listsSchema = new mongoose.Schema(
  {
    pass: {
      type: String,
      required: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    fname: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true } // Pour avoir la date de création du profil
);

module.exports = mongoose.model("Lists", listsSchema);
