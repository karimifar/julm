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
var rocksN = 25;

for (var i =1; i<=rocksN; i++){
    if(i==11){
        var select = 'display'
    }else{
        var select = null;
    }
    var img = '<img src="./assets/img/rocks/rock_'+i+'.png">';
    var navItem = $('<div class="rock-nav-item rock_'+i+' ' +select+'" data-rock='+i+'>').append(img);
    
    $('#rock-nav').append(navItem)
}


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


$('#delay input').on('click', function(){
    delay = $('#delay input:radio:checked').val();
    switch(delay){
        case 'shr':
            inTime = 5000;
            outTime = 2500;
            break;
        case 'med':
            inTime = 8000;
            outTime = 4000;
            break;
        case 'lng':
            inTime = 12000;
            outTime = 6000;
            break;
    }
    clearTimeout(outColor)
    clearInterval(intervalColor)
    console.log(inTime,outTime)
    timing();
    intervalColor = setInterval(timing, inTime+outTime);
})



function colorShift(){

    r1 = Math.floor(Math.random() * 156)
    g1 = Math.floor(Math.random() * 156)
    b1 = Math.floor(Math.random() * 156)
    var maxColor = Math.max(r1,g1,b1);
    switch(maxColor){
        case r1:
            r2 = r1+100; 
            g2 = g1+50;
            b2 = b1+50;
            break;
        case g1:
            r2 = r1+50;
            g2 = g1+100;
            b2 = b1+50;
        case b1:
            r2 = r1+50;
            g2 = g1+50;
            b2 = b1+100;

    }
    rgb1 = 'rgb('+r1+', '+g1+', '+b1+')'
    rgb2 = 'rgb('+r2+', '+g2+', '+b2+')'
    console.log(rgb1,rgb2)
    $('#circle').css('background', rgb2)
    $('.main-view').css('background', rgb1)

    $('.rock-nav-item.display').css('border-bottom-color',rgb2)
    // timing();
    clearInterval(intervalColor)
    clearTimeout(outColor)
    timing();
    intervalColor = setInterval(timing, inTime+outTime);
}

function timing(){
    console.log("timing",inTime,outTime)
    $('#circle').css('background', rgb2)
    outColor = setTimeout(function(){$('#circle').css('background', 'rgb(255,255,255)')},inTime)
}

$('#test').on('click', function(){
    colorShift();
})




$('.rock-nav-item').on('click', function(){
    var rock = 'rock_' + $(this).data('rock');
    console.log(rock);
    var img = './assets/img/rocks/'+rock+'.png';
    $('#displayRock').attr('src',img);
    $('.rock-nav-item').removeClass('display');
    $('.rock-nav-item').css('border-bottom-color','#ffffff00')
    $('.'+rock).addClass('display')
    $('.rock-nav-item.display').css('border-bottom-color',rgb2)
})

$('#tools-handle').on('click',function(){
    $('#toolbar').toggleClass('closed')
})




colorShift();
resetSizes();