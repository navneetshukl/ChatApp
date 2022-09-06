const socket=io();
let na;
let textarea=document.querySelector("#textarea");
do{
    na=prompt("Enter name");
}while(!na);
textarea.addEventListener("keyup",function(e){
    if(e.key==="Enter")
    {
        sendMessage(e.target.value);
    }
});

function sendMessage(msg)
{
    let msg1={
        user: na,
        message: msg


    };
    appendMessage(msg,"outgoing");
}
