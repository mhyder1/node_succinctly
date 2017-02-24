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
//----------- Promises---------------------
function concatP(a, b, callback) {
    return new Promise(function(resolve){
    	concat(a,b, resolve);
    })
}

function upperP(a, callback) {
    return new Promise(function(resolve){
    	upper(a, resolve);
    })
}


function decorP(a, callback) {
    return new Promise(function(resolve){
    	decor(a, resolve);
    })
}


concatP('hello','world')
	.then(upperP.bind(this))
	.then(decorP.bind(this))
	.then(console.log)