$('#nav-btn').on('click', function(){
    $('header').toggleClass('collapsed')
    $('#nav-btn i').toggleClass('fa-bars')
    $('#nav-btn i').toggleClass('fa-times')
})