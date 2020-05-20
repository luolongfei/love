        var audio_music=document.getElementById('audio_music');

        if(typeof(music_json['music_select'])!='undefined' && music_json['music_select']!='null' && music_json['music_select']!=''){
            if(music_json['music_select']=='m_online' && music_json['m_online_url']!='null' && music_json['m_online_url']!=''){ //选择在线列表
                $('#audio_music').attr('src',music_json['m_online_url']);
            }
            if(music_json['music_select']=='m_upload' && music_json['m_upload_url']!='null' && music_json['m_upload_url']!=''){ //选择在线列表并且上传了歌曲
                $('#audio_music').attr('src',music_json['m_upload_url']);
            }
            if(music_json['music_select']=='m_upload' && (music_json['m_upload_url']=='null' || music_json['m_upload_url']=='')){ //选择在线列表但是没有上传歌曲
                console.log('music_select m_upload but m_upload_url is null, set defaulted music');
                var random_music=random_music_as();
                $('#audio_music').attr('src',random_music);
            }
            if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
                audio_music.play(); //触发音乐自动播放
            }else{
                audio_music.pause();
                console.log('audio_list && no start');
            }
        }else{ //全新作品或空作品
            console.log('set random music');
            var random_music=random_music_as();
            $('#audio_music').attr('src',random_music);
            if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
                audio_music.play(); //触发音乐自动播放
            }else{
                audio_music.pause();
                console.log('audio_list && no start');
            }
        }


        function random_music_as(){  //获取随机的模板图片
            // console.log('random_words_as');
            var random_num=Math.floor(Math.random()*(array_as_music.length)); //随机取值
            var random_music=array_as_music[random_num];
            return random_music;
        }

        //控制音乐切换播放暂停
        var img_music=document.getElementById('img_music');
        var timeout_music;
        function music_switch(){ //切换
            clearTimeout(timeout_music);
            if(audio_music.paused){
                console.log('switch music to play');
                audio_music.play();
                img_music.style.webkitAnimation="music_play_rotate 1s linear infinite";
                $(".div_music_tips").html("正播放").show();
                timeout_music=setTimeout(function(){$(".div_music_tips").hide()}, 2500);
            }else{
                console.log('switch music to paused');
                audio_music.pause();
                img_music.style.webkitAnimation="";
                $(".div_music_tips").html("已暂停").show();
                timeout_music=setTimeout(function(){$(".div_music_tips").hide()}, 2500);
            }
        }

        var timeout_record;
        var div_record=document.getElementById('div_record');



        //以下是微信相关的设置
        console.log(signPackage);
        wx.config({
            debug: false,
            appId: signPackage["appid"],
            timestamp: signPackage["timestamp"],
            nonceStr: signPackage["nonceStr"],
            signature: signPackage["signature"],
            jsApiList: [
                'checkJsApi',
                // 'updateAppMessageShareData',
                // 'updateTimelineShareData'
            ]
        });

        wx.ready(function(){
            console.log('wx.ready success to start');
            if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
                audio_music.play(); //触发音乐自动播放
            }else{
                audio_music.pause(); //触发音乐自动播放
                console.log('audio_list && no start');
            }
        });

        wx.error(function(res){
            console.log('wx.error -> '+res);
            if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
                audio_music.play(); //触发音乐自动播放
            }else{
                audio_music.pause(); //触发音乐自动播放
                console.log('audio_list && no start');
            }
        });

        

        


        