setTimeout(function(){
	console.log('Run');
},1000);
console.log('lets go');

/*
1. Call back in setTimeout added to queue for 1 sec
2. 'lets go' logged to the screen
3. even loop continues to wait
4. after 1 sec setTimeout call back removed from queue
*/