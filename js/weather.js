


const API_KEY = config.API_KEY;



// 성공 시 function
function onGeoOk(position){ // 첫 인자로 관련 object를 를 받는다

    const lat = position.coords.latitude; // 위도 
    const log = position.coords.longitude; // 경도
    // console.log("you live it\n"," 위도",lat, "경도", log);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    // console.log(url);

    //url 응답이후에,,, response 를 JSON으로 바꿔준 후에,,, data에 접근..
    fetch(url).then(response => response.json())
    .then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText = data.name; // Deajeon (위치 이름)
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; // Rain (날씨 이름)

    });
}

// 실패 시 function
function onGeoError() {
    alert("Cant'find you. No wearther for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 위치찾기