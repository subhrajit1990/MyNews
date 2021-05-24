if (typeof (SMB) == "undefined") {
    SMB = {}
}

SMB.bootStrapJSOps = new function(){	
    	this.init = function(){
		// doSomething
   	 }
	newsFeeds = function(){
		
		// Sample function call -- Starts
		var mainRt = new MainRoute();
		console.log(mainRt.getRouteName());
		console.log("validation success");
		mainRt.newsFeedRoute();
		
	}
}

bootStrapJS = SMB.bootStrapJSOps


