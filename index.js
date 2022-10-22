const textInput = document.getElementById('textInput')

// "keyup" event runs after you press on the keyboard and lift your finger off
textInput.addEventListener('keyup', (event) => {
 
    // event.target.value contains the text that was written in the text input
    // open the console and start typing to see what it logs
   spans= document.querySelectorAll("span");
   for(i=0;i<spans.length;i++)
   span[i].textContent =event.target.value
// spans[0].textContent= event.target.value
// spans[1].textContent=spans[0].textContent
// spans[2].textContent=spans[1].textContent


})