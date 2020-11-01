
function isTouching (Object1,Object2) {

    if (Object1.x - Object2.x < Object2.width/2 + Object1.width/2
      && Object2.x - Object1.x < Object2.width/2 + Object1.width/2 &&
      Object1.y - Object2.y < Object2.width/2 + Object1.width/2
      && Object2.y - Object1.y < Object2.width/2 + Object1.width/2 )  {
  
     return true; 
  
    }
    else {
      
      
  return false;  
  
  
  
  
  
  }
}

function bounceOff(object1,object2){ 
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && 
    object2.x - object1.x < object2.width/2 + object1.width/2)
   { object1.velocityX = object1.velocityX * (-1); 
    object2.velocityX = object2.velocityX * (-1); } 
    if (object1.y - object2.y < object2.height/2 + object1.height/2 && 
      object2.y - object2.y < object2.height/2 + object1.height/2)
    { object1.velocityY = object1.velocityY * (-1); 
  object2.velocityY = object2.velocityY * (-1); } }

