var w = window.innerWidth;
var h = window.innerHeight;
var objectN = 15
var blendModes = ['normal','multiply','screen','overlay','darken','lighten','color-dodge','color-burn','hard-light','soft-light','difference','exclusion','hue','saturation','color','luminosity']
var currendBlend = 'normal';
$('#tools-handle').on('click',function(){
    $('#toolbar').toggleClass('closed')
})

for (var i=0; i<blendModes.length; i++){
    var blend = blendModes[i];
    var option = $('<option value='+blend+'>'+blend+'</option>')
    $('#blend-mode').append(option)
}

for (var i =1; i<=objectN; i++){
    if(i==1){
        var select = 'display'
    }else{
        var select = null;
    }
    var img = '<img src="./assets/img/objects/object-'+i+'.png">';
    var navItem = $('<div class="object-nav-item object_'+i+' ' +select+'" data-object='+i+'>').append(img);
    
    $('#object-nav').append(navItem)
}

$('.object-nav-item').on('click', function(){
    var object = 'object-'+$(this).data('object');
    var img = $('<img src="./assets/img/objects/'+object+'.png">');
    var div = $('<div class="appended-object" id=appended-'+object+ ' ></div>')
    $('#foreground').append(div.append(img))
    $('.appended-object').draggable();
    $('.appended-object').resizable({ aspectRatio: true,handles: "se, sw, nw, ne" });
    $('.appended-object').css('mix-blend-mode', currendBlend)
})

function changeBlend(){
    var blend = $('#blend-mode').val();
    currendBlend = blend;
    $('.appended-object').css('mix-blend-mode', currendBlend)
}
