for(var i=1; i<25;i++){
    var j =i;
    if(i>15){
        j = Math.ceil(Math.random() * 15)
    }
    $('#grid').append('<div class="cell" data-click=0><img src="./assets/img/brick_'+j+'.png"></div>')
}
$('.cell').mouseover(function(){
    $('img',this).css('display','block')
})

$('.cell').on('click', function(){
    var cell = $(this);
    var clickCount = parseInt(cell.attr('data-click'))
    clickCount++;
    
    if(clickCount ==1){
        cell.css('background-color', 'yellow')
    }else if(clickCount == 2){
        cell.css('background-color', 'red')
    }else{
        cell.css('background-color', 'blue')
    }

    $(this).attr('data-click',clickCount)
    console.log('second',clickCount)
})
