var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);