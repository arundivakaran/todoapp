//getting all required elements

let inputBox = document.querySelector(".inputField input")
let addBtn = document.querySelector(".inputField button")
let todoList = document.querySelector(".todo-List")
let deleteAll = document.querySelector(".footer button")

let numBer = document.querySelector(".footer span .number")


inputBox.onkeydown = ()=>{
    let userData = inputBox.value //getting user entered value
    if(userData.trim()!=0){ //if user values are not only spaces
        addBtn.classList.add("active") //active the button white entering value
    }else{
        addBtn.classList.remove("active") //inactive the add button
    }

}


//if user click the add button
addBtn.onclick = ()=>{
    if(inputBox.value == 0)
    {
        let a = inputBox.placeholder = "Please enter a value";
        inputBox.focus()

    }else {
    let userData = inputBox.value; //getting user entered value.
    let getLocalStorage = localStorage.getItem("newTodo"); //getting user entered value 
    if(getLocalStorage == null){ //if local storage is null
        listArray = [] //creating empty array
    }else {
        listArray = JSON.parse(getLocalStorage) //transforming json string to js object.
    }
    listArray.push(inputBox.value);
    localStorage.setItem("newTodo",JSON.stringify(listArray)) //transforming json object to string.
    inputBox.value = null;
    inputBox.focus() // cursor come automatically inside the input box
    showTasks() //calling showtask function
}
}

//function to add items
function showTasks(){
    let getLocalStorage = localStorage.getItem("newTodo"); //getting user entered value 

    if(getLocalStorage == null){ //if local storage is null
        listArray = [] //creating empty array
    }else {
        listArray = JSON.parse(getLocalStorage) //transforming json string to js object.
    }
let newLitag = '';
listArray.forEach(function (element, index) {
    newLitag += `<li> ${element} <span onclick="deleteItem()"><i class="fa-solid fa-trash-can"></i></span></li>`;
    // 
});
    todoList.innerHTML = newLitag; //new li tag to the todo list.
    numBer.innerHTML = listArray.length;
    
}

//delete single item
function deleteItem(index){
    let getLocalStorage = localStorage.getItem("newTodo"); //getting user entered value 
    listArray = JSON.parse(getLocalStorage)
    listArray.splice(index,1)
    localStorage.setItem("newTodo",JSON.stringify(listArray));
    showTasks();
    listArray.forEach(function (element, index) {
        newLitag += `<li> ${element} <span onclick="deleteItem()"><i class="fa-solid fa-trash-can"></i></span></li>`;
        
    });
    numBer.innerHTML = listArray.length;
}


showTasks();


//function to delete clearall
deleteAll.onclick = ()=>{
listArray = [] //exmpty an array
localStorage.setItem("newTodo",JSON.stringify(listArray)); //transforming objects into json strings
showTasks();
numBer.innerText = listArray.length;;

}