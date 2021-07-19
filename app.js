const Info = [
    {
        name : "kabira",
        artist : "jubin",
        src : "./songs/Kabira - Jubin Nautiyal 128 Kbps.mp3"
    },
    {
        name :"machayenge",
        artist : "emiway",
        src : "./songs/Machayenge.mp3"
    },
    {
        name : "seeti",
        artist : "salman",
        src : "./songs/seeti.mp3"
    },
    {
        name : "shanti",
        artist : "gaba",
        src : "./songs/shanti.mp3"
    }
];
const btn = document.querySelector(".pause");
const song = document.querySelector(".song");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let songIndex = 1;
song.src=Info[songIndex].src;
let ispause = true;
const playsong = () =>{
    ispause=false;
    song.play();
}
const pausesong=() =>{
    ispause=true;
    song.pause();
}

btn.addEventListener('click' , function(){
    ispause ? playsong() : pausesong();
    
});
next.addEventListener('click' , ()=>{
    songIndex = (songIndex+1)%Info.length;
    song.src=Info[songIndex].src;
    playsong();
});
prev.addEventListener('click' , ()=>{
    songIndex = (songIndex-1)%Info.length;
    song.src=Info[songIndex].src;
    playsong();
})
