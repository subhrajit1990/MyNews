import CommonFunctions from './commonFunctions.js'
export default class NewsFeeder extends CommonFunctions {
	constructor(params){
		super();
		this.params = params;
	}

	newsFetch(){

	/*const extraParameters = {
		
	    method: 'POST',
	    body: JSON.stringify(this.params)
  	};

  	return this.serverCall("expenses/api/createGroup",extraParameters); */
		this.rssFeeder("GET https://newsapi.org/v2/everything?q=keyword&apiKey=d54f337feac8491db583ec06fd854eef");
	console.log("yes");
	return false;
		
	}
}
