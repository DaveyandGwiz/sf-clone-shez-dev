// Give me  a javascript object named GameViewport that has WIDTH set to 384 and HEIGHT set to 224 and SCALE set to 4
const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
    SCALE: 4
};



window.onload = function() {
  const canvasEl= document.querySelector('canvas');
  const context = canvasEl.getContext('2d');
  // I need my canvasEl element to have a width of 384 qnd a height of 224
    canvasEl.style.width = `${GameViewport.WIDTH * GameViewport.SCALE}px`;
    canvasEl.style.height = `${GameViewport.HEIGHT * GameViewport.SCALE}px`;
    // I need to set the context strokestyle to black and pass the parameters GameViewport.HEIGHT amd GameViewport.WIDTH to the lineto method
    context.strokeStyle = 'yellow';
    context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
    context.moveTo(GameViewport.WIDTH);
    context.lineTo(0, GameViewport.HEIGHT);
    context.stroke();


  console.log(context);
};