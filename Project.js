const box = document.querySelector('.box');
const video = document.querySelector('.vid');
let width = video.clientWidth;
let height = video.clientHeight;

const c = document.querySelector('canvas')
c.setAttribute('height', height);
const ctx = c.getContext('2d');
video.addEventListener('play',drawVid);

function drawVid(){
    ctx.drawImage(video,0,0,width,height);
    //remove green background

    let frame = ctx.getImageData(0,0,width,height);
    for(let i=0; i<frame.data.length; i+=4){
        let r = frame.data[i]; //red
        let g = frame.data[i + 1]; //green
        let b = frame.data[i + 2]; //blue
        if(r>10 & r<100 & g>100 & g<250 & b<80){
            frame.data[i + 3] = 0 //alpha

        }
    }
    ctx.putImageData(frame,0,0)

    requestAnimationFrame(drawVid);
}
