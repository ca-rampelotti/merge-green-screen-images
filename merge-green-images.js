var canfore = null;
var foreinput = null;
var imagefore = null;

function loadForeground(){
  
  canfore = document.getElementById('canvas1');
  foreinput = document.getElementById('fore');
  imagefore = new SimpleImage(foreinput);
  imagefore.drawTo(canfore);
}

var backinput = null;
var canback = null;
var imageback = null;

function loadBackground(){
  backinput = document.getElementById('back');
  canback = document.getElementById('canvas2');
  imageback = new SimpleImage(backinput);
  alert ('Loading image');
  imageback.drawTo(canback);
}

var output;
var ctxfore;
var ctxback; 
var canout;

function createComposite() {
  output = new SimpleImage(imagefore.getWidth(), imagefore.getHeight());
  for (var pixel of imagefore.values()){
      var x = pixel.getX()
      var y = pixel.getY()
      if (pixel.getGreen() >200){
        var px = imageback.getPixel(x,y);
        output.setPixel(x, y, px)
      }
      else {
        output.setPixel(x, y, pixel);
      }
  }  
  return output;
}

function doGreenScrean(){
  
  clearCanvas();
  
  var image = createComposite()
  image.drawTo(canfore);
}

function clearCanvas(){
  doClear(canback);
  doClear(canfore);
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}