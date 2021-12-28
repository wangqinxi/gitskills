// 获取的#slide15-thumb的img
var tabThumbs = $('#slide15-thumb img');
        
var tab15 = new Slide({
    target: $('#slide15 li'),
    control:false,
    effect: 'fade',
    autoPlay: true,
    onchange: function() {
        var c = this.curPage;
        // 遍历每一个小图片
        // index - 选择器的 index 位置
        //element - 当前的元素（也可使用 "this" 选择器）
        tabThumbs.each(function(inx,ele){
            if( inx == c ){
                $(ele).addClass( 'cur' );
            }else{
                $(ele).removeClass( 'cur' );
            }
        });
    }
}); 
tabThumbs.each(function(inx,ele){
    // bind绑定
    $(this).bind({
       
        'click': function(){
            tab15.stop();
            tab15.playTo( inx );
        },
        
       
    });
});