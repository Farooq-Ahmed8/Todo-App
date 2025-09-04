let userInput = document.getElementById("user-input");
let message = document.getElementById("message");
let ulEl = document.getElementById("List");
let btn = document.getElementById("btn");

let editingLi = null;

function add() {
  if (userInput.value.trim() === "") {
    message.innerHTML = "Input field empty!";
    message.style.color = "red";
    return;
  }

  if (editingLi) {
    editingLi.querySelector(".todo-text").textContent = userInput.value;
    btn.innerHTML = '<i class="fa-solid fa-square-plus"></i> Add';
    btn.onclick = add;
    editingLi = null;
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = userInput.value;

    let actions = document.createElement("div");
    actions.className = "actions";

    let editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit';
    editButton.onclick = () => {
      userInput.value = span.textContent;
      btn.innerHTML = '<i class="fa-solid fa-square-pen"></i> Update';
      btn.onclick = add;
      
      editingLi = li;
    };

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i> Delete';
    deleteButton.onclick = () => li.remove();

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(actions);
    ulEl.appendChild(li);
}

  userInput.value = "";
  message.innerHTML = "";
}