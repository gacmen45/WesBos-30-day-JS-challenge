const keys = document.querySelectorAll('.key')

const play = (e)=>{
    //console.log(e);
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
    const key =  document.querySelector(`.key[data-key="${e.keyCode}"`)
    //console.log(audio);
    // console.log(key);
    if(!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
    key.classList.add('playing')
}

function removeTransition (e) {
    if(e.propertyName !== 'transform') return;
    //console.log(e.propertyName);
    //console.log(this);
    this.classList.remove('playing')
}



keys.forEach(key => key.addEventListener('transitionend',removeTransition))
window.addEventListener('keydown',play)