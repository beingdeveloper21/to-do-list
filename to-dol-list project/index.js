const task=document.getElementById("task");
let items=document.querySelector(".list-items");
function addtask(){
    if(task.value===''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=task.value;
        items.append(li);
        task.value='';
        let cross=document.createElement("cross");
        cross.innerHTML="\u00d7"
        li.appendChild(cross);
    }
    saveData();
}
    items.addEventListener("click",(e)=>{
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle("checked");
            saveData()
        } 
        else if(e.target.tagName === 'CROSS'){
            e.target.parentElement.remove();
            saveData()
        }
    },false)
    function saveData(){
        localStorage.setItem("data",items.innerHTML);
    }
    function showData(){
        items.innerHTML=localStorage.getItem("data");
    }
showData();