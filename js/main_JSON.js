/*
    Luis
    ICSE 2020
*/


function vote_character (character){
    /* Completed getting the info from xml file created using php */
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var vote_count = JSON.parse(this.responseText);
        document.getElementById("porg_counter").innerHTML = vote_count.porg;
        document.getElementById("baby_yoda_counter").innerHTML = vote_count.baby_yoda;
      }
    };
    xmlhttp.open("GET", "info.php?vote="+character.id, true);
    xmlhttp.send();
}

function refresh (){
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var vote_count = JSON.parse(this.responseText);
        document.getElementById("porg_counter").innerHTML = vote_count.porg;
        document.getElementById("baby_yoda_counter").innerHTML = vote_count.baby_yoda;
      }
    };
    xmlhttp.open("GET", "info.php?refresh=true", true);
    xmlhttp.send();
}
refresh();
setInterval(refresh, 1000);
