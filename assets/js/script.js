$('#nav-btn').mouseenter(function(){
    $('header').removeClass('collapsed')
    // $('#nav-btn i').removeClass('fa-bars')
    // $('#nav-btn i').addClass('fa-times')
})
$('#nav-menu').mouseleave(function(){
    $('header').addClass('collapsed')
})

$('#nav-btn').on('click', function(){
    $('header').toggleClass('collapsed')
    // $('#nav-btn i').toggleClass('fa-bars')
    // $('#nav-btn i').toggleClass('fa-times')
})
console.log('sctipt')
// $('#tools-handle').on('click',function(){
//     $('#toolbar').toggleClass('closed')
// })
$('#tools-handle').on({'touchstart' : function(){
    $('#toolbar').toggleClass('closed')
    } 
});

$('#toolbar').hover(function(){
    $('#toolbar').toggleClass('closed')
},function(){
    $('#toolbar').toggleClass('closed')
} )