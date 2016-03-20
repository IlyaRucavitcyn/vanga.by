## DB.js module
[![Build Status](https://travis-ci.org/IlyaRucavitcyn/vanga.by.svg?branch=master)](https://travis-ci.org/IlyaRucavitcyn/vanga.by)
A node.js module for mongodb, based on 'mongojs' npm module, that allows us to work with MongoDB within the methods it provides

In order to work with the module make sure [mongojs](https://www.npmjs.com/package/mongojs) is installed via [npm](https://www.npmjs.com/)

# Connecting to the app

To connect the model to your app simply copy it to your project root and include this in the app:

```
var database = require('../db').connecting({
    url: "mongodb://localhost:27017/",
    dbname: "test",
    collection: "testingCollection",
});
```
using parameters of the database you plan to work with

# Methods, provided by the module

Inserting new data into the defined collection and db:
```
database.insertData(data)
```

Finding docs according to the selector you want:
```
database.insertData(selector,[callback])
```

Cleaning up the defined collection of the db:
```
database.dropData(selector,[callback])
```
