const dbFunctions = require('../functions/dbfunctions')

module.exports = function(app) {
  // API GET Requests
 


  app.get("/api/recipe", function(req, res) {
    res.json(recipeData);
  });


  app.post("/api/newuser", function(req, res) {
    
    //console.log(dbFunctions.addUser("MikeAndIke", "Micheal", "micheal@gmail.com"));

    res.end();
  });

  app.post("/api/newrecipe", function(req,res){
    //console.log(dbFunctions.addRecipe("Hot Dog", "www.hotdogimage.com", "www.howtomakeahotdog.com", 300, 1));

    res.end();
  })

  app.get("/api/getusers", function(req, res){

    res.json(dbFunctions.getAllUsers());

  })

  app.get("/api/getAllUserRecipies", function(req,res){
    res.json(dbFunctions.getAllUserRecipies(1));
  });


  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    ingredientsData.length = 0;
    recipeData.length = 0;

    res.json({ ok: true });
  });
};

