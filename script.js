const inputBox=document.getElementByID("input-box");
const listcontainer=document.getElementByID("list-container");

function addTask(){
    if(inputBox.value==='')
    {
        alert("You must be write something. ");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
    }
}