console.log("welc");


const video=document.querySelector('.player')
const toggle=document.querySelector('.toggle')
const ranges=document.querySelectorAll('.slider')
const progress=document.querySelector('.progress')
const progressFilled=document.querySelector('.progressFilled')


function playVideo(){

      if(video.paused)
        {
            video.play()
        }else{
            video.pause()
        }
       
}

function updateButton(){
    const icon= this.paused ? '►' : '❚ ❚'
    toggle.textContent=icon

}


function handleRange(){
    video[this.name]=this.value
    
}

function handleProgress(){
const percent= (video.currentTime/video.duration)*100
progressFilled.style.flexBasis=`${percent}%`
}

function clickBetweenProgress(e){
const newTime= (e.offsetX/progress.offsetWidth)*video.duration
video.currentTime=newTime

}

video.addEventListener('click',playVideo)

video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton)

toggle.addEventListener('click',playVideo)

ranges.forEach(range=> range.addEventListener('change',handleRange))

video.addEventListener('timeupdate',handleProgress)

progress.addEventListener('click',clickBetweenProgress)