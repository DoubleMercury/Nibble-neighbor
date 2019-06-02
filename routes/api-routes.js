const dbFunctions = require('../functions/dbfunctions.js');


module.exports = function(app) {
  // API GET Requests


  app.post("/api/newuser", function(req, res) {
    
    dbFunctions.addUser(res, "MikeAndIke", "Micheal", "micheal@gmail.com");

  });

  app.post("/api/newrecipe", function(req,res){

    dbFunctions.addRecipe(res, "Hot Dog", "www.hotdogimage.com", "www.howtomakeahotdog.com", 300, 1);
  });

  app.get("/api/getusers", function(req, res){

    dbFunctions.getAllUsers(res);

  });

  app.get("/api/getAllUserRecipies", function(req,res){

    dbFunctions.getAllUserRecipies(res, 1);

  });


  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    ingredientsData.length = 0;
    recipeData.length = 0;

    res.json({ ok: true });
  });
};

