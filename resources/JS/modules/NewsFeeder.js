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
	console.log("yes");
	return false;
		
	}
}