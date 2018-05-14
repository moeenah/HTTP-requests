var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  var original = ['you', 'er', 'ck', 't', 's', 'o', 'l', 'e', 'a'];
  var replace = ['j00', '0r', 'x', '7', '5', '0', '1', '3', '4'];

  for (var i = 0; i < original.length; i ++) {
    var o = RegExp(original[i], 'gi');
    var html = html.replace(o, replace[i]);
  }

  console.log(html);

}

getHTML(requestOptions, print1337);
