var w = window.innerWidth;
var h = window.innerHeight;
var objectN = 16
var blendModes = [
    {blend: 'normal', name:'Common'},
    {blend: 'exclusion', name:'Oppositional light'},
    {blend:'difference',name:'Shadow ambiance'},
    {blend:'hue', name:'Prone'},
    {blend:'hard-light',name:'Achroma'},
    {blend:'screen', name:'Color apparition'}
]
var currendBlend = 'normal';


for (var i=0; i<blendModes.length; i++){
    var blend = blendModes[i].blend;
    var blendName = blendModes[i].name;
    var option = $('<input type="radio" class="btn-check" name="blendradio" id="blend'+i+'" value='+blend+'>')
    if(blend=='normal'){
        option.attr('checked', 'checked');
    }
    var label = $('<label class="julm-btn" for="blend'+i+'">'+blendName+'</label>')
    $('#blend-mode').append(option)
    $('#blend-mode').append(label)
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
    if($(this).data('object')<objectN){
        rockClass = 'appended-rock'
    }
    var div = $('<div class="appended-object appended-'+object+' '+rockClass+'" ></div>')
    div.append('<div class="exit" data-target=".appended-'+object+'">X</div>')
    $('#foreground').append(div.append(img))
    $('.appended-object').draggable();
    $('.appended-object').resizable({ 
        aspectRatio: true,     
        handles: "se",
        autoHide: true
    });
    $('.appended-rock img').css('mix-blend-mode', currendBlend)

    $('.exit').on('click', function(){
        $(this).parent().remove();
    })
})

function changeBlend(){
    var blend = $('#blend-mode input:radio:checked').val();
    currendBlend = blend;
    $('.appended-rock img').css('mix-blend-mode', currendBlend)
}
$('#blend-mode input').on('click', function(){
    changeBlend();
})

$('#bg-btn').on('click', function(){
    if($(this).hasClass('soft')){
        $(this).removeClass('soft')
        $('#background').css('background','linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,0,1) 33.3333%, rgba(0,255,0,1) 33.3333%, rgba(0,255,0,1) 66.6666%, rgba(0,0,255,1) 66.6666%, rgba(0,0,255,1) 100%)')
        $(this).text('Soft Background')
    }else{
        $(this).addClass('soft')
        $('#background').css('background','linear-gradient(90deg, rgba(255,0,0,1) 10%, rgba(0,255,0,1) 50%, rgba(0,0,255,1) 90%)')
        $(this).text('Hard Background')
    }
    
})


$('#grounds input').on('click', function(){
    var ground = $('#grounds input:radio:checked').val();
    console.log(ground)
    switch(ground){
        case 'hard':
            $('#background').css('background','linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,0,1) 33.3333%, rgba(0,255,0,1) 33.3333%, rgba(0,255,0,1) 66.6666%, rgba(0,0,255,1) 66.6666%, rgba(0,0,255,1) 100%)');
            $('header').addClass('dark')
            $('#toolbar').addClass('dark')
            break;
        case 'soft':
            $('#background').css('background','linear-gradient(90deg, rgba(255,0,0,1) 10%, rgba(0,255,0,1) 50%, rgba(0,0,255,1) 90%)');
            $('header').addClass('dark')
            $('#toolbar').addClass('dark')
            break;
        case 'empty':
            $('#background').css('background','none');
            $('header').removeClass('dark')
            $('#toolbar').removeClass('dark')
            break;

    }
})


