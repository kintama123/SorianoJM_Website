


const imgEl = document.getElementById('random-image');  

console.log(imgEl);

const srcArray = ['images/iotd/img1.jpg', 'images/iotd/img2.webp', 'images/iotd/img3.jpg', 'images/iotd/img4.png', 'images/iotd/img5.png', 'images/iotd/img6.jpg', 'images/iotd/img7.jpg', 'images/iotd/img8.jpg', 'images/iotd/img9.webp', 'images/iotd/img10.jpg'];


randomImage();
function randomImage() {

    const randomIndex = Math.floor(Math.random()*srcArray.length);
    imgEl.src = srcArray[randomIndex];

    
}
