// animation.js
// item1에 마우스를 올리면 img태그 경로가 다른 이미지로 변경
const item1 = document.querySelector('.item');
const item1Img = document.querySelector('.item img');
const sale1 = document.querySelector('.sale');
const sale1Img = document.querySelector('.sale .photo img');

//변수테스트
console.log(item1,item1Img,sale1,sale1Img);

//이벤트
item1.addEventListener('mouseover',item1ImgSrc);
item1.addEventListener('mouseout',item1ImgSrcOut);
sale1.addEventListener('mouseover',sale1ImgSrc);
sale1.addEventListener('mouseout',sale1ImgSrcOut);

//함수
function item1ImgSrc() {
    item1Img.src = 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/475647/item/krgoods_12_475647_3x4.jpg?width=300';
}
function item1ImgSrcOut() {
    item1Img.src = 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/475647/item/krgoods_42_475647_3x4.jpg?width=300';
}
function sale1ImgSrc() {
    sale1Img.src = 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/483281/item/krgoods_14_483281_3x4.jpg?width=300';
}
function sale1ImgSrcOut() {
    sale1Img.src='https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/487394/item/krgoods_60_487394_3x4.jpg?width=300';
}