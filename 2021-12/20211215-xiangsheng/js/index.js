(function () {
    var module = {
        /* setclick */
        setclick: function () {
            // 获取的#pics-1的img
            var tabThumbs = $('#pics-1 img');
            var tab15 = new Slide({
                target: $('#slide15 li'),
                control: false,
                effect: 'fade',
                autoPlay: true,
                onchange: function () {
                    var c = this.curPage;
                    // 遍历每一个小图片
                    // index - 选择器的 index 位置
                    //element - 当前的元素（也可使用 "this" 选择器）
                    tabThumbs.each(function (inx, ele) {
                        if (inx == c) {
                            $(ele).addClass('cur');
                        } else {
                            $(ele).removeClass('cur');
                        }
                    });
                }
            });
            tabThumbs.each(function (inx, ele) {
                // bind绑定
                $(this).bind({
                    'click': function () {
                        tab15.stop();
                        tab15.playTo(inx);
                    },
                });
            });
        },
        /* /setclick */

        /* setSlide */
        setSlide: function () {
            var Plays = $('.pics-2 img');
            var Play = new Slide({
                target: $('.content_pics li'),
                control: false,
                // 播放前一张，调用prev()
                prevBtn: $('.navigate .prev'),
                // 	插放后一张，调用next()
                nextBtn: $('.navigate .next'),
                effect: 'fade',
                stay: 1000,
                autoPlay: true,
                onchange: function () {
                    var d = this.curPage;
                    Plays.each(function (inx, ele) {
                        if (inx == d) {
                            $(ele).addClass('active');
                        } else {
                            $(ele).removeClass('active');
                        }
                    });
                }
            });
            Plays.each(function (inx, ele) {
                $(this).bind({
                    'mouseover': function () {
                        Play.stop();
                        Play.playTo(inx);
                    },
                    'mouseout': function () {
                        Play.play();
                    }
                });

            });
        },
        /* /setSlide */

        /* Patte */
        Patte: function () {
            var Patternps = $('#pics-3 img');
            var Patternp = new Slide({
                target: $('.box_content li'),
                control: false,
                //  播放前一张，调用prev()
                prevBtn: $('#Btn .navigate_left'),
                // 插放后一张，调用next()
                nextBtn: $('#Btn .navigate_right'),
                effect: 'fade',
                autoPlay: true,
                onchange: function () {
                    var b = this.curPage;
                    Patternps.each(function (inx, ele) {
                        if (inx == b) {
                            $(ele).addClass('actives');
                        } else {
                            $(ele).removeClass('actives');
                        }
                    });
                }
            });
            Patternps.each(function (inx, ele) {
                $(this).bind({
                    'mouseover': function () {
                        Patternp.stop();
                        Patternp.playTo(inx);
                    },
                    'mouseout': function () {
                        Patternp.play();
                    }
                });
            });
        },
        /* Patte */

        /* Style */
        Style: function () {
            var sty = $(".txts-2 li ,.txts-1 li");
            sty.each(function (inx, ele) {
                $(this).bind({
                    'mouseover': function () {
                        $(this).css("color", "yellow").children().css("color", "yellow");
                    },

                    'mouseout': function () {
                        $(this).css("color", "rgb(146, 145, 139)").children().css("color", "rgb(146, 145, 139)");
                    }
                });

            });
        },
        /* /Style */
        init: function () {
            this.setclick()
            this.setSlide()
            this.Patte()
            this.Style()
        }
    }
    module.init()
})()