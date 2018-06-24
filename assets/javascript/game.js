var chars = {
        fett: {
            health: 100,
            power: 10,
        },


        emperor: {
            health: 80,
            power: 20,
        },


        ewok: {
            health: 70,
            power: 5,
        },

        grievous: {
            health: 120,
            power: 15,
        },
    }        
var charSelected = false;
var enemySelected = false;
var heroIselected;
var enemyIselected;
var hHealth;
var win = false;
var loss = false;



$("#char-select").on("click", ".characters",function(){
    // console.log("INSIDE THIS CLICK EVENT!");
    // console.log("THIS: "+ $(this).attr("id"));
    $(this).removeClass("characters");
    $(this).detach().appendTo("#chosen");
    //console.log($(this).attr("class"));
    //console.log($(this).attr("data-name"));
    charSelected = true;
    var name = $(this).attr("id");
    console.log(this);
    console.log(name);
    heroIselected = chars[name];
    console.log(heroIselected);
    
    toEnemySelect();
    $("#row2").hide();
    enemySelect();
    fight();
});



function enemySelect() {
    $("#row3").on("click", ".characters",function(){
        $(this).removeClass("characters");
        $(this).detach().appendTo("#enemy");
        //console.log(this);
        // console.log($(this).attr("class"));
        enemySelected = true;
        $("#row3").off("click");
        var name = $(this).attr("id");
        console.log(this);
        console.log(name);
        enemyIselected = chars[name];
        console.log(enemyIselected);
    });    
};


function toEnemySelect(){
    $(".characters").appendTo("#row3");
};

function fight(){
    $("#attack").on("click", function(){
        
        // console.log(heroIselected);
        // console.log(enemyIselected);
        // console.log(heroIselected.health);
            
            var hHealth = heroIselected.health - enemyIselected.power;
            var eHealth = enemyIselected.health - heroIselected.power;
            heroIselected.health = hHealth;
            enemyIselected.health = eHealth;
            console.log(heroIselected.health);
            console.log(enemyIselected.health);
            
            if (eHealth === 0 && hHealth > 0){
                console.log("You win!");
                win = true;
            }
        
        //need to figure out how to change the displayed health under image.
        
        
        
        
        

    });  
};

