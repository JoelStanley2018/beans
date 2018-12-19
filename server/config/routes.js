console.log ("inside of config/routes.js");

const Pets = require("../controllers/pets");

module.exports = function(app){
    app.get('/pet', Pets.getAll);
    app.get('/pet/:id', Pets.getId);
    app.post('/pet', Pets.create);
    app.put('/pet/:id', Pets.update);
    app.delete('/pet/:id', Pets.delete);
}