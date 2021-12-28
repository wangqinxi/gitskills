(function () {
    var module = {
        /* setclick */
        setclick: function () {
            // 获取的#pics-1的img
           
             new Slide({
                target: $('#slide-1 .content-1 li'),
                control: $('#slide-1 .pics-1 li'),
                effect: 'fade',
                stay: 4000,
                autoPlay: true,
            });
         
        },
        /* /setclick */

        /* setSlide */
        setSlide: function () {
              new Slide({
                target: $('#slide-2 .col-a li'),
                control: $('#slide-2 .pics-2 li'),
                // 播放前一张，调用prev()
                prevBtn: $('#slide-2 .prev'),
                // 	插放后一张，调用next()
                nextBtn: $('#slide-2 .next'),
                effect: 'fade',
                autoPlay: true,
                stay: 4000,
            });
        },
        /* /setSlide */

        /* Patte */
        Patte: function () {
            window.tab0802 =  new Slide({
                target: $('#slide-3 .pics-2 li'),
                control:  false,
                //  播放前一张，调用prev()
                prevBtn: $('#slide-3  .prev'),
                // 插放后一张，调用next()
                nextBtn: $('#slide-3  .next'),
                effect: 'slide',
                stay: 2000,
                width: 173,
             
               
            });
            window.tab08 = new Slide({
                target: $('#slide-3 .pics-1  li'),
                control:  $('#slide-3 .pics-2 li'),
                effect: 'fade',
                type: 'click',
                onchange: function(){
                    var to = this.curPage && this.curPage - 1; //保持当前选项卡前有元素可点击
                    tab0802.playTo(to);
                }
            });                
          
        },
        /* Patte */

        /* Style */
      
        /* /Style */
        init: function () {
            this.setclick()
            this.setSlide()
            this.Patte()
         
        }
    }
    module.init()
})()