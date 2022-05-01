function handleSubmit() {
  const name = document.getElementById("name").value;
  sessionStorage.setItem("NAME", name);

  return;
}


$(document).ready(function() {
   $("#line1").fadeIn(200, function() {
      $("#line2").fadeIn(1500, function() {
          $("#line3").fadeIn(1800);
      }); 
   });
});