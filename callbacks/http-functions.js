var https = require('https');
module.exports = function getHTML (options, callback) {
    https.get(options, function (response) {

    response.setEncoding('utf8');
    var html = '';
    response.on('data', function (data) {

        html += data;

    });

    response.on('end', function () {
      console.log('Stream complete');
      callback(html);
    });

  });
};