var db = require("../models");

const addUser = function(username, name, email) {
    
    db.User.create({
        username: username,
        name : name,
        email : email
    }).then(function(dbUser){
        return dbUser;
    });
}

const addRecipe = function(label, image, url, calories, UserId){
    db.Recipe.create({
        label: label,
        image: image,
        url: url,
        calories: calories,
        UserId: UserId
    }).then(function(dbRecipe){
        console.log(dbRecipe);
        return dbRecipe;
    })
}

const getAllUsers = function(){

    db.User.findAll().then(function(users){
        console.log(users);
        return users;
    })

}

const getAllUserRecipies = function(userId){

    db.Recipe.findAll({where : {UserId: userId}})
    .then(function(recipes){
        console.log(recipes);
        return recipes;
    });
}


module.exports = {
    addUser: addUser,
    addRecipe: addRecipe,
    getAllUsers: getAllUsers,
    getAllUserRecipies: getAllUserRecipies
}