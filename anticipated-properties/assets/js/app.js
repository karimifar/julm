var w = window.innerWidth;
var h = window.innerHeight;
window.onresize = function(event) {
    w = window.innerWidth;
    h = window.innerHeight;
    // resetSizes();
};
var p1 = 0;
var p2 = 100;

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
        colors: ['#0b0ab3','#ee3989']
    },
    {
        rock: '3',
        colors: ['#eb4a1b', '#046daa']
    },
    {
        rock: '4',
        colors: ['#26b614','#e23228']
    },
    {
        rock: '5',
        colors: ['#db28e2', '#26b614']
    },
    {
        rock: '6',
        colors: ['#df8914','#28e2d8']
    },
]
var color1 = rocksData[0].colors[0];
var color2 = rocksData[0].colors[1];

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
    var c1 = rocksData[i].colors[0];
    var c2 = rocksData[i].colors[1];
    var gradient = createGrad(c1,c2,p1,p2)
    colorItem.css('background',gradient)
    colorItem.data('c1',c1)
    colorItem.data('c2',c2)
    $('#colors-wrap').append(colorItem)
}

$('.color-item').on('click', function(){
    var rock = $(this).data('target')
    color1 = $(this).data('c1')
    color2 = $(this).data('c2')
    console.log(color1,color2)
    var gradient = createGrad(color1,color2,p1,p2)
    $('#rock').attr('src','./assets/img/rocks/'+rock+'.png' )
    $('#rock').data('name',rock)
    $('.main-view').css('background',gradient )

})

$('#gradientRange').on('input', function() {
    percent = $(this).val()
    if(percent>50){
        p1 = percent-50;
    }else{
        console.log(percent)
        p2 = parseInt(percent) + 50;
        console.log(p2)
    }
    var grad= createGrad(color1, color2,p1,p2)
    $('.main-view').css('background', grad )
});

function createGrad(c1,c2,p1,p2){
    var grad = 'linear-gradient(90deg, '+ c1+' '+p1 +'%, '+ c2+' '
    +p2+'%)'
    console.log(grad)
    return grad
}