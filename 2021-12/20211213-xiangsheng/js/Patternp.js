var Patternps = $('#small_box img');      
var Patternp = new Slide({
    target: $('.box_content li'),
    control:false,
    //  播放前一张，调用prev()
     prevBtn:$('#Btn .navigate_left'),
    // 插放后一张，调用next()
     nextBtn:$('#Btn .navigate_right'),
    effect: 'fade',
    autoPlay: true,
    onchange: function() {
        var b = this.curPage;
        Patternps.each(function(inx,ele){
            if( inx ==b ){
                $(ele).addClass( 'actives' );
            }else{
                $(ele).removeClass( 'actives' );
            }
        });
    }
}); 
Patternps.each(function(inx,ele){
    $(this).bind({
        'mouseover': function(){
            Patternp.stop();
            Patternp.playTo( inx );
        },
        'mouseout': function(){
            Patternp.play();
        }
    });
});