var sscValue;
var sscmarks;
var sscmarks1;
var sscradio;
var sscpercentage;
var sscyop;


var interValue;
var intermarks;
var intermarks1;
var interradio;
var interpercentage;
var interyop;

var btechValue;
var btechmarks;
var btechmarks1;
var btechradio;
var btechpercentage;
var btechyop;

var name;
var rollno;
var email;
var co;
var store;


function getDetails() {
  sscValue=document.getElementById("sscValue").value;
  sscmarks=document.getElementById("sscmarks");
  sscmarks1=document.getElementById("sscmarks1");
  sscpercentage=document.getElementById("sscpercentage").value;
  sscyop=document.getElementById("sscyop").value

  interValue=document.getElementById("interValue").value;
  intermarks=document.getElementById("intermarks");
  intermarks1=document.getElementById("intermarks1");
  interpercentage=document.getElementById("interpercentage").value;
  interyop=document.getElementById("interyop").value

  btechValue=document.getElementById("techValue").value;
  btechmarks=document.getElementById("techmarks");
  btechmarks1=document.getElementById("techmarks1");
  btechpercentage=document.getElementById("techpercentage").value;
  btechyop=document.getElementById("techyop").value
co=document.getElementById("co").value;
  console.log(sscValue);
if(sscmarks.checked) {
   sscradio=sscmarks.value;
  console.log(sscradio);
}else {
   sscradio=sscmarks1.value;
  console.log(sscradio);
}
console.log(interValue);
if(intermarks.checked) {
interradio=intermarks.value;
console.log(interradio);
}else {
 interradio=intermarks1.value;
console.log(interradio);
}
console.log(btechValue);
if(btechmarks.checked) {
techradio=btechmarks.value;
console.log(btechradio);
}else {
 techradio=btechmarks1.value;
}
console.log(sscValue+" "+sscradio+" "+sscpercentage+" "+sscyop);
console.log(interValue+" "+interradio+" "+interpercentage+" "+interyop);
console.log(btechValue+" "+btechradio+" "+btechpercentage+" "+btechyop );


 name=document.getElementById("name").value;
 rollno=document.getElementById("rollno").value;
 email=document.getElementById("email").value;
 console.log(name+" "+rollno+" "+email);
 if(!window.indexedDB) {
   console.log("indexed db is not working...!");
 }
 var request=window.indexedDB.open("svitDB",1);
 request.onerror=e=>{
   console.log(e);}
   request.onupgradeneeded=e=>{
     var dbname=e.target.result;
     dbname.createObjectStore("cse",{keyPath:"roll"});
//   dbname.createObjectStore("cse")
 console.log("upgraded...!");
}
 request.onsuccess=e=>{
   var dbname=e.target.result;
var store=dbname.transaction("cse","readwrite").objectStore("cse");
store.put (
   {
 "name":name,
   "roll":rollno,
     "email":email,
     "co":co,


     "eduDetails":
     {
       "ssc": [
         sscValue,
         sscradio,
         sscpercentage,
         sscyop
       ],
       "inter": [
         interValue,
         interradio,
         interpercentage,
         interyop
       ],
       "btech": [
         btechValue,
         btechradio,
         btechpercentage,
         btechyop
       ]

   }
 }
 );

   console.log("success...!");

}
localStorage.setItem("roll",rollno);
window.open("resume.html","_self");
}
