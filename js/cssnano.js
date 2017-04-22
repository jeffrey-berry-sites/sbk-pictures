var cssnano = require('cssnano');
var fs = require('fs');


cssnano.process(fs.readFileSync(process.argv[2])).then(function (result) {
  fs.writeFileSync(process.argv[3], result);
});