document.getElementById("real").onmouseover = function() {mouseOver()};
document.getElementById("real").onmouseout = function() {mouseOut()};
   
   function mouseOver() {
     document.getElementById("real").innerHTML = "Yoram";
   }
   
   function mouseOut() {
     document.getElementById("real").innerHTML = "Vixniv";
   }