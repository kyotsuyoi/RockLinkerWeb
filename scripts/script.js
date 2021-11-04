player = document.getElementById('player');
button_play = document.getElementById('button_play');
vol = document.getElementById('volum_label');
bar = document.getElementById("myBar");
volum_progress = document.getElementById("volum_progress");
label_current_time = document.getElementById("label_current_time");
label_duration = document.getElementById("label_duration");
title = document.getElementById("title");

var vol_counter = 1;
// vol_counter.toFixed(1);

function play(){
    if(!player.paused){
        player.pause();
        button_play.src="src/ic_play_arrow_purple.webp"
        // button_play.innerHTML=">";  
    }else{
        player.play();
        // button_play.innerHTML="||";  
        button_play.src="src/ic_pause_purple.webp"
    }
}

function maxvol(){
    if(player.volume < 1) vol_counter += 0.05;
    player.volume = vol_counter.toFixed(2);
    volum_label.innerHTML=parseInt(player.volume*100) + "%";  
      
    volum_progress.style.width = parseInt(player.volume*100)+ '%';
}

function minvol(){
    if(player.volume > 0) vol_counter -= 0.05;    
    player.volume = vol_counter.toFixed(2);
    volum_label.innerHTML=parseInt(player.volume*100) + "%"; 

    volum_progress.style.width = parseInt(player.volume*100)+ '%';
}

function mute(){
    if(player.muted){
        player.muted = false;
    }else{
        player.muted = true;
    }
}

function prev(){
    player.currentTime = 0;
}

// function sw_source(){    
//     console.log(player.src);
//     player.src="http://34.95.182.240/RockLinkerServer/songs/Fair%20-%20Unglued.mp3";
//     player.mediaGroup="http://34.95.182.240/RockLinkerServer/songs/Fair%20-%20Unglued.mp3; http://34.95.182.240/RockLinkerServer/songs/Cold%20California%20-%20Hurricane.mp3";
//     console.log(player.src);
// }

function start() {  
    try{
        // if(player.currentSrc = "") return;
        if(!player.paused){
            label_current_time.innerHTML = new Date(player.currentTime * 1000).toISOString().substr(14, 5);     
            label_duration.innerHTML = new Date(player.duration * 1000).toISOString().substr(14, 5);    
            bar.style.width = parseInt(player.currentTime*100 / player.duration)+ '%';
        }
    }catch (e){
        console.log(e);
    }      
    
    setTimeout(start, 1000); 
}
start();