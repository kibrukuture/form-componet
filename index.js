const input=document.querySelector("input");
const label=document.querySelector("label");
let txt="";
let isFocus=false;
input.addEventListener("blur",event=>{  
   label.style.top="40%";
   label.style.left="5px";
   label.style.animationName="movedown";
   label.style.animationDuration=".5s";
   label.style.color="grey";
   isFocus=false;
   input.style.borderBottom="4px solid grey"; 
})

input.addEventListener("focus",event=>{
   txt=event.target.value;
   label.style.animationName="moveup";
   label.style.animationDuration=".5s";
   label.style.top="0px";
   label.style.left="5px";
   label.style.color="green";
   input.style.borderBottom="4px solid green"
   isFocus=true;
   
   
})
 
label.addEventListener("click",event=>{
  isFocus?input.blur():input.focus();
  
   
})
 








