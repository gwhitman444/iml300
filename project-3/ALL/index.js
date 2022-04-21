function handleSubmit() {
  const name = document.getElementById("name").value;
  sessionStorage.setItem("NAME", name);

  return;
}


$(document).ready(function() {
   $("#line1").fadeIn(400, function() {
      $("#line2").fadeIn(700, function() {
          $("#line3").fadeIn(1000);
      }); 
   });
});