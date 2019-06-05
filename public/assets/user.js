const userID = localStorage.getItem("userId");


function userPageRender() {
	$.get(`/api/users/${userID}`).then(function (user) {

		$("#userPageHeader").append(`<div class="hero-body">
        <div class="container">
          <h1 class="title">
          ${user.username}
          </h1>
          <h2 class="subtitle">
          ${user.name}
          </h2>
          <h2 class="subtitle">
          ${user.email}
          </h2>
        </div>
      </div>`)

	})



}

function makeRecipeCard(recipe) {
	$("#userMainContent").append(`
<div class="column is-one-fifth is-inline-block">
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src=${recipe.image} alt="Food Image">
    </figure>
    </div>
    <div class="media-content">
        <p class="title is-4">${recipe.label}</p>
    </div>
    <div class="card-content">
        <div class="content">
         ${recipe.calories} Calories
         </div>
    </div>
    <footer class="card-footer">
    <a href="${recipe.url}" class="card-footer-item">View</a>
    <a class="card-footer-item delete-button" data-recipeId = "${recipe.id}">Delete</a>
  </footer>
</div>
</div>
  `)
}

function renderRecipes() {
	$.get(`/api/users/recipes/${userID}`).then(function (recipes) {
		recipes.forEach(recipe => {
			makeRecipeCard(recipe);
		});
	});
}

$("#userMainContent").on("click", ".delete-button", function(){
	const recipeId = $(this).attr("data-recipeId");

	$.ajax({
		method: "DELETE",
		url: "/api/users/recipes/"+ recipeId
	}).then(function(){
		$("#userMainContent").empty();
		renderRecipes();
	})
});

userPageRender();
renderRecipes();
