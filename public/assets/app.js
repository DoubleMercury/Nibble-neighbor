
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
            "q": protein,
            "diet": diet,
            "health":health,
            "calorie": calorie,
            "from":0,
            "to":6
        });
        
        window.location.replace("/results?" + queryParams);
    
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
              <p><a>${url}</a></p>
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





