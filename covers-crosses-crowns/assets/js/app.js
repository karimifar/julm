var w = window.innerWidth;
var h = window.innerHeight;
window.onresize = function(event) {
    w = window.innerWidth;
    h = window.innerHeight;
    cardH = cardW*w/h*1.4;
    updatePositions();
    // resetSizes();
};

$('#tools-handle').on('click',function(){
    $('#toolbar').toggleClass('closed')
})
var cardW = 8;
var cardH = cardW*w/h*1.4;
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
        pos: [(7.5*marginUnit)+2*cardW, 3*marginUnit + cardH]
    },
    {
        num: 2,
        pos: [(7.5*marginUnit)+2*cardW, 3*marginUnit + cardH]
    },
    {
        num: 3,
        pos: [(7.5*marginUnit)+2*cardW, 4*marginUnit + 2*cardH]
    },
    {
        num: 4,
        pos: [6.5*marginUnit + cardW, 3*marginUnit + cardH]
    },
    {
        num: 5,
        pos: [(7.5*marginUnit)+2*cardW, 2*marginUnit]
    },
    {
        num: 6,
        pos: [(8.5*marginUnit)+3*cardW, 3*marginUnit + cardH]
    },
    {
        num: 7,
        pos: [(10.5*marginUnit)+4*cardW, 4*marginUnit/2 + 3*cardH]
    },
    {
        num: 8,
        pos: [(10.5*marginUnit)+4*cardW, 3*marginUnit/2 + 2*cardH]
    },
    {
        num: 9,
        pos: [(10.5*marginUnit)+4*cardW, 2*marginUnit/2 + 1*cardH]
    },
    {
        num: 10,
        pos: [(10.5*marginUnit)+4*cardW, marginUnit/2]
    },
]


for(var i =0; i<board.length; i++){
    var card_pos = $('<div class="card-pos" id="card-pos-'+i+'">')
    var card_wrap = $('<div class="card-wrap" id="card-wrap-'+i+'">')
    card_pos.css('left', board[i].pos[0]+'%')
    card_pos.css('top', board[i].pos[1]+'%')
    card_wrap.append('<p>'+i+'</p>')
    card_pos.append(card_wrap)
    $('#board').append(card_pos)
}


for (var i=0; i<cards.design.length; i++){
    // var img = 
    for(var j=0; j<cards.colors.length; j++){
        var img = 'card_'+cards.design[i] + '_'+cards.colors[j]
        cards.images.push(img)
    }
}
console.log(cards.images)
shuffleCards(cards.images)

function shuffleCards(imgArr){
    for (var i = imgArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = imgArr[i];
        imgArr[i] = imgArr[j];
        imgArr[j] = temp;
    }
    for(var q=0; q<imgArr.length;q++){
        var imgUrl = './assets/img/cards/'+imgArr[q]+'.png'
        var img = $('<img src="'+imgUrl+'">' )
        $('#card-wrap-0').append(img)
        img.css('left', q/2+'px')
        // img.css('top', q/2+'px')
    }

}

function updatePositions(){
    board = [
        {
            num: 0,
            //3 was 4.5 before
            pos: [3*marginUnit,5]
        },
        {
            num: 1,
            pos: [(7.5*marginUnit)+2*cardW, 3*marginUnit + cardH]
        },
        {
            num: 2,
            pos: [(7.5*marginUnit)+2*cardW, 3*marginUnit + cardH]
        },
        {
            num: 3,
            pos: [(7.5*marginUnit)+2*cardW, 4*marginUnit + 2*cardH]
        },
        {
            num: 4,
            pos: [6.5*marginUnit + cardW, 3*marginUnit + cardH]
        },
        {
            num: 5,
            pos: [(7.5*marginUnit)+2*cardW, 2*marginUnit]
        },
        {
            num: 6,
            pos: [(8.5*marginUnit)+3*cardW, 3*marginUnit + cardH]
        },
        {
            num: 7,
            pos: [(10.5*marginUnit)+4*cardW, 4*marginUnit/2 + 3*cardH]
        },
        {
            num: 8,
            pos: [(10.5*marginUnit)+4*cardW, 3*marginUnit/2 + 2*cardH]
        },
        {
            num: 9,
            pos: [(10.5*marginUnit)+4*cardW, 2*marginUnit/2 + 1*cardH]
        },
        {
            num: 10,
            pos: [(10.5*marginUnit)+4*cardW, marginUnit/2]
        },
    ]
    for(var i =0; i<board.length; i++){
        console.log(board[i].pos[1])
        selector = '#card-pos-'+i;
        $(selector).css('left', board[i].pos[0]+'%')
        $(selector).css('top', board[i].pos[1]+'%')
    }
}