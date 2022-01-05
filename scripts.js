function adicionar() {
  
  const input = document.getElementById("todo");

  console.log(input.value);
  
  const todoList = document.getElementById("todo-list");
  const newItem = document.createElement("li");
  newItem.textContent = 'Item 1';

  
  todoList.appendChild(newItem);
}