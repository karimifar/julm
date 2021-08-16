for(var i=1; i<25;i++){
    var j =i;
    if(i>15){
        j = Math.ceil(Math.random() * 15)
    }
    $('#grid').append('<div class="cell" data-click=0><div class="img-wrap"><img src="./assets/img/brick_'+j+'.png"></div></div>')
}
$('.cell').mouseover(function(){
    $('img',this).css('opacity',1)
})

$('.cell').on('click', function(){
    var cell = $(this);
    var clickCount = parseInt(cell.attr('data-click'))
    if(clickCount ==6){
        clickCount =0;
    }else{
        clickCount++;
    }
    
    
    if(clickCount ==1){
        cell.css('background-color', 'yellow')
    }else if(clickCount == 2){
        cell.css('background-color', 'red')
    }else if(clickCount ==3){
        cell.css('background-color', 'blue')
    }else if(clickCount ==4){
        cell.css('background-color', 'rgb(0, 255, 255)')
    }else if(clickCount ==5){
        cell.css('background-color', 'rgb(0, 255, 0)')
    }else if(clickCount ==6){
        cell.css('background-color', 'rgb(255,0,255)')
    }else{
        cell.css('background-color', '#fff')
    }

    $(this).attr('data-click',clickCount)
    console.log('second',clickCount)
})
