const ingredientsData = require("../data/ingredientsData");
const recipeData = require("../data/recipeData");

module.exports = function(app) {
  // API GET Requests
 

  app.get("/api/ingredients", function(req, res) {
    res.json(ingredientsData);
  });

  app.get("/api/recipe", function(req, res) {
    res.json(recipeData);
  });


  app.post("/api/", function(req, res) {
 
    if (ingredientsData.length < 5) {
      ingredientsData.push(req.body);
      res.json(true);
    }
    else {
      recipeData.push(req.body);
      res.json(false);
    }
  });



  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    ingredientsData.length = 0;
    recipeData.length = 0;

    res.json({ ok: true });
  });
};




"api/users"

"api/users/:user"