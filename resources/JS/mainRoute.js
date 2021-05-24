import CommonValidationEngine from './modules/commonValidationEngine.js'
import NewsFeeder from './modules/NewsFeeder.js' 

class MainRoute{
  constructor(){
      console.log("main route");
    }
  
  getRouteName(){
      return "route"
    }
	
  
  newsFeedRoute(){
 	let newsFetchStatus = false;
	try{
   		const news = new NewsFeeder( payLoad );
   		var status = news.newsFetch();
		console.log( status  );
		
	} catch(err){
		throw new Error("Exception happened during news fetch");
	}
	return newsFetchStatus;
  }

  
}
window.MainRoute = MainRoute
