'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */

mongoimport --db <mongodb:Montrellh:mh143634@ds127034.mlab.com:27034/montrell> --collection <myCollections> --type json --file listings.json
--jsonArray

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
 var name = mongoose.model('Listing', listingSchema);
 var code = mongoose.model('Listing', listingSchema);
 var longitude = mongoose.model('Listing', listingSchema);
 var latitude = mongoose.model('Listing', listingSchema);
 var address = mongoose.model('Listing', listingSchema);

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */