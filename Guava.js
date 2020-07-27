function bounceOff(ABC,XYZ) {
    if (XYZ.x - ABC.x < ABC.width/2 + XYZ.width/2
        && ABC.x - XYZ.x < ABC.width/2 + XYZ.width/2) {
      XYZ.velocityX = XYZ.velocityX * (-1);
      ABC.velocityX = ABC.velocityX * (-1);
    }
    if (XYZ.y - ABC.y < ABC.height/2 + XYZ.height/2
      && ABC.y - XYZ.y < ABC.height/2 + XYZ.height/2){
      XYZ.velocityY = XYZ.velocityY * (-1);
      ABC.velocityY = ABC.velocityY * (-1);
    }
    
  }