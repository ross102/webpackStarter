import testimg from './testimg.png'

function addImage() {
    const img = document.createElement('img');
    img.alt = 'test img';
    img.width = 300;
    img.src = testimg;

    const body = document.querySelector('body');
    body.appendChild(img);
    
}

export default addImage;
