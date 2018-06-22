var imgID = ["#fett", "#emperor", "#ewok", "#grievous","#quigon","#solo","#yoda"];
console.log("Array of images id "+imgID);
   



var fett ={
    health: 100,
    power: 10,
};

var emperor = {
    health: 80,
    power: 20,
};

var ewok = {
    health: 70,
    power: 5,
};

var grievous = {
    health: 120,
    power: 15,
}
var charSelected = false;
var enemySelected = false;





$("#char-select").on("click", ".characters",function(){
    // console.log("INSIDE THIS CLICK EVENT!");
    // console.log("THIS: "+ $(this).attr("id"));
    $(this).removeClass("characters");
    $(this).detach().appendTo("#chosen");
    //console.log($(this).attr("class"));
    charSelected = true;
     
    console.log(yourChar);
    toEnemySelect();
    $("#row2").hide();
    enemySelect();

    
 //console.log(charSelected);
});


function enemySelect() {
    $("#row3").on("click", ".characters",function(){
        $(this).removeClass("characters");
        $(this).detach().appendTo("#enemy");
        // console.log(this);
        // console.log($(this).attr("class"));
        enemySelected = true;
        $("#row3").off("click");
    });    
};

fight();

function toEnemySelect(){
    $(".characters").detach().appendTo("#row3");
}

function fight(){
    $("#attack").on("click", function(){
        console.log("Attack!");
        

    });  
}

