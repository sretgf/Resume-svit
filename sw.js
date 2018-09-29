var cachename="pwa";
var filescache={
  '/';
  '/index.html'
}


self.addEventListener('install',function(e){
  console.log("installed successfully..!");
  e.waituntil(
    catches.open(cachename).then(function(ca){
      console.log("catching files from cache");
      return ca.addall(filescache);
    })
  )
})
self.addEventListener('active',function(e))
self.addEventListener('active',function(e){
  console.log("activated successfully...!");
})
self.addEventListener('fetch',function(e){
  console.log("fetched successfully...!");
})
