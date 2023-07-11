var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function (chunk) {
  console.log(chunk);
  writable.write(chunk);
});

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);

// read data - compress data - write compressed data to file
readable.pipe(gzip).pipe(compressed);
