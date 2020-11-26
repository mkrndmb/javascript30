



const sechand = document.querySelector('.sec-hand')
const minhand = document.querySelector('.min-hand')
const hourhand = document.querySelector('.hour-hand')

function setDate(){

    const time= new Date()
    
    const sec= time.getSeconds()
    const secindegree = ((sec/60)*360)+90
    sechand.style.transform =`rotate(${secindegree}deg)`
    
    

    const min= time.getMinutes()
    const minindegree = ((min/60)*360)+90
    minhand.style.transform =`rotate(${minindegree}deg)`

    const hour= time.getHours()
    const hourindegrees = ((hour/12)*360)+90
    hourhand.style.transform =`rotate(${hourindegrees}deg)`
    
}



setInterval(setDate,1000)