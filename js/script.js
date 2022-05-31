const mario = document.querySelector('.mario');
const cloud = document.querySelector('.cloud');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        cloud.style.animation = 'none';
        cloud.style.bottom = `${cloudPosition}px`;

        mario.src = '../img/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);