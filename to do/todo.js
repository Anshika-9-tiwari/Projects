const item = document.querySelector("#item");
const todobox = document.querySelector("#todo-box");

item.addEventListener(
    "keyup",
    function(event){
    if(event.key == "Enter"){
        addToDo(this.value)
        this.value = ""
    }
    }
)

const addToDo = (item) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item}`;
    
    listItem.addEventListener(
        "click", function(){
            this.classList.toggle("done");
        }
    )
    todobox.appendChild(listItem);
    
}

