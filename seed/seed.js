const db = require("../models");
const users = require("./users");
const recipes = require("./recipes")

db.sequelize.sync({ force: true }).then(function () {

    return db.User.bulkCreate(users);
    
}).then(function(){
    return db.Recipe.bulkCreate(recipes);
    
}).then(function(){
    console.log("Seed completed!")
    db.sequelize.close();
});