const clock = document.querySelector("h2#clock");


// clock.innerText = "뀨뀨깎ㄲ";

function getClock(){
    const date = new Date();

    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}` // 시,분초 출력
    // console.log(); 
}

getClock(); // 처음 load 되자 마자 실행

setInterval(getClock,1000);