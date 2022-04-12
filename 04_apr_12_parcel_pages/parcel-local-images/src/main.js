const img = document.querySelector('img');

const pingvinImgUrl = new URL('./img/pingvin.jpg', import.meta.url);
const pingvin2ImgUrl = new URL('./img/pingvin2.jpg', import.meta.url);

img.src = pingvinImgUrl.href;

let isFirstImage = true;

img.addEventListener('click', changeImage);

function changeImage(){
    //Välj img url beroende på isFirstImage
    if(isFirstImage)img.src = pingvin2ImgUrl;
    else img.src = pingvinImgUrl;
    isFirstImage = !isFirstImage; //Ändra till motsatta
}