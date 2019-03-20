learning mongo, NoSQL, schema-less - Zenva

// query records
// filters - https://docs.mongodb.com/manual/reference/operator/query-comparison/
db.cities.find({country:'france'})
db.cities.find({population:8.5})
db.cities.find({population:{$lt:4}})
db.cities.find({population:{$gt:3,$lt:8}})

// returns the first one shown in find()
db.countries.findOne({continent:"europe"})

// insert data using shell / command line (CLI)
db.cities.insert({"_id":"005","name":"tokyo", "country":"japan", "population":13.5})
db.countries.insert({"_id":"005", "name":"australia","continent":"australia","population":24})

// update data
// w/o the $set, the whole record will be replaced on update
db.countries.update({_id:"004"},{$set:{population:128}})

// delete one or many records
db.cities.deleteOne({_id:"005"})
db.countries.deleteMany({continent:"europe"})
// to drop a whole collection
db.cities.drop()

// mongoose ORM - object relational mapper, use JS
conduit between my app and mongodb
npm init
npm i express --save
npm i mongoose --save

to run powershell as admin
PS> Start-Process powershell -Verb runAs