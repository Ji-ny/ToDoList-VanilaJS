// * 랜덤 배경 화면 

//이미지 모음
const images=[ "0.jpg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 랜덤한 이미지 string 한개 가져오기


const bgImage = document.createElement("img"); // img 태그 생성


bgImage.src= `img/${chosenImage}`; // 경로 설정

// console.log(bgImage);

document.body.appendChild(bgImage);