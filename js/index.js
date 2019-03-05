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


