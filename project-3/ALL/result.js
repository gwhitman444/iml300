window.addEventListener("load", () => {
  const name = sessionStorage.getItem("NAME");
  document.getElementById("result-name").innerHTML = name;
});


$(document).ready(function() {
   $("#line1").fadeIn(500, function() {
      $("#line2").fadeIn(1500, function() {
          $("#line3").fadeIn(2000);
      }); 
   });
});
