var chars = {
        fett: {
            health: 100,
            power: 10,
        },
        emperor: {
            health: 10,
            power: 1,
        },
        ewok: {
            health: 10,
            power: 1,
        },
        grievous: {
            health: 10,
            power: 1,
        },
    }

var charSelected = false;
var enemySelected = false;
var heroIselected;
var enemyIselected;
var hHealth;
var win = false;
var loss = false;
var num = 3;

$("#char-select").on("click", ".characters",function(){
    // console.log("INSIDE THIS CLICK EVENT!");
    // console.log("THIS: "+ $(this).attr("id"));
    $(this).removeClass("characters");
    $(this).detach().appendTo("#chosen");
    //console.log($(this).attr("class"));
    //console.log($(this).attr("data-name"));
    charSelected = true;
    var name = $(this).attr("id");
    
    heroIselected = chars[name];
    
    toEnemySelect();
    $("#row2").hide();
    enemySelect();
    console.log(charSelected);
    console.log(enemySelected);
    
});



function enemySelect() {
    $("#row3").on("click", ".characters",function(){
        enemySelected = true;
        $(this).removeClass("characters");
        $(this).addClass("enemy");
        $(this).detach().appendTo("#enemy");
        $("#row3").off("click");
        var name = $(this).attr("id"); 
        console.log(charSelected);
        console.log(enemySelected);
        enemyIselected = chars[name];
        fight(); 
         
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
            $("#battle-log").text("Your health is "+heroIselected.health+".");
            $("#battle-log").text("Enemy health is "+enemyIselected.health+".");
            

            if (eHealth === 0 && hHealth > 0){ //winning condition.
                console.log("You win!");
                $("#battle-log").text("You win!");
                win = true;
                $(".enemy").detach().appendTo("#defeated");
                num --;
                
                // $("#attack").off("click");
                enemySelect();

                if (num === 0){
                    $("#battle-log").text("You have defeated all the enemies, Jedi!");
                    $("#attack").html("Replay");
                    $("#attack").on("click", function(){
                        window.location.reload();
                    });
                };

            

            if (eHealth > 0 && hHealth === 0){
                console.log("you lose!");
                loss = true;
            };
        }
    })}

        
        //need to figure out how to change the displayed health under image.        
        