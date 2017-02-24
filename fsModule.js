var fs = require('fs');

fs.readFile('path/to/file', function(err, data){
	console.log(data);
})

fs.writeFile('path/to/file', data, function(err){
	//check error
})