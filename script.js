$(document).ready(function() {
    $("#driver").click(function(event) {
      $("#stage").load("info.html");
    });
  });

function getMeMyStuff() {
    let newRequest = new XMLHttpRequest();
    newRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        document.getElementById("example").innerHTML = myObj.name;
      }
    };
    newRequest.open("GET", "new.json", true);
    newRequest.send();
}

<button onclick="getMeMyStuff()"></button>
