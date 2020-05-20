        
        $('.div_loveformat').height($(window).height());
        if($(window).height()>815){ //很长的屏幕才加载，用于遮挡
            $('.img_lf_bg_big').attr('src','./blackboard_big.jpg').show(); //适应屏幕尺寸
        } 


        //以下是擦除公式的js__________________________________
        function init_loveformat(){
            console.log('init_loveformat');            
            $('#img_up_half').eraser({
                size: 130,   //设置橡皮擦大小
                completeRatio: .14, //设置擦除面积比例
                completeFunction: got_answer,   //大于擦除面积比例触发函数
                progressFunction: function(p){ //擦除过程中触发函数
                    // $('#progress').html(Math.round(p*100) + '%');
                    console.log('the pic was erased '+Math.round(p*100)+'%');
                }
            });

            $('#span_tips_btn').click(function(){
                $("#span_tips").toggle();
            });
        }


        
        function got_answer(){
            console.log('got_answer'); 
            var str_span_tips='O(∩_∩)O 黑板上是我给你的答案。<br>我喜欢你！水猪儿！<br><br>接下来还有个小惊喜：<br>点这里继续';
            if(typeof(start_content['loveformat_text'])!='undefined' && start_content['loveformat_text']!=''){
                str_span_tips=start_content['loveformat_text'];
            }
            // $('#img_up_half').eraser('reset');
            $('#img_up_half').hide();
            $('#span_tips_btn').hide();
            $('#span_tips').html(str_span_tips).show();
            console.log('i am trigger, i am going to play next');
            $('#span_tips').css("z-index", "888");
            $("#span_tips").click(function(){
                init_theme(); 
                $('.div_loveformat').remove();
            }); 
        }

