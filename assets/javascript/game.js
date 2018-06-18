var imgArray = ['"assets/images/boba-fett.jpg"','assets/images/Emperor.jpg','assets/images/ewok.jpg',
'assets/images/grievous.jpg','assets/images/QuiGon.jpg','assets/images/Yoda.jpg'];
var animal = "cat";
// $('#char-select').append($('<img src=assets/images/boba-fett.jpg'));

for(var i=0; i<imgArray.length; i++){
    $('#char-select').prepend("<img id='select'>");
    $('#char-select').addClass("img");
    $('#select').attr("src",imgArray[i]);
}

$('#select').on('click',function(){
    $('#select').addClass("chosen");
    

    $(".chosen").prepend("")
});