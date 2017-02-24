var fs = require('fs');

var watcher = fs.watch('notes.txt');
watcher.on('change', function(event, filename){
	console.log(`${event} on file ${filename}`)
})