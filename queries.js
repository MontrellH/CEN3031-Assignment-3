/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  
   name.find({ name: 'Library West' }, function(err, names) {
  if (err) throw err;

  
  console.log(name);
});

var removeCable = function() {

   code.findOneAndRemove({ code: 'CABL' }, function(err) {
  if (err) throw err;
  
  console.log('Code deleted!');
});
};
var updatePhelpsLab = function() {
  name.findOneAndUpdate({ name: 'Phelp Laboratory' }, { address: 'input' }, function(err, name) {
  if (err) throw err;

  console.log(address);

});
};
var retrieveAllListings = function() {

 name.find({}, function(err, name) {
  if (err) throw err;

  //
  console.log(name);
}); 
  
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
