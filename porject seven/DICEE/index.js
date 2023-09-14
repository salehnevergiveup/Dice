let myObject;
try { 
    let myRequest =  new XMLHttpRequest();  
    myRequest.open("get","https://api.github.com/users/elzerowebschool/repos");  
    myRequest.send();
    
    myRequest.addEventListener("readystatechange",function(e){
      if(myRequest.readyState === 4 && myRequest.status === 200){ 
           myObject = myRequest.responseText;
      }

    })
}catch(Exception ) { 
  console.log("process fail")
}
  


setTimeout(function(){
   let Repso =  JSON.parse(myObject); 
   for(let  i in Repso) {  
     console.log( [+i+1]+ " "+Repso[i].id)
   } 

}, 1000)


window.onload = _ => { 
    let playerOne = Math.ceil(Math.random() *6); 
    let playerTwo = Math.ceil(Math.random() *6);

    let firstPlayer = document.querySelector(".firstPlayer .dice div");
    let secondPlayer = document.querySelector(".secondPlayer .dice div");
    
    document.querySelector(".firstPlayer .dice").setAttribute("style", "height: 200px; width: 200px"); 
     document.querySelector(".secondPlayer .dice").setAttribute("style", "height: 200px; width: 200px"); 

    console.log(secondPlayer);
    for(let i =1 ; i <= 6 ; i++) { 
        if(firstPlayer.classList.length > 0 && secondPlayer.classList.length ) {
         firstPlayer.classList.remove("img"+i);
         secondPlayer.classList.remove("img"+i);
        }
    }

    firstPlayer.classList.add("img"+playerOne); // Corrected square brackets to parentheses here
    secondPlayer.classList.add("img"+ playerTwo);
    winner(playerOne, playerTwo);

}


function winner(p1, p2) { 
    let messageBox  = document.querySelector(".winner"); 
    let message  = document.querySelector(".winner p");
    let header = document.querySelector("h1");
    message.textContent  =  (p1 > p2)? "Player 1 wins!": (p2 > p1 )? "Player 2 wins!" : "Draw"; 
    header.textContent = (p1 > p2)? "🚩Player 1 wins!": (p2 > p1 )? "🚩Player 2 wins!" : "Draw"; 
    messageBox.style.visibility = "visible"; 
}

let messageButton  = document.querySelector(".winner button");

messageButton.onclick = _ =>  document.querySelector(".winner").style.visibility = "hidden";


///Selecting element  
//document.getElementById() 
//document.getEelementsByClassName() 
//documnet.getElementByTagName() 
//document.querySelectorAll() 
//document.querySelector() 
//documnet.link() 
//documnet.form 
//document.title 
//document.body 


//classlkist 
//element.classList.add() 
//element.classList.remove()
//elemetn.classList.containts() 
//element.classList.items()
//element.classList.toggel() 


//Attibute  
//elemetn.getAttreibute 
//element.setAttribute()
//elemet.attributes() 
//element.hasAttribute()
//element.hasAttribuites() ]
//element.setAttributeNodes() 

//innerHtml  
//TextContent

//style  
//style.peopertyName
// style.reomveProperty()
//style.setProperty() 
//targe the  style sheet 
//documnet/styleSheets[index of the stylesheet].cssRules[index of the selector in the style file] 
let style = document.styleSheets[0]; 




let before  = style.cssRules[style.cssRules.length-2]; 
console.log(before); 
before.style.cssText = ` 
content: "";
position: absolute;
top: 100%;
left: 0;
transform:  translateY(-100%);
background-color: #FFEED5;
height: 50px;
width: 50px;
border-radius: 50%;
animation: animation 1s ease-out infinite;
box-shadow:  450px 0 0px 0px #FFEED5;
` 

