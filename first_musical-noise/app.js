console.log('hi there man')

// CASE 1: PLAYING SOUND BY CLICKING KBD KEYS
window.addEventListener('keydown',(e)=>{
    
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key= document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
     audio.play();
     key.classList.add('playing');
    // console.log(audio);
    
});

// CASE 2: PLAYING SOUND BY CLICKING TO SCREEN 

const x = document.querySelectorAll(".key")
//console.log(x[0].innerText.charCodeAt(0))
for(let i=0 ;i<x.length;i++){
x[i].addEventListener('click',()=>{   
  const audio= document.querySelector(`audio[data-key="${x[i].innerText.charCodeAt(0)}"]`);
  const key= document.querySelector(`.key[data-key="${x[i].innerText.charCodeAt(0)}"]`);
  if(!audio) return;
    audio.play();  
    key.classList.add('playing');
  //console.log(audio)
});}



function removeTran(e){
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
    keys.forEach(k => k.addEventListener('transitionend',removeTran))
    

//document.write("hello world")


