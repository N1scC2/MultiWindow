var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);

let num = 0;
let video_id;
let width = 960;
let height = 540;
function set(){
    //URL入力
    if($('#text').val() != ""){
        num++;
        var set = $('#text').val();
        //URLの判別
        if(set.indexOf('=') >= 0){
            video_id = set.slice(set.indexOf('=') + 1);
        }else{
            video_id = set.slice(set.indexOf('://') + 12);
        }
        $('#text').val("");//入力されたURLをクリア

        //numの個数に合わせて画面の大きさを変更する？
        /*
        switch(num){
            case 1:
                width = 948;
                height = 534;
                break;
            case 5:
                width = 480;
                height = 270;
        }
        */

        //画面をセット
        var set_tile = 'set' + num;
        //$('#set').append("<div id=" + set_tile + " style='width:" + width +"px;height:" + height + "px'></div>");
        $('#set').append("<div id=" + set_tile + " style='width:"+ (width-11) +"px;height:"+ height+"px;'></div>");
        
        ytPlayer = new YT.Player(
            set_tile,
            {
                width: 1920,
                height: 1080,
                videoId: video_id
            }
        );
    }   
}
function incset(){
    console.log(num);
    if(num >= 10){
        for(let i = 1; i < num + 1;i++){
            console.log('8y');
            $('#set' + i).width(463).height(270);
        }
        width = 480;
        height = 270;
    }else if(num >= 5){
        console.log('5y');
        for(let i = 1; i < num + 1;i++){
            $('#set' + i).width(623).height(360);
        }
        width = 640;
        height = 360;
    }
}