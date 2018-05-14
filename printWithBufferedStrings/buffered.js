var counter = 1;
var chunks = {};
var https = require('https');
function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {

      var label = 'chunk' + counter;
      chunks[label] = data + "\n";
      // console.log("Chunk #" + counter + ": " + "\n" + data + "\n");
      console.log(chunks.chunk1);
      counter++;

  });

  response.on('end', function () {
    console.log('Stream complete');
  });



});

}

getAndPrintHTML();