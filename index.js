let input = document.getElementById("input");
let add = document.getElementById("add");
let ul = document.getElementById("listidk");

add.addEventListener("click", function() {
    let newtask = document.createElement('li');
    if (input.value.trim() !== "") {
        let taskText = document.createElement('span');
        taskText.textContent = input.value;
        newtask.appendChild(taskText);
        
        let doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.className = "done-btn";
        newtask.appendChild(doneBtn);
        
        let remove = document.createElement("button");
        remove.textContent = "Delete";
        remove.className = "delete-btn";
        newtask.appendChild(remove);
        
        ul.append(newtask);
        input.value = "";
        
        doneBtn.addEventListener("click", () => {
            taskText.classList.toggle('completed');
            doneBtn.textContent = taskText.classList.contains('completed') ? "Undo" : "Done";
        });
        
        remove.addEventListener("click", () => {
            ul.removeChild(newtask);
        });
    }
});

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        add.click();
    }
});