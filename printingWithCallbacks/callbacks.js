var counter = 1;
var chunks = {};
var https = require('https');
function getHTML (options, callback) {

  https.get(requestOptions, function (response) {

  response.setEncoding('utf8');
  var html = '';
  response.on('data', function (data) {

      // var label = 'chunk' + counter;
      // chunks[label] = data + "\n";
      // // console.log("Chunk #" + counter + ": " + "\n" + data + "\n");
      // console.log(chunks.chunk1);
      // counter++;
      html += data;




  });

  response.on('end', function () {
    console.log('Stream complete');
    callback(html);
  });



});

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);