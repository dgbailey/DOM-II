// scroll
window.onscroll = function() {myFunction()};
      
function myFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    const images = document.querySelectorAll(".img-content");
    images.forEach(currentValue => currentValue.id = "slideUp");
}
if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    const images = document.querySelectorAll(".destination");
    images.forEach(currentValue => currentValue.id = "slideUp");
}
}

//mouseover
const travelBtn = document.querySelectorAll('.btn');


function popUp(domItem){
    domItem.forEach(currentValue => currentValue.addEventListener('mouseover',function(){
        const poppy = document.querySelector('.chat-window');
        poppy.id = "chat";
    }));

    // domItem.forEach(currentValue => currentValue.addEventListener('mouseout',function(){
    //     const nopoppy = document.querySelector('.chat-window');
    //     nopoppy.id = "";
    // }));
}


//click
popUp(travelBtn);

const chatClose = document.querySelector('.close');
chatClose.addEventListener('click',function(){
    const nopoppy = document.querySelector('.chat-window');
    nopoppy.id = "";

})

//drag
function dragstart_handler(ev){
    ev.dataTransfer.setData('text/html', ev.target.id)
}

function dragover_handler(ev) {
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move"
   }
function drop_handler(ev) {
ev.preventDefault();
// Get the id of the target and add the moved element to the target's DOM
const data = ev.dataTransfer.getData("text/html");
console.log(data.type);
ev.target.appendChild(document.getElementById(document.createElement(data)));
}


//select

function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `Q: ${selection}`;
  }

const destination = document.querySelectorAll('input');
destination.forEach(currentValue => currentValue.addEventListener('select', logSelection));


//before input

const input = document.querySelector('input');

input.addEventListener('beforeinput', logKey);

function logKey(e) {
    let para = document.getElementById('nottyping');
    
    if (document.querySelector('input').value.length > 0){
        para.id = 'typing';
    }
    else{
        typing.id= 'nottyping';
    }

   
}

//doubleclick scale
const main = document.querySelector('#main');
main.addEventListener('dblclick',function(e){
    console.log('you clicked and it propped')
})

const next = document.querySelector('#prop');
next.addEventListener('dblclick',function(e){
    console.log('you clicked and it propped');
    e.stopPropagation();
})

const navItemHome = document.querySelector('#prop');
navItemHome.addEventListener('click',function(e){
    console.log('Home Button was clicked');
    e.preventDefault();
    
});

