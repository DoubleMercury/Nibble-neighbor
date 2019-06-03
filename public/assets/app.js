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
    console.log(exclusions)
    });