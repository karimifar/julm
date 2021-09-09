var w = window.innerWidth;
var h = window.innerHeight;

var spinnerN = 10;

for (var i =1; i<=spinnerN; i++){
    if(i==1){
        var select = 'display'
    }else{
        var select = null;
    }
    var img = '<img src="./assets/img/spinners/Spinner_'+i+'.png">';
    var navItem = $('<div class="spinner-nav-item Spinner_'+i+' ' +select+'" data-spinner='+i+'>').append(img);
    
    $('#spinner-nav').append(navItem)
}

function updateTime(val) {
    $('#textInput').value=val; 
}
$('#timeRange').on('input', function() {
    var time = $(this).val()
    $('#textInput').html( time+' ms' );
    changeTime(time)
});

function changeTime(time){
    $('#spinner').css('animation-duration',time+'ms')
}

$('#spinner').on('click',function(){
    var el = document.getElementById('spinner');
    if($("#spinner").hasClass('stopped')){
        $("#spinner").css('animation-name','spin')
        $("#spinner").removeClass("stopped")
    }else{
        var st = window.getComputedStyle(el, null);
        var tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "fail...";
        
        $("#spinner").css('animation-name','none')
        $("#spinner").css('transform',tr)
        $("#spinner").addClass('stopped')
    }
    // console.log(tr)

})
// function resetSizes(){
//     var squareSize;
//     if(h>=w){
//         squareSize = w;
//     }else{
//         squareSize = h;
//     }
//     $('#full-screen-img').css('height', squareSize);
//     $('#full-screen-img').css('width', squareSize);
// }

window.onresize = function(event) {
    w = window.innerWidth;
    h = window.innerHeight;
    // resetSizes();
    console.log("resized")
};


$('.spinner-nav-item').on('click', function(){
    var spinner = 'Spinner_' + $(this).data('spinner');
    var img = './assets/img/spinners/'+spinner+'.png';
    $('#spinner').attr('src',img);
    $('.spinner-nav-item').removeClass('display');
    $('.spinner-nav-item').css('border-bottom-color','#ffffff00')
    $('.'+spinner).addClass('display')
    $('.spinner-nav-item.display').css('border-bottom-color','#222')
})


