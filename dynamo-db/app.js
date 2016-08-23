var AWS = require('aws-sdk');

AWS.config.loadFromPath('../config.json');

AWS.config.update({endpoint: "https://dynamodb.us-east-1.amazonaws.com", region: "us-east-1",});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "users";

var year = 2015;


//Insert into DynamoDB

var params = {
    TableName:table,
    Item:{
        "users-id": "2",
        "user-name": "Victor",
        "users-id-sort" : "active"
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});

//Update into DynamoDB

var params = {
    TableName: table,
    Key:{
      "users-id": "2",
      "user-name": "Victor",
      "users-id-sort" : "active"
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});
