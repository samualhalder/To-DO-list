const inputbox=document.getElementById("inputbox");
const listcont=document.getElementById("list-cont");
 function work(){
    if(inputbox.value===""){
        alert("write some thhing");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcont.appendChild(li);
        inputbox.value="";
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        savedata();
    }
    
  
 }

listcont.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("ch");
        savedata();
    }
    else if(e.target.tagName=== "SPAN"){
       e.target.parentElement.remove();
       savedata();
    }

})

function savedata(){
  localStorage.setItem("data",listcont.innerHTML);
}
function show(){
   listcont.innerHTML= localStorage.getItem("data");
}
show();