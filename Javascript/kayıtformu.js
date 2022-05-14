
    document.getElementById("submit").disabled=true;
   
 function durum() {   
       
       var name = document.getElementById("ad");
       var button=document.getElementById("submit");
       var uzunluk=name.value.length;
       

       
       if(uzunluk>= 2  ){
           button.disabled=false;
           name.style.backgroundColor="green";
          } 
          else{
          button.disabled=true;
          name.style.backgroundColor="red";
          }     
      
   }

 function durum2() {   
       
       var name = document.getElementById("soyad");
       var button=document.getElementById("submit");
       var uzunluk=name.value.length;
       

       
       if(uzunluk>= 2  ){
           button.disabled=false;
           name.style.backgroundColor="green";
          } 
          else{
          button.disabled=true;
          name.style.backgroundColor="red";
          }     
      
   }


function durum3() {

      
       
var name = document.getElementById("password");
var button=document.getElementById("submit");
var uzunluk=name.value.length;



if(uzunluk>= 6  ){
button.disabled=false;
name.style.backgroundColor="green";
} 
else{
button.disabled=true;
name.style.backgroundColor="red";
}

}

function durum4() {

      
       
var name = document.getElementById("2password");
var button=document.getElementById("submit");
var uzunluk=name.value.length;



if(uzunluk>= 6  ){
button.disabled=false;
name.style.backgroundColor="green";
} 
else{
button.disabled=true;
name.style.backgroundColor="red";
}

}


function durum5() {   
       
       var name = document.getElementById("kullanıcıadı");
       var button=document.getElementById("submit");
       var uzunluk=name.value.length;
       

       
       if(uzunluk>= 5  ){
           button.disabled=false;
           name.style.backgroundColor="green";
          } 
          else{
          button.disabled=true;
          name.style.backgroundColor="red";
          }     
      
   }


