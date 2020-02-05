/*
    Luis
    ICSE 2020
*/


function vote_character (character){
    /* Completed getting the info from xml file created using php */
    console.log(character.id);
    var xmlText;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlText = this.responseText;
            console.log(xmlText);
            
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xmlText,"text/xml");
            document.getElementById("porg_counter").innerHTML = xmlDoc.getElementsByTagName("porg")[0].childNodes[0].nodeValue;
            document.getElementById("baby_yoda_counter").innerHTML = xmlDoc.getElementsByTagName("baby_yoda")[0].childNodes[0].nodeValue;
            
        }
    };
    
    xhttp.open("GET", "info.php?vote="+character.id, true);
    xhttp.send();
}
function refresh (){
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlText = this.responseText;
            console.log(xmlText);
            
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xmlText,"text/xml");
            document.getElementById("porg_counter").innerHTML = xmlDoc.getElementsByTagName("porg")[0].childNodes[0].nodeValue;
            document.getElementById("baby_yoda_counter").innerHTML = xmlDoc.getElementsByTagName("baby_yoda")[0].childNodes[0].nodeValue;
            
        }
    };
  };
  xhttp.open("GET", "info.php?refresh=true", true);
  xhttp.send();
}
refresh();
setInterval(refresh, 1000);