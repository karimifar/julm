var w = window.innerWidth;
var h = window.innerHeight;
var r1,g1,b1;
var r2,g2,b2;
var rgb1,rgb2;
var inTime = 8000;
var outTime = 4000;
var intervalColor;
var outColor;
var delay;
var rocksN = 16;




// function resetSizes(){
//     var squareSize;
//     if(h>=w){
//         squareSize = w;
//     }else{
//         squareSize = h;
//     }
//     $('#full-screen-img').css('height', squareSize);
//     $('#full-screen-img').css('width', squareSize);
// }

window.onresize = function(event) {
    w = window.innerWidth;
    h = window.innerHeight;
    resetSizes();
    console.log("resized")
};


$('#tools-handle').on('click',function(){
    $('#toolbar').toggleClass('closed')
})




colorShift();
resetSizes();