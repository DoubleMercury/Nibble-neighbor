
try {
    $("#submitBtn").on("click", function(){
        console.log("clicked");
        const protein=$("#protein_id").val();
        console.log(protein);
        const diet=$("#diet_id").val();
        console.log(diet);
        const health=$("#health_id").val();
        console.log(health);
        const calorie=$("#calorie_id").val();
        console.log(calorie);
        const exclusions = $("#exclusions_id").val().trim().replace(' ', '-');
        console.log(exclusions);
    
        
        const queryParams = $.param({
            "app_id" : "26abcd0f",
            "app_key" : "448f552b9ad5ea4e801639160282843c",
            "q": protein,
            "diet": diet,
            "health":health,
            "calorie": calorie,
            "from":0,
            "to":6
        });
    
        const queryUrl="https://api.edamam.com/search?" + queryParams;
        //q=" + protein + "&app_id=26abcd0f&app_key=448f552b9ad5ea4e801639160282843c&from=0&to=5&calories=" + calorie + "&diet=" + diet;
    
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log("response: ",response);
            const recipeResults = response;
            window.location.replace("/results");
            for(i=0;i<recipeResults.hits.length;i++){
            const recipe = recipeResults.hits[i].recipe;
            const label = recipe.label;
            const image = recipe.image;
            const url = recipe.uri;
            const calories = recipe.calories;
            recipeRender(image,label,calories,url);
            console.log("recipes: ",recipe);
            console.log("label: ", label);
            console.log("label: ", image);
            console.log("label: ", url);
            console.log("label: ", calories);
            };
            
        });
    
    });
}

catch(err) {
    $("#resultsBox").append("Sorry Neighbor, no recipes matching your request was found...")
}




function recipeRender(image,label,calories,url) {
        $("#resultsBox").append(`
        <div class="card">
        <div class="card-image">
          <figure class="image is-128x128">
            <img src="${image}" alt="image">
          </figure>
        </div>
        <div class="card-content">
                <div class="media-content">
              <p class="title is-4">${label}</p>
              <p class="subtitle is-6">${calories}</p>
              <p>${url}</p>
            </div>
          </div>
      
          <div class="content">
            Recipe contents and directions.
            <a class="button">Save Recipe</a>
            <br>
          </div>
        </div>
      </div>
        `);
}





