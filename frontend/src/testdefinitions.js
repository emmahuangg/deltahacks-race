for (var i=0; i<document.querySelectorAll(".need-definition").length; i++) {
  document.querySelectorAll(".need-definition")[i].addEventListener('dblclick', function(event) {
    document.querySelector(".definition").innerHTML = event.target.getAttribute("title");
  });
}
