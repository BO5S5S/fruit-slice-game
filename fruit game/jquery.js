var step;
var playing=false;
var score;
var trialsleft;
var fruits =['apple','banana','cherries','mango','orange','peach','pear','watermelon'];
var action;
$(function(){
    
   $("#startreset").click(function(){
       
       if(playing == true)
           {
               location.reload();
                
               
           } else{
               playing = true;
                
               score = 0;
               $("#scorevalue").html(score);
               $("#trialsleft").show();
               trialsleft = 3;
                
               addhearts();
               $("#gameover").hide();
               $("#startreset").html("Rest Game");
               
                 }
         startAction()   
       
       
   }); 
    
    $(".fruits").mouseover(function(){
        
        score++;
        $("#scorevalue").html(score);
        //document.getElementById("#slicesound").play();
       $("#slicesound")[0].play();
       //stopAction();
		
		clearInterval(action);
		
		
		$(".fruits").hide("explode",500);
		
		setTimeout(startAction,500);
		
		
		
		
    });

function addhearts(){
    $("#trialsleft").empty();
     for(i=0;i<trialsleft;i++){
         
      $("#trialsleft").append('<img src="images/heart.png" class="life"> ');
                              }
    
}


function  startAction(){

    $(".fruits").show();
     choosefruit();
$(".fruits").css({'top': -80,'left': Math.round(500*Math.random())});
step = 1+Math.round(5*Math.random());
action =setInterval(function(){
    
    $(".fruits").css('top',$(".fruits").position().top+step)
    if($(".fruits").position().top>$("#fruitsContainer").height()){
        if(trialsleft>1){
            $(".fruits").show();
     choosefruit();
$(".fruits").css({'top': -80,'left': Math.round(500*Math.random())});
step = 1+Math.round(5*Math.random());
           trialsleft--;
            addhearts();
           }else{
               //gameover
               playing = false;
               $("#startreset").html("Start Game");
               $("#gameover").show();
               $("#gameover").html('<p>Game Over</p><p>Your Score is '+score+'</p>');
               $("#trialsleft").hide();
               stopAction();
           }
       
       }
},10);

}
function choosefruit(){
    $(".fruits").attr('src','images/'+fruits[Math.round(7*Math.random())]+'.png');
}

function stopAction(){
    clearInterval(action);
         $(".fruits").hide();
}



});





