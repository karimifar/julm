var w = window.innerWidth;
var h = window.innerHeight;
window.onresize = function(event) {
    w = window.innerWidth;
    h = window.innerHeight;
    // resetSizes();
};

$('#tools-handle').on('click',function(){
    $('#toolbar').toggleClass('closed')
})

var spinnerN = 10;



var rocksData = [
    {
        rock: '1',
        colors: ['#ee3989', '#f9e173']
    },
    {
        rock: '2',
        colors: ['#ee3989', '#0b0ab3']
    },
    {
        rock: '3',
        colors: ['#eb4a1b', '#046daa']
    },
    {
        rock: '4',
        colors: ['#e23228', '#26b614']
    },
    {
        rock: '5',
        colors: ['#db28e2', '#26b614']
    },
    {
        rock: '6',
        colors: ['#28e2d8', '#df8914']
    },
]


$('#rock').on('click', function(){
    var imgName = $(this).data('name')
    console.log(imgName);
    if(imgName.indexOf('-')>0){
        var sideA = imgName.split('-')[0]
        console.log(sideA)
        $(this).attr('src', './assets/img/rocks/'+sideA+'.png')
        $(this).data('name', sideA)
    }else{
        $(this).attr('src', './assets/img/rocks/'+imgName+'-b.png')
        $(this).data('name', imgName+'-b')
    };
})

for(var i=0;i<rocksData.length; i++){
    var rock = 'rock'+rocksData[i].rock
    var colorItem = $('<div class="color-item" data-target='+rock+'>')
    var gradient = 'linear-gradient(90deg,'+ rocksData[i].colors[0]+' 0%,'+ rocksData[i].colors[1]+' 100%)'
    colorItem.css('background',gradient)
    colorItem.data('gradient',gradient)
    $('#colors-wrap').append(colorItem)
}

$('.color-item').on('click', function(){
    var rock = $(this).data('target')
    var gradient = $(this).data('gradient')
    $('#rock').attr('src','./assets/img/rocks/'+rock+'.png' )
    $('#rock').data('name',rock)
    $('.main-view').css('background',gradient )

})