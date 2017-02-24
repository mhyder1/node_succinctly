function concat(a, b, callback) {
    setTimeout(function() {
        var r = a + b; 
        callback(r)
    }, 0)
}

function upper(a, callback) {
    setTimeout(function() {
        var r = a.toUpperCase(); 
        callback(r)
    }, 0)
}

function decor(a, callback) {
    setTimeout(function() {
        var r = '*' + a + '*';
        callback(r)
    }, 0)
}

concat('hello', 'world',function(r1){
	upper(r1, function(r2){
		decor(r2, function(r3){
			console.log(r3);
		})
	})
})