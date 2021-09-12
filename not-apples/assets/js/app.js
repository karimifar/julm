for(var i=1; i<25;i++){
    var j =i;
    if(i>15){
        j = Math.ceil(Math.random() * 15)
    }
    $('#grid').append('<div class="cell" data-click=0><div class="img-wrap"><img src="./assets/img/brick_'+j+'.png"></div></div>')
}
$('.cell').bind('mouseover touchstart',function(){
    $('img',this).css('opacity',1)
})

var colors = [
    '#fff',
    '#D0E6F5',
    '#5CB8F7',
    '#DC0824',
    '#0F77BA',
    '#FF00FF',
    '#08304A',
    '#CF959C',
    '#C8D215',
    '#65B79A',
    '#F6FAA2',
]
$('.cell').on('click', function(){
    var cell = $(this);
    var clickCount = parseInt(cell.attr('data-click'))
    if(clickCount ==10){
        clickCount =0;
    }else{
        clickCount++;
    }
    cell.css('background-color', colors[clickCount])
    console.log(colors[clickCount])

    $(this).attr('data-click',clickCount)
    console.log('second',clickCount)
})
