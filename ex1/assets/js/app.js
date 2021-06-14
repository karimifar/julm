var w = window.innerWidth;
var h = window.innerHeight;

function resetSizes(){
    var squareSize;
    if(h>=w){
        squareSize = w;
    }else{
        squareSize = h;
    }
    $('#full-screen-img').css('height', squareSize);
    $('#full-screen-img').css('width', squareSize);
}

window.onresize = function(event) {
    w = window.innerWidth;
    h = window.innerHeight;
    resetSizes();
    console.log("resized")
};
resetSizes();

var r1,g1,b1;
var r2,g2,b2;
var rgb1,rgb2;
var inTime = 10000;
var outTime = 5000;

function colorShift(){
    r1 = Math.floor(Math.random() * 216)
    g1 = Math.floor(Math.random() * 216)
    b1 = Math.floor(Math.random() * 216)
    var maxColor = Math.max(r1,g1,b1);
    switch(maxColor){
        case r1:
            r2 = r1+40; 
            g2 = g1+10;
            b2 = b1+10;
            break;
        case g1:
            r2 = r1 +10;
            g2 = g1+40;
            b2 = b1+10;
        case b1:
            r2 = r1 +10;
            g2 = g1+10;
            b2 = b1+40;

    }
    rgb1 = 'rgb('+r1+', '+g1+', '+b1+')'
    rgb2 = 'rgb('+r2+', '+g2+', '+b2+')'
    console.log(rgb1,rgb2)
    $('#circle').css('background', rgb2)
    $('.main-view').css('background', rgb1)
    timing();
    setInterval(timing, inTime+outTime);
}
colorShift();

function timing(){
    console.log("timing")
    $('#circle').css('background', rgb2)
    setTimeout(function(){$('#circle').css('background', 'rgb(255,255,255)')},inTime)
}
