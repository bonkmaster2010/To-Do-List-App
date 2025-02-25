

let input = document.getElementById("input");

let add = document.getElementById("add");
let ul = document.getElementById("listidk");


add.addEventListener("click", function(){

    let newtask = document.createElement('li');
   if(input.value !== ""){
    newtask.textContent = input.value;
    ul.append(newtask)       
    
    let remove = document.createElement("button");
    remove.textContent = "Delete"
    newtask.appendChild(remove)

    remove.addEventListener("click", () => {
      ul.removeChild(newtask)
    })
}


    })
    

 




   




