// const loginForm = document.getElementById('login-form'); // 로그인 폼
// ! 변수 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); // 로그인 입력창
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// ! function
//* login 제출 동작.
function onLoginSubmit(event){
    event.preventDefault(); // 기본동작 실행 x
    const username = loginInput.value; // 입력된 값 저장
    loginForm.classList.add(HIDDEN_CLASSNAME); // class 추가 -> form 숨기기
    localStorage.setItem(USERNAME_KEY, username);     // localStorage에 값을 저장하자.
    paintGreetings(username);     // h1에 입력 받은 값을 넣어주고, 히든 풀기
}


function paintGreetings(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // 히든 정보 삭제
}

// ! 실행 동작 

// *스크립트가 처음 load 될때 로그인폼 이벤트 추가.
// loginForm.addEventListener("submit", onLoginSubmit); // submit(제출) 이 발생하면, 해당 핸들러 실행
const savedUsername = localStorage.getItem(USERNAME_KEY); // localStorage로부터 값 저장 /  없는 경우 null

if (savedUsername === null) {// username이 저장되어 있지 않다면, form을 보여준다.
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // * 사용자가 아직 로그인하지 않았때 submit 추가.
    loginForm.addEventListener("submit", onLoginSubmit);
} else { // username이 저장되 있다면, h1을 보여준다.
    paintGreetings(savedUsername);
    

}