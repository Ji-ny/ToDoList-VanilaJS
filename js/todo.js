const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); // 투두폼 안에 input 찾기
const toDoList= document.getElementById("todo-list");


console.log(toDoForm)
console.log(toDoList)

// toDo를 그리는 역할 
function paintTodo(){
    
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value; //입력값 저장
    toDoInput.value="";
    console.log(toDoInput.value);

}

toDoForm.addEventListener("submit", handleToDoSubmit);