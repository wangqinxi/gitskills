var Plays = $('.small_pics img');    
var Play = new Slide({
    target: $('.content_pics li'),   
    control:false,
    // 播放前一张，调用prev()
    prevBtn:$('.navigate .prev'),
    // 	插放后一张，调用next()
    nextBtn:$('.navigate .next'),
    effect: 'fade',
    autoPlay: true,
    onchange: function() {
        var d = this.curPage;
        Plays.each(function(inx,ele){
            if( inx == d ){
                $(ele).addClass( 'active' );
            }else{
                $(ele).removeClass( 'active' );
            }
        });
    }
}); 

Plays.each(function(inx,ele){
   
    $(this).bind({
        'mouseover': function(){
            Play.stop();
            Play.playTo( inx );
        },
        'mouseout': function(){
            Play.play();
        }   
    });
   
});

