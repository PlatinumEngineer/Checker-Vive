addEventListener( "keydown", function(e){
  console.log(e);
  if (e.keyCode == 81 || ){
    document.getElementById("cam").setAttribute("camera", "userHeight: 4");
  };
  if (e.keyCode == 69){
    document.getElementById("cam").setAttribute("camera", "userHeight: 30");
  };
  if (e.keyCode == 86){
    var x = document.getElementById("circle1").getAttribute("position", "x");
    console.log(x);
    var y = 1;
    var z = 0;
    document.getElementById("circle1").setAttribute("position", x+' '+y+' '+z);
    var a = document.getElementById("circle1").getAttribute("position");
    console.log(a);
  };
});

addEventListener( "triggerdown", function(f){
  console.log(f);
});