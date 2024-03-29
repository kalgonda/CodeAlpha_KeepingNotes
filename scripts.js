let listContainer = document.getElementById('list-container')
let inputs = document.getElementById("inp");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter a Task")
    }else{
        let newEle = document.createElement("li");
        newEle.textContent= inputs.value
        listContainer.appendChild(newEle);

        let span = document.createElement('span');
        span.textContent='\u00d7';
        newEle.appendChild(span)
    }
    inputs.value='';
    savedata()
}

listContainer.addEventListener('click', (el)=>{
    if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
        savedata()
    }
})

function savedata(){
    localStorage.setItem("newEles", listContainer.innerHTML)
}

function showdata(){
    listContainer.innerHTML = localStorage.getItem('newEles')
}

showdata()
