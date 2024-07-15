const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); // 투두폼 안에 input 찾기
const toDoList= document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; // 투두리스트 내용을 저장할 array

// * toDos array의 내용을 localStorage에 넣는다.
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


//* toDo를 삭제하는 역할
function deleteTodo(event){
    // console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement; // 우리가 삭제하고자 하는 클릭된 li
    // console.log(li.id); // 
    li.remove(); // HTML element 삭제
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // 삭제하는 li.id와 다른 걸 남기겠다.
    saveToDos();    //to-dos array localStorage 업데이트하기
}


/** toDo를 그리는 역할
 * @param newTodo : 투두 텍스트
 */
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; // 생성한 li 태그에도 id를 넣어준다.
    const span = document.createElement("span");
    span.innerText = newTodo.text; // span의 텍스트를 form에게서 받은 netTodo로 설정
    const button = document.createElement("button"); // 삭제 버튼
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo) // 버튼 이벤트리스너
    
    li.appendChild(span); //li 안에 span 요소 넣은것 추가
    li.appendChild(button); // li 안에 button 요소 추가

    toDoList.appendChild(li); // to Dolilst에 append를 추가해주자
    
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value; //입력값 저장
    toDoInput.value="";
    
    const newTodoObj = { //to-do object ()
        text: newTodo,
        id  : Date.now(),
    };
    // array에 내용 추가
    toDos.push(newTodoObj); // to-do를 저장하는 로직 
    paintTodo(newTodoObj);
    saveToDos(); //to do들 array를 localStorage에 넣는다.

}

toDoForm.addEventListener("submit", handleToDoSubmit);



// * todos localStorage에서 array 값들을 저장할 변수
const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(saveToDos); // "['a', 'b', 'c']"
if (savedToDos !== null){ //localStorage가 비어지지 않았다면,
    const parsedToDos = JSON.parse(savedToDos); // 저장된 todo값을 array로 변환
    console.log(parsedToDos); // ['a', 'b', 'c']
    toDos = parsedToDos; // toD os에 parsedToDos를 넣어서 toDo들을 복원
    //arasedToDos가 가지고 있는 각각의 item에 대해 해당 function을 실행해준다.
    parsedToDos.forEach(paintTodo); // paintTodo(a) .. paintTodo(d) 이런식으로 됨
}


