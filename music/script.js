function myFunction(x) {
    x.classList.toggle("change");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"NF - The Search", filePath: "1.mp3", coverPath: "1.jpg" },
    {songName:"NF - HOPE", filePath: "2.mp3", coverPath: "2.jpg" },
    {songName:"NF - MOTTO", filePath: "3.mp3", coverPath: "3.jpg" },
    {songName:"NF - When I Grow Up", filePath: "4.mp3", coverPath: "4.jpg" },
    {songName:"NF - Let You Down", filePath: "5.mp3", coverPath: "5.jpg" },
    {songName:"NF - If You Want Love", filePath: "6.mp3", coverPath: "6.jpg" },
    {songName:"Joji - Glimpse of Us", filePath: "7.mp3", coverPath: "7.jpg" },
    {songName:"Joji - Slow Dancing in the Dark", filePath: "8.mp3", coverPath: "8.jpg" },
    {songName:"Joji - Sanctuary", filePath: "9.mp3", coverPath: "9.jpg" },
    {songName:"Joji - Die For You", filePath: "10.mp3", coverPath: "10.jpg" },
    {songName:"Post Malone - Sunflower", filePath: "11.mp3", coverPath: "11.jpg" },
    {songName:"XXXTENTACION - SAD!", filePath: "12.mp3", coverPath: "12.jpg" }
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle Play/Pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause'); 
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=11){
        songIndex = 0;
    }
    else{
        songIndex += 1; 
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1; 
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
}) 