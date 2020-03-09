// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//    response.json().then((data)=>{ console.log(data)  }); // In this case we use then in order to work with parsed JSON;
// })
// think of this as request function  first arg is a string,second a callback
// we're getting the data from that link then  at a later point in time calling the callback


console.log("Hello");



// Getting the input from the form;

const weatherApp = document.querySelector('form');
const search = document.querySelector('input');
let messageOne = document.querySelector('#message-1');
let messageTwo = document.querySelector('#message-2');




weatherApp.addEventListener('submit',(message)=>{
message.preventDefault(); // Preventing refreshing
let location = search.value;



// Fetching data from this url
messageTwo.textContent ='';
messageTwo.textContent = 'Loading...';
// 'http://localhost:3000/weather?address='+location
   fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{ response.json().then((result)=>
   {
    
   if(result.error) { messageTwo.textContent=result.error; }
   else{
      messageOne.textContent=result.location;
      messageTwo.textContent=result.data;
   }
})
}); 
});