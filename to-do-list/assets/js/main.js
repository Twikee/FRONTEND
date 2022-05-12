//Create a close button and append it to each list item
let myNodeList = document.getElementsByTagName('LI');
let i;
for(i = 0; i < myNodeList.length; i++){
    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00D7')
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

//click on a close button to hide the current list item
let close = document.getElementsByClassName('close');

for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = 'none';
    }
}

//add a checked sybol when clicking on a list item

let list = document.querySelector('ul');
list.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
    }
},false)

//Create a new list item when clicking on the add button
function addTask(){
    let li = document.createElement('li');
    let inputValue = document.getElementById('input-text').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert('You must write somenthing');
    }else{
        document.getElementById('task-list').appendChild(li);
    }
    document.getElementById('input-text').value = '';

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
    }
}