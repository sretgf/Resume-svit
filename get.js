var rollnumber=localStorage.getItem("roll");



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
store=dbname.transaction("cse","readwrite").objectStore("cse");
var data=store.get(rollnumber);
data.onsuccess=e=>{
  var res=e.target.result;
  var main=document.getElementById('mainDiv');
  var left=document.createElement("div");
  left.classList.add("leftDiv");
  var name1=document.createElement("h3");
  name1.textContent=res.name;
  left.appendChild(name1);
  main.appendChild(left);
  var hr=document.createElement("hr");
  left.appendChild(hr);
  var roll=document.createElement('p');
  left.appendChild(roll);
  var email=document.createElement('p');
  email.textContent=res.email;
  left.appendChild(email);




  var right=document.createElement("div");
  right.classList.add("rightDiv");
  var co=document.createElement('p');
  co.textContent=res.co;
  right.appendChild(co);
  main.appendChild(right);

}

  console.log("success...!");



}
