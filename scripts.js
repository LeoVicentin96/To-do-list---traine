const toDoListItem = []

function adicionar() {
  
  const input = document.getElementById("todo");

  
  const todoList = document.getElementById("todo-list");
  const newItem = document.createElement("li");
  const button = document.createElement("button")

  toDoListItem.push(input.value)

  const index = toDoListItem.length - 1
  button.setAttribute('onclick', 'concluido('+index+')')

  

  newItem.textContent = input.value;
  input.value = '';
 // input.setAttribute ('value', '');

 button.textContent = 'X'


  newItem.appendChild (button);
  todoList.appendChild(newItem);

  console.log(toDoListItem);
}

function concluido (index) {

  console.log('Teste', index);
}