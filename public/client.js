const socket=io();
let na;
let textarea=document.querySelector("#textarea");
let messageArea=document.querySelector('.message__area');
do{
    na=prompt("Enter name");
}while(!na);
textarea.addEventListener("keyup",function(e){
    if(e.key === 'Enter')
    {
        sendMessage(e.target.value);
    }
});

function sendMessage(msg)
{
    let msg1={
        user: na,
        message: msg.trim()


    };
    // Append the Message
    appendMessage(msg1,"outgoing");
    textarea.value='';
    scrollToBottom();

    // Send the Message to the Server

    socket.emit("message", msg1);
}
function appendMessage(msg,type){
    let mainDiv=document.createElement('div');
    let className=type;
    mainDiv.classList.add(className,'message');
    let markup=`
    <h4> ${msg.user}</h4>
    <p>${msg.message}</p>
    `;
    mainDiv.innerHTML=markup;
    messageArea.appendChild(mainDiv);
}

// Receive Message
socket.on('message',function(msg1){
    console.log(msg1);
   appendMessage(msg1,'incoming');
   scrollToBottom();
});

// For Scrolling Automatically to the Bottom of the Screen 

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}
