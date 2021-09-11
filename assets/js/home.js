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