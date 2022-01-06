const container = document.getElementById('container')
const text = document.getElementById('text')
const walk = 100;

function shadow(e){
    const width = container.offsetWidth
    const height = container.offsetHeight

    let x = e.offsetX;
    let y = e.offsetY;
    

    if(this !== e.target){
        x = x + e.target.offsetLeft; 
        y = y + e.target.offsetTop;
    }
    
    
    const xWalk = Math.round(x/width * walk) - (walk/2)
    const yWalk = Math.round(y/width * walk) - (walk/2) 


    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0,0,0,0.493)`
}


container.addEventListener('mousemove',shadow)