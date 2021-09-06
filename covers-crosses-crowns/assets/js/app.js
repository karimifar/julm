var w = window.innerWidth;
var h = window.innerHeight;
window.onresize = function(event) {
    w = window.innerWidth;
    h = window.innerHeight;
    cardH = cardW*w/h*1.4;
    if(cardH<13){
        cardH= 13;
    }
    updatePositions();
    adjustBoard()
};
adjustBoard();
function adjustBoard(){
    if(w>h){
        $('#board').css('height', '100%')
    }else{
        $('#board').css('height', w)
    }
}
$('#tools-handle').on('click',function(){
    $('#toolbar').toggleClass('closed')
})
var cardW = 10;
var cardH = cardW*w/h*1.4;
if(cardH<13){
    cardH= 13;
}
var totalMargin = 100 - (5 * cardW);
var marginUnit = totalMargin/15;
var cards = {
    design: [1,2,3,4,5,6,7,8],
    colors: ['B', 'C', 'G', 'M', 'R', 'Y'],
    images: []
}
var board = [
    {
        num: 0,
        //3 was 4.5 before
        pos: [3*marginUnit,5]
    },
    {
        num: 1,
        pos: [(7.5*marginUnit)+2*cardW, 3*marginUnit + cardH],
        text: 'this covers'
    },
    {
        num: 2,
        pos: [(7.5*marginUnit)+2*cardW, 3*marginUnit + cardH],
        text: 'this crosses'
    },
    {
        num: 3,
        pos: [(7.5*marginUnit)+2*cardW, 4*marginUnit + 2*cardH],
        text: 'this crowns'
    },
    {
        num: 4,
        pos: [6.5*marginUnit + cardW, 3*marginUnit + cardH],
        text: 'this is what was'
    },
    {
        num: 5,
        pos: [(7.5*marginUnit)+2*cardW, 2*marginUnit],
        text: 'this is what is'
    },
    {
        num: 6,
        pos: [(8.5*marginUnit)+3*cardW, 3*marginUnit + cardH],
        text: 'this is what will be'
    },
    {
        num: 7,
        pos: [(10.5*marginUnit)+4*cardW, 4*marginUnit/2 + 3*cardH],
        text: 'this is inside'
    },
    {
        num: 8,
        pos: [(10.5*marginUnit)+4*cardW, 3*marginUnit/2 + 2*cardH],
        text: 'this is outside'
    },
    {
        num: 9,
        pos: [(10.5*marginUnit)+4*cardW, 2*marginUnit/2 + 1*cardH],
        text: 'this is the unknown'
    },
    {
        num: 10,
        pos: [(10.5*marginUnit)+4*cardW, marginUnit/2],
        text: 'this is the end'
    },
]
var progress = 0;

for(var i =0; i<board.length; i++){
    var card_pos = $('<div class="card-pos" id="card-pos-'+i+'">')
    var card_wrap = $('<div class="card-wrap" id="card-wrap-'+i+'">')
    card_pos.css('left', board[i].pos[0]+'%')
    card_pos.css('top', board[i].pos[1]+'%')
    card_wrap.append('<p>'+i+'</p>')
    card_pos.append(card_wrap)
    $('#board').append(card_pos)
}

function createImgArr(){
    cards.images = []
    for (var i=0; i<cards.design.length; i++){
        // var img = 
        for(var j=0; j<cards.colors.length; j++){
            var img = 'card_'+cards.design[i] + '_'+cards.colors[j]
            var black = img + '_2'
            cards.images.push(img,black)
        }
    }
}

console.log(cards.images)
createImgArr();
shuffleCards(cards.images)

function shuffleCards(imgArr){
    $('.card-wrap').empty();
    $('.card-wrap').removeClass('played');
    for (var i = imgArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = imgArr[i];
        imgArr[i] = imgArr[j];
        imgArr[j] = temp;
    }
    var deck = $('<img src="./assets/img/card_back.png">');
    $('#card-wrap-0').empty()
    $('#card-wrap-0').append(deck)
    // for(var q=0; q<imgArr.length;q++){
    //     // var imgUrl = './assets/img/cards/'+imgArr[q]+'.png'
    //     var img = $('<img src="./assets/img/card_back.png">' )
    //     $('#card-wrap-0').append(img)
    //     // img.css('left', q+'px')
    //     img.data('name',imgArr[q] )
    //     // img.css('top', q/2+'px')
    // }

}

function playCard(){
    $('#notif-text').removeClass('visible')
    if(progress>9){
        createImgArr()
        shuffleCards(cards.images);
        progress = 0;
    }else{
        var img = cards.images[0]
        var imgUrl = './assets/img/cards/'+img+'.png'
        progress++;
        var parent = '#card-wrap-'+progress;
        $(parent).append('<img src="'+imgUrl+'">')
        $(parent).addClass('played')
        $('#notif-text').text(board[progress].text)
        $('#notif-text').addClass('visible')
        cards.images.splice(0,1)
    }
}

$('#card-wrap-0').on('click', function(){
    playCard();
})
function updatePositions(){
    board = [
        {
            num: 0,
            //3 was 4.5 before
            pos: [3*marginUnit,5]
        },
        {
            num: 1,
            pos: [(7.5*marginUnit)+2*cardW, 3*marginUnit + cardH],
            text: 'this covers'
        },
        {
            num: 2,
            pos: [(7.5*marginUnit)+2*cardW, 3*marginUnit + cardH],
            text: 'this crosses'
        },
        {
            num: 3,
            pos: [(7.5*marginUnit)+2*cardW, 4*marginUnit + 2*cardH],
            text: 'this crowns'
        },
        {
            num: 4,
            pos: [6.5*marginUnit + cardW, 3*marginUnit + cardH],
            text: 'this is what was'
        },
        {
            num: 5,
            pos: [(7.5*marginUnit)+2*cardW, 2*marginUnit],
            text: 'this is what is'
        },
        {
            num: 6,
            pos: [(8.5*marginUnit)+3*cardW, 3*marginUnit + cardH],
            text: 'this is what will be'
        },
        {
            num: 7,
            pos: [(10.5*marginUnit)+4*cardW, 4*marginUnit/2 + 3*cardH],
            text: 'this is inside'
        },
        {
            num: 8,
            pos: [(10.5*marginUnit)+4*cardW, 3*marginUnit/2 + 2*cardH],
            text: 'this is outside'
        },
        {
            num: 9,
            pos: [(10.5*marginUnit)+4*cardW, 2*marginUnit/2 + 1*cardH],
            text: 'this is the unknown'
        },
        {
            num: 10,
            pos: [(10.5*marginUnit)+4*cardW, marginUnit/2],
            text: 'this is the end'
        },
    ]
    for(var i =0; i<board.length; i++){
        selector = '#card-pos-'+i;
        $(selector).css('left', board[i].pos[0]+'%')
        $(selector).css('top', board[i].pos[1]+'%')
    }
    // $('#notification').css('left',board[0].pos[0]+'%')
    // $('#notification').css('top',board[0].pos[1]+ 1.5*cardH+ '%')
}
// $('#notification').css('left',board[0].pos[0]+'%')
// $('#notification').css('top',board[0].pos[1]+ 1.5*cardH+ '%')