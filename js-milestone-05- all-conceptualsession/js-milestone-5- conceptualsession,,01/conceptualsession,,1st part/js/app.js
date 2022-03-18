const allButton = document.getElementsByClassName("button-test");




for(button of allButton){
   button.addEventListener("click",function(e){
    if(e.target.id == "prime"){
        document.getElementById("title").style.color = "red";
    }
    else{
        document.getElementById("title").style.color = "green";
    }

   });

 
   }





