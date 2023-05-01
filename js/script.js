
var lastToDoIndex = 0;
var todolist = document.getElementById("list");

function addTodo() {
    var name = prompt("Todo List Name");
    lastToDoIndex = lastToDoIndex + 1;
    todolist.innerHTML += `
    <div class="item" id="item${lastToDoIndex}">
        <div class="name" id="name${lastToDoIndex}" onkeyup="doneEditing(event, ${lastToDoIndex})">${name}</div>
        <div class="edit">
            <button class="edit-btn" onclick="editToDo(${lastToDoIndex})"><i class="bi bi-pencil"></i></button>
        </div>
        <div class="delete">
            <button class="del-btn" onclick="deleteToDo(${lastToDoIndex})"><i class="bi bi-trash"></i></button>
        </div>
    </div>
    `;
}

function doneEditing(event, index) {
    if (event.keyCode == 13) {
        // when enter key is pressed close editing the todo list
        document.getElementById(`name${index}`).setAttribute('contenteditable', 'false');
    }
}

function editToDo(index) {
    document.getElementById(`name${index}`).setAttribute('contenteditable', 'true');
}

function deleteToDo(index) {
    document.getElementById(`item${index}`).remove();
}