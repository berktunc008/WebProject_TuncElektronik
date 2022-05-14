function openNav() {
    document.getElementById("myNav").style.width = "100%"
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%"
  }
  




function openForm() {
  document.getElementById("myForm").style.display = "block"
}

function closeForm() {
  document.getElementById("myForm").style.display = "none"
}

                   /* PARLAKLIK AÇ/KAPA*/
function on() {
  document.getElementById("parlaklıkaçkapa").style.display = "block";
}

function off() {
  document.getElementById("parlaklıkaçkapa").style.display = "none";
}


           /*breadcrumb*/
(function() {


}).call(this);



            /*SAAT EKLEDİK */
var saatZemin = document.getElementById("zemin");
 
 
function format(gelen) {
var StrYap = gelen.toString();
if (StrYap.length === 1) {
return "0" + StrYap;
} else {
return StrYap;
}
}
 
function saatGuncelle() {
var dd = new Date();
var hh = dd.getHours();
var mm = dd.getMinutes();
var ss = dd.getSeconds();
saatZemin.textContent = format(hh) + ":" + format(mm) + ":" + format(ss);
}
 
setInterval(saatGuncelle, 1000);
 