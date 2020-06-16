
document.querySelector('.text-content').addEventListener('keypress', function(e){
    if(e.keyCode === 13 || e.which === 13){
     sendMsg();   
    }
})

document.getElementById('clear').addEventListener('click', function (e){
    let parent = e.target.parentNode.parentNode.children[1];
    let children = parent.children;
    for(let i = 0; i< children.length; i++){
       let see =  parent.removeChild(children[i]);
        
        document.querySelector('.sent-msg').insertAdjacentHTML("afterbegin", ' ');
    }
   /*  parent.removeChild(children[0]);
    parent.removeChild(children[1]); */
    

    /* let childrenArr = Array.prototype.slice.call(children);
   
    let childrenLength = childrenArr.length;
    childrenArr.splice(0,childrenLength); */    
})


function sendMsg(){
    let msg, html, newHtml;
    msg = document.querySelector('.text-content').value;
    html = '<p class="msg">%msg%</p>';
 

    if(msg !== "" && " "){
        newHtml = html.replace('%msg%', msg);
        document.querySelector('.sent-msg').insertAdjacentHTML("afterbegin", newHtml);
    }
    else{
        alert("Please enter a Message");
    }
   
}


function clearField(){
    let msg;
    msg = document.querySelector('.text-content');
    msg.value = "";
    msg.focus();

}

document.getElementById('send').addEventListener('click', clearField);

function closeChat(){
    document.getElementById('chat-box').style.display = 'none';
    document.querySelector('.chat-us').style.display = 'block';
}

function openChat(){
    document.getElementById('chat-box').style.display = 'block';
    document.querySelector('.chat-us').style.display = 'none';
}























/* 
UNDERSTANDING THE DIFFERENCE BETWEEN CALL AND BIND


var john = {
    name: 'John',
    yearOfBirth: 1990,               
}

john.calculateAge = function(){
   var age = 2020 - this.yearOfBirth;
    console.log(age); 
    return (age);  
};

john.getRetirementStatus = function(limit){
   var age =   2020 - this.yearOfBirth;
   
   function retirement(){
      var yearsLeft = limit - age;
    console.log('Hello ' + this.name + ' ' + 'You have ' + yearsLeft + 'years to retirement');
   }  
   retirement();
}

var mike = {
    name: 'Mike',
    yearOfBirth : 1994,
};

var retirementUS = john.getRetirementStatus.bind(mike, 63);

retirementUS() */

/* var retirementUs = retirement;
var retirementNG = retirement;

retirementNG(65)
retirementUs(63) */

/* var x, a;
a = 20;
x = 240 + a;
 */
/* console.log(x); */















  /*   function timer(){
        var s =10;
        var timerID = setInterval(function timerDisplay(){
            console.log(s);
            s--;
            if(s === 0){
                console.log('Time out'); 
                clearInterval(timerID);  
            }    
        }, 1000);
    }

    timer(); */
    
/* var s;
s = 10;

function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        console.log('00:'+ sec);
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}


function josh(){
   var s =7;

   var joshID =  setInterval(function(){
    console.log(s);
    --s;

    if(s === 0){
        console.log('Time up');
        clearInterval(joshID);
    }
   }, 1000);
   
} */

/* 
prints 18
create a variable 19
assign a value to a variable 21
prints 31

call 21 ( 7, )

*/