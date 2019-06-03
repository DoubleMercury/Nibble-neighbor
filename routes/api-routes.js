const dbFunctions = require('../functions/dbfunctions.js');


module.exports = function(app) {
  // API GET Requests

  //addUser(res, username, name, email);
  //addRecipe(res, label, image_url, recipe_url, calories, usersID);
  //getAllUsers(res);
  //getAllUserRecipes

  app.post("/api/newuser", function(req, res) {
    
    dbFunctions.addUser(res, req.body.username, req.body.name, req.body.email);

  });

  app.post("/api/newrecipe", function(req,res){

    dbFunctions.addRecipe(res, req.body.label, req.body.image, req.body.url, req.body.calories, req.body.UserId);
  });

  app.get("/api/users", function(req, res){

    dbFunctions.getAllUsers(res);

  });

  app.get("/api/UserRecipes/:userdId", function(req,res){

    dbFunctions.getAllUserRecipes(res, req.params.userId);

  });

};

