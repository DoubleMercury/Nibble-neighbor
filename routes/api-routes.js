const dbFunctions = require('../functions/dbfunctions.js');


module.exports = function (app) {
	// API GET Requests

	//addUser(res, username, name, email);
	//addRecipe(res, label, image_url, recipe_url, calories, usersID);
	//getAllUsers(res);
	//getAllUserRecipes

	app.post("/api/newuser", function (req, res) {

		dbFunctions.addUser(res, req.body.username, req.body.name, req.body.email);

	});

	app.post("/api/newrecipe", function (req, res) {

		dbFunctions.addRecipe(res, req.body.label, req.body.image, req.body.url, req.body.calories, req.body.UserId);
	});

	app.get("/api/users", function (req, res) {

		dbFunctions.getAllUsers(res);

	});

	app.get("/api/users/:userId", function (req, res) {
		dbFunctions.getUser(res, req.params.userId)
	});

	app.get("/api/users/recipes/:userId", function (req, res) {

		dbFunctions.getAllUserRecipes(res, req.params.userId);

	});

	app.delete("/api/users/:UserId", function (req, res) {
		dbFunctions.deleteUser(res, req.params.UserId);
	});

	app.delete("/api/users/recipes/:RecipeId", function (req, res) {
		dbFunctions.deleteRecipe(res, req.params.RecipeId);
	});
};

