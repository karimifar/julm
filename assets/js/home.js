$('p, body').toggleClass('dark')
$('#dark-switch').on('click', function(){
    console.log('switch')
    $('p, body').toggleClass('dark')
})

var gridH = 15
var gridV = 20

function createGrid(h,v){
    for(var i=0; i<h; i++){
        $('#grid-h-wrap').append('<div class="grid-h"></div>')
    }
    for(var i=0; i<v; i++){
        $('#grid-v-wrap').append('<div class="grid-v"></div>')
    }
}
createGrid(gridH,gridV)

$('.obj-wrap').hover(function(){
    var target = $(this).data('target');
    $(target).css('display', 'block')
}, function(){
    var target = $(this).data('target');
    $(target).css('display', 'none')
})

var titleColors = ['#ea3abd','#ea3464','#ec5553','#ec5553', '#ec5c2a', '#ea3abd', '#ea3abd', '#ea3464', '#ec5553', '#ec5c2a', '#eb4574', '#ea3abd','#ea3464','#eb4a63','#ec5553', '#ec5c2a']
var spans = $('#site-title span')
// console.log(spans[2].attr())
for(var i=0;i<spans.length; i++){
    $(spans[i]).attr('data-color', titleColors[i]) 
}

$('#site-title span').hover(function(){
    var color = $(this).data('color')
    $(this).css('transition', 'none')
    $(this).css('color', color)

    var span = $(this);
    
    setTimeout(function(){
        span.css('transition', 'all 1.6s cubic-bezier(0.5, 1, 0.89, 1)')
        span.css('color', 'unset')
        
    },2400)
}, function(){
    
})
// $(spans[2]).css('color', 'red')