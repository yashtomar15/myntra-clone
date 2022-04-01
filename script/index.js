var data=JSON.parse(localStorage.getItem("homedata"));
// console.log(data.slideshow);

// slideshow
var Slideshow=data.slideshow;
var div=document.querySelector("#slideshow");
var i=0;

setInterval(function(){
    div.innerHTML=null;
  var image=document.createElement("img");
  image.src=Slideshow[i];
  div.append(image);
  i++;
  if(Slideshow.length===i){
      i=0; 
  }
},2000)