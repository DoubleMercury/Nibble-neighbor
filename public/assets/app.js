
try {
    $("#submitBtn").on("click", function () {
        console.log("clicked");
        const protein = $("#protein_id").val();
        console.log(protein);
        const diet = $("#diet_id").val();
        console.log(diet);
        const health = $("#health_id").val();
        console.log(health);
        const calorie = $("#calorie_id").val();
        console.log(calorie);
        const exclusions = $("#exclusions_id").val().trim().replace(' ', '-');
        console.log(exclusions);


        const queryParams = $.param({
            "q": protein,
            "diet": diet,
            "health": health,
            "calorie": calorie,
            "from": 0,
            "to": 6
        });

        window.location.replace("/results?" + queryParams);

    });
}

catch (err) {
    $("#resultsBox").append("Sorry Neighbor, no recipes matching your request was found...")
}




function recipeRender(id, image, label, calories, url) {
    $("#resultsBox").append(`
        <div class="card" id="recipe-${id}">
        <div class="card-image">
          <figure class="image is-128x128">
            <img src="${image}" alt="image">
          </figure>
        </div>
        <div class="card-content">
                <div class="media-content">
              <p class="title is-4">${label}</p>
              <p class="subtitle is-6" data-calories="${calories}">Calories: ${calories}</p>
              <p class="url" data-url="${url}"><a>Link to Recipe: ${url}</a></p>
            </div>
          </div>
      
          <div class="content">
            
            <button class="button saveBtn" data-recipe-id="${id}">Save Recipe</button>
            <br>
          </div>
        </div>
      </div>
        `);
}

$("#resultsBox").on("click", ".saveBtn", function (e) {
    const userId = localStorage.getItem("userId");

    if (userId) {
        const recipeId = $(this).attr("data-recipe-id");
        const recipe = $(`#recipe-${recipeId}`);
        const recipeImage = recipe.find("img").attr("src");
        const recipeTitle = recipe.find(".title").text();
        const recipeUrl = recipe.find(".url").attr("data-url");
        const recipeCalories = recipe.find(".subtitle").attr("data-calories");
        console.log(recipeImage, recipeTitle, recipeUrl, recipeCalories);

        $.ajax({
            method: "POST",
            url: "/api/newrecipe",
            data: {
                image: recipeImage,
                label: recipeTitle,
                url: recipeUrl,
                calories: recipeCalories,
                UserId: userId
            }
        }).then(function(result){
            console.log(result);
        })
    }
})





