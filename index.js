
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#blah')
        .attr('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function findData() {
  
  document.getElementById('invis').style.visibility = "visible";
}

function jumpstart() {
  document.getElementById('invis2').style.visibility = "visible";
}