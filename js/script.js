window.addEventListener("load", start);

let listNames = [];
let inputName = null;

function start(){
    inputName = document.querySelector("#inputName");
   
    preventFormSubmit();
    activateInput();    
}

function preventFormSubmit(){

    let form = document.querySelector("#form");
    form.addEventListener("submit", handleFormSubmit);
        
    function handleFormSubmit(event){
        event.preventDefault();
    }
}

function activateInput(){
    inputName.focus();
    inputName.addEventListener("keyup", handleTyping);

    function handleTyping(event){
        if (event.key === "Enter"){
            insertName(event.target.value);
        }
    }

    function insertName(newName){
        listNames.push(newName);
        alert(newName + " inserted successfully");
    }
}
