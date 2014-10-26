require('../../vendor/javascripts/impress.js')
impress().init();

window.addEventListener("load", function(){
  var optionsBtn = $("#options");
  optionsBtn.addEventListener("click", function(event){
    console.log("clicked")
    $("#themeCon").classList.toggle("hidden");
  })
});