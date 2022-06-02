const fs = require('fs');
// version major
var walk = function(dir)
{
    let results = [];
    let list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory())
          results = results.concat(walk(file)) ;
        else
        results.push(file);
    });
    return results ;
};

exports.walk = walk;
