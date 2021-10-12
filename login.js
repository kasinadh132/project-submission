const signUpButton = document.getElementById('Sign up');
const LoginButton = document.getElementById('Login');
const container = document.getElementById('container');

LoginButton.onclick = function() {
    location.href = 'index.html';
}
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://kasi353l:<password>@datalake0-kzctj.a.query.mongodb.net/myFirstDatabase?ssl=true&authSource=admin";
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});