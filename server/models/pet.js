console.log("inside of models/pet.js");

const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
   name: {
       type:String,
       required: [true, "Pet must have a name!"],
       maxlength: 255,
       minlength: [3, "Pet's name must be at least 3 characters long"]

   },
    type: {
        type: String,
        required: [true, "What type of pet is it?"],
        maxlength: 255,
        minlength:[3, "Pet's type must be at least 3 characters long"]

    },
    description: {
        type: String,
        required: [true, "This pet needs a description!"],
        minlength: [10, "Descriptions must be at least 10 characters"]
    },
    skills:{
        skillone: {
            type: String,
            maxlength: [255, "Skill is too long!"]
        },
        skilltwo: {
            type: String,
            maxlength: [255, "Skill is too long!"]
        },
        skillthree: {
            type: String,
            maxlength: [255, "Skill is too long!"]
        },

    }

}, {timestamps: true });
        
mongoose.model('Pet', PetSchema);