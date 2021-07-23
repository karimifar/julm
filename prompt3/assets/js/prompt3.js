var w = window.innerWidth;
var h = window.innerHeight;
var objectN = 16
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
    var rockClass;
    if($(this).data('object')<objectN-1){
        rockClass = 'appended-rock'
    }
    var div = $('<div class="appended-object appended-'+object+' '+rockClass+'" ></div>')
    div.append('<div class="exit" data-target=".appended-'+object+'"><i class="fas fa-eraser"></i></div>')
    $('#foreground').append(div.append(img))
    $('.appended-object').draggable();
    $('.appended-object').resizable({ 
        aspectRatio: true,     
        handles: "se",
        autoHide: true
    });
    $('.appended-rock img').css('mix-blend-mode', currendBlend)

    $('.exit').on('click', function(){
        var target = $(this).data('target');
        $(target).remove();
    })
})

function changeBlend(){
    var blend = $('#blend-mode').val();
    currendBlend = blend;
    $('.appended-rock img').css('mix-blend-mode', currendBlend)
}

$('#bg-btn').on('click', function(){
    if($(this).hasClass('soft')){
        $(this).removeClass('soft')
        $('#background').css('background','linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,0,1) 20%, rgba(0,255,0,1) 40%, rgba(0,255,0,1) 60%, rgba(0,0,255,1) 80%, rgba(0,0,255,1) 100%)')
        $(this).text('Soft Background')
    }else{
        $(this).addClass('soft')
        $('#background').css('background','linear-gradient(90deg, rgba(255,0,0,1) 10%, rgba(0,255,0,1) 50%, rgba(0,0,255,1) 90%)')
        $(this).text('Hard Background')
    }
    
})


