var openFile = function(event) {
  var input = event.target;
   var reader = new FileReader();
        
    reader.onload = function(){
      var text = reader.result;
      var node = document.getElementById('output');
      node.innerText = text;

      console.log(reader.result.substring(0, 200));
      };
    reader.readAsText(input.files[0]);
};

function alterar() {
  var xmlhttp;
  var texto = document.getElementById('texto');
  alert(texto.value);

  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  }
  
  else {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      texto = xmlhttp.responseText;
      alert("success");
    }

    else {
      // alert("reach here");
      alert(xmlhttp.readyState + " " + xmlhttp.status);
    }

}

var data = "file=info.txt"  "&content=" + texto.value;
            xmlhttp.open("POST", "other.aspx", true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send(data);