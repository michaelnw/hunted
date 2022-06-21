const witthen = document.querySelector('.witthen');
const wells = document.querySelector('.wells');
const background = document.querySelector('.background');

const jump = () => {
    witthen.classList.add('jump');
   
   setTimeout(() => {
    witthen.classList.remove('jump');
   }, 500);
    
}

const loop = setInterval(() => {
    
    const wellsPosition = wells.offsetLeft;
    const witthenPosition = +window.getComputedStyle(witthen).bottom.replace('px','');


    if (wellsPosition <=110 && wellsPosition >0 && witthenPosition <=85)

    {
    wells.style.animation = 'none';
    wells.style.left = '${wellsPosition}px';

    witthen.style.animation = 'none';
    witthen.style.bottom = '${witthenPosition}px';

    witthen.src = './images/hunted.png';
    witthen.style.width = '110px';

    background.src = './images/background-hunted.png';

    clearInterval(loop);
    }    
    
}, 10);

document.addEventListener('keydown', jump);