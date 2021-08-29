var w = window.innerWidth;
var h = window.innerHeight;
var spotN = 12
var currendBlend = 'color';



for (var i =1; i<=spotN; i++){
    var img = '<img src="./assets/img/spot_'+i+'.png">';
    var spot = $('<div class="asset-wrap spot_'+i+'" data-spot='+i+'>').append(img);
    
    var posLeft = Math.floor(Math.random() * 75)
    // console.log(top,left)
    var screenRatio = w/h;
    var leftMultiplier = 100 - screenRatio*25
    var posTop = Math.floor(Math.random() * leftMultiplier)

    $('#foreground').append(spot)
    spot.css('top', posTop+'%')
    spot.css('left', posLeft+'%')
    spot.draggable();
    // spot.resizable({ 
    //     aspectRatio: true,     
    //     handles: "se",
    //     autoHide: true
    // });
}



