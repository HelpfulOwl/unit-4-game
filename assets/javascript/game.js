var imgID = ["#fett", "#emperor", "#ewok", "#grievous","#quigon","#solo","#yoda"];
console.log("Array of images id "+imgID);
   

// function clickHandler(event) {
//     console.log(event)
// } ;

var fett ={
    health:"100",
    power: "10"
};

var emperor = {
    health: "80",
    power: "20"
};
var charSelected = false;
var enemySelected = false;
// function selector(value){
//     $(imgID[value]).on("click",function(){
//         $(imgID[value]).detach().appendTo('#row3');
//         charSelected = true;
//         console.log(charSelected);
//     });
// }
function toEnemySelect(){
    $(".characters").detach().appendTo("#row3");
}

$("#char-select").on("click", ".characters",function(){
    console.log("INSIDE THIS CLICK EVENT!");
    console.log("THIS: "+ $(this).attr("id"));
    $(this).removeClass("characters");
    $(this).detach().appendTo("#chosen");
    console.log($(this).attr("class"));
    charSelected = true;
    toEnemySelect();
    $("#row2").hide();
    
 //console.log(charSelected);
});


function enemySelect() {
    $("#enemy-select").on("click", ".characters",function(){
        // $(this).removeClass("characters");
        $(this).detach().appendTo("#enemy");
        console.log(this);
        // console.log($(this).attr("class"));
        enemySelected = true;
    });    
 //console.log(charSelected);
};

if (charSelected === "true"){
    enemySelect();
}






    // $(imgID[0]).on("click",function(){
    //     $(imgID[0]).detach().appendTo('#row3');
    //     charSelected = true;
    //     console.log(charSelected);
    // });

    // $(imgID[1]).on("click",function(){
    //     $(imgID[1]).detach().appendTo('#row3');
    //     charSelected = true;
    // });

    // $(imgID[2]).on("click",function(){
    //     $(imgID[2]).detach().appendTo('#row3');
    //     charSelected = true;
    // });

    // $(imgID[3]).on("click",function(){
    //     $(imgID[3]).detach().appendTo('#row3');
    //     charSelected = true;
    // });


// $('.press-me').on('click', clickHandler)