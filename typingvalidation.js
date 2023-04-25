
// validation-correct or wrong to change bg colour

function validatePara() {

  var x = document.getElementById("content").innerHTML;
  var y = document.getElementById("input").value;


  if (x == y) {

    document.getElementById("content").style.backgroundColor = 'green';
  }
  else {

    document.getElementById("content").style.backgroundColor = 'red';

  }
}


// validate-typing time


function starttime(){
  const d = new Date();
let time = d.getTime();
document.getElementById("starttime").value=time

}
function endtime(){
  const d = new Date();
let endedtime = d.getTime();


var r6= ( document.getElementById("starttime").value-(endedtime))
var i=r6/1000

if(i<60){
  

  
 document.getElementById("outputtime").innerHTML="Your Typing speed is"+"  "+ Math.round(Math.abs(i))+"seconds"
}
else{
  let full=(Math.abs(Math.round(i/60))+"min")
  
 document.getElementById("outputtime").innerHTML=full
}


// validate-wrong words


  const paragraph = "VirtualMaze is one of the prominent companies in the Information Technology industry situated in Chennai, Tamil Nadu. It is renowned for providing amazing ...";
  
   input=document.getElementById("input").value;
  let userInput=input
  
  const paragraphWords = paragraph.split(" ");
  const userInputWords = userInput.split(" ");
  
  let wrongWordCount = 0;
  for (let i = 0; i < paragraphWords.length; i++) {
    if (paragraphWords[i] !== userInputWords[i]) {
      wrongWordCount++;
    }
  }
  
  document.getElementById("outputerror").innerHTML="Your typing error is" +" "+   (wrongWordCount); 
  
  var x = document.getElementById("content").innerHTML;
  var y = document.getElementById("input").value;


  if (x == y) {

    document.getElementById("content").style.backgroundColor = 'green';
  }
  else {

    document.getElementById("content").style.backgroundColor = 'red';

  }
  
}
