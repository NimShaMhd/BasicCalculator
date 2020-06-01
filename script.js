var flag=0;
function clicks(val){
    if(flag==1){
        document.getElementById("outbox").value=""
        document.getElementById("outbox").value+=val
        flag=0;
    }else{
        document.getElementById("outbox").value+=val
    }
}
function clearscreen(){
    window.alert("Clearing...")
    document.getElementById("outbox").value=""
}
function results(){
    flag=1;
    var text=document.getElementById("outbox").value
    var result=eval(text);
    document.getElementById("outbox").value=result
}