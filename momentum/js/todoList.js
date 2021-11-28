const ulOutput = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
const todoWrapper = document.querySelector('.todo-wrapper');

function todoList() {

	let item = todoInput.value;
	let text = document.createTextNode(item);
	let newItem = document.createElement('li');
	newItem.appendChild(text);
	ulOutput.appendChild(newItem);
  todoInput.value = '';
};

function clearList() {

  ulOutput.innerHTML = '';

};