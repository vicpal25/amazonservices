var AWS = require('aws-sdk');

AWS.config.loadFromPath('../config.json');


var s3 = new AWS.S3();

s3.getBucket({

  Bucket: 'www.commitdeploy.hash123321',
  function(data) {
   console.log(data);
  }

});

s3.createBucket({
    Bucket: 'www.commitdeploy.hash123321'
}, function() {

    var params = {
        Bucket: 'www.commitdeploy.hash123321',
        Key: 'AKIAITBO3FCFAOIU77FA',
        Body: 'Hello!'
    };

    s3.putObject(params, function(err, data) {

        if (err)

            console.log(err)

        else console.log("Successfully uploaded data to myBucket/myKey");

    });

});
