var db = require("../models");

const addUser = function(res, username, name, email) {
    
    db.User.create({
        username: username,
        name : name,
        email : email
    }).then(function(dbUser){
        return res.json(dbUser);
    });
}

const addRecipe = function(res, label, image, url, calories, UserId){
    db.Recipe.create({
        label: label,
        image: image,
        url: url,
        calories: calories,
        UserId: UserId
    }).then(function(dbRecipe){
        //console.log(dbRecipe);
        return res.json(dbRecipe);
    })
}

const getAllUsers = function(res){

    db.User.findAll().then(function(users){
        //console.log(users);
        return res.json(users);
    })

}

const getAllUserRecipes = function(res, userId){

    db.Recipe.findAll({where : {UserId: userId}})
    .then(function(recipes){
        //console.log(recipes);
        return res.json(recipes);
    });
}

const deleteUser = function(res, UserId){
    db.User.destroy({where:{id : UserId}})
    .then(function(user){
        return res.json(user);
    }).catch(function(err) {
        console.log("Error", err)
    })
}

const deleteRecipe = function(res, recipeId){
    db.Recipe.destroy({where:{id : recipeId}})
    .then(function(recipe){
        return res.json(recipe);
    })
}

const getUser = function(res, UserId){
    db.User.findOne({where:{id : UserId}})
    .then(function(user){
        return res.json(user);
    });
}

module.exports = {
    addUser: addUser,
    addRecipe: addRecipe,
    getAllUsers: getAllUsers,
    getAllUserRecipes: getAllUserRecipes,
    deleteUser : deleteUser,
    deleteRecipe : deleteRecipe,
    getUser: getUser
}