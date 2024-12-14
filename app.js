let tableDiv=document.getElementById("table");
let cont=document.getElementById("container");
function generateTable(){
    let result="";
    let num=document.getElementById("input-number").value;  
    if(num<=0 || num.trim()==" "){
        alert("Please enter a valid number!");
        reset();
    }
    else{
    for(let i=1; i<=10;i++){
    result+=num +" x "+ i +" = "+num*i+"<br>";
    } 
tableDiv.innerHTML=result;
tableDiv.style.display="block";
cont.style.height="66vh";
}
}
function reset(){
    document.getElementById("input-number").value=reset;
    tableDiv.style.display="none";
    cont.style.height="28vh";
}