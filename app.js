// ToDo App

var list =  document.getElementById("list");

function addTodo(){
    var todoItem = document.getElementById("todo-item");
    
    // create li tag with text node
    var li = document.createElement('li'); 
    var liText = document.createTextNode(todoItem.value);
    li.appendChild(liText);


    // create delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class","delBtn");
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.appendChild(delText);

    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("class","editBtn");
    editBtn.setAttribute("onclick","editItem(this)");

    li.appendChild(delBtn);
    li.appendChild(editBtn);
    

    list.appendChild(li);

    todoItem.value = "";
}


function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = ""
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Enter Edit Value", val);
    e.parentNode.firstChild.nodeValue = editValue;
}
