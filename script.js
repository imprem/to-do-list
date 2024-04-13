const input_filed = document.getElementById('input-field');
const todo_list = document.getElementById('todo-list');
const todo_button = document.getElementById('todo-button');

todo_button.addEventListener("click", () => {
    const todoText = input_filed.value.trim();
    if(todoText !== ''){
        addTodoText(todoText);
        input_filed.value = "";
    }
})

function addTodoText(text){
    const li = document.createElement('li');
    li.textContent = text;
    li.addEventListener("click", () => {
        li.classList.toggle("completed")
    })
    todo_list.appendChild(li);
}