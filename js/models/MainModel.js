//2Day model constructor
var MainModel = function(){
	var activities = [];
	var days = [];
	var chosenDay;

	/** Returns the list of activity objects */
	//var getActivities = function(){
	this.getActivities = function(){
		return activities;
	}

	this.getDay = function(){
		return chosenDay;
	}

	this.chooseDay = function(_day){
		if (days[_day] == undefined){
			days[_day] = new Day(_day);
			console.log("Created new day");
		}
		chosenDay = days[_day];
		notifyObservers();
		return chosenDay;	
	
	}


	/** Parses a json object and returns a list of new activy objects
		Input: A JSON object of the form {"name":"","type":"","duration":"","image":""}
		Return: A list of activities in the form of Activity objects. 
		*/
	var parseActivities = function(jsonActivities){
		//console.log(jsonActivities);
		var newActivities = [];
		for (var i = 0; i<jsonActivities.length; i++){
			var object = jsonActivities[i];
			
			console.log(object);
			var act = new Activity(i, object.name,object.type,object.duration,object.image);
			act.setStartTime(new Date(object.startTime));
			newActivities.push(act);
			
		}
		return newActivities;
	}

	/** Parses a json object and adds them to the var days in the model.
		Input: A JSON object of the form {"day":"xxxx-xx-xx","activities":[]}
		*/
	var parseDays = function(jsonDays){
		for (var i = 0; i<jsonDays.length; i++){
			var object = jsonDays[i];
			//console.log(object);


			var day = new Day(object.date);
			day.setActivities(parseActivities(object.activities));
			days[object.date] = day;
		}
	}


	this.importFile = function(data){
		//console.log(days);
		var jsonObject2 = $.parseJSON(data);
		activities = activities.concat(parseActivities(jsonObject2.activities));
		parseDays(jsonObject2.days);
		//console.log(days);
		//console.log(activities);
		notifyObservers();

	}
	this.exportFile = function(){
		//var jsonFile = activities.toJSON();
		//console.log(activities);
		var jsonActivities = JSON.stringify(activities);
		//console.log(days);

		var output = [];
		for (var day in days) {

			output.push(days[day]);
		}
		//console.log(output);
		var jsonDays = JSON.stringify(output);
		//console.log(jsonDays);
		return "{\"activities\":" + jsonActivities + ", \n \"days\":" + jsonDays + "}";


	}
	parseDays(jsonObject.days)
	activities = parseActivities(jsonObject.activities);
	//console.log(days);




	/*****************************************  
	      Observable implementation    
	*****************************************/

	var observers = [];

	this.addObserver = function(observer) 
	{
		observers.push(observer);
	}

	var notifyObservers = function(arg) 
	{
		for(var i=0; i<observers.length; i++) 
		{
			observers[i].update(arg);
		}	
	}
}

//Temporary storage for our object.
var jsonObject = {
	"activities":[
		{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg"},	
		],
	"days":[
		{"date":"2014-03-15","activities":[
			{"name":"Brush teeth", "type":"morning","duration":"60","image":"sample.jpg","startTime": "Sat Mar 15 2014 08:00:00"},	
			{"name":"Shower", "type":"morning","duration":"30","image":"sample.jpg","startTime": "Sat Mar 15 2014 09:30:00"},
			{"name":"Brush teeth", "type":"morning","duration":"105","image":"sample.jpg","startTime": "Sat Mar 15 2014 10:15:00"},	
			{"name":"Shower", "type":"morning","duration":"60","image":"sample.jpg","startTime": "Sat Mar 15 2014 12:00:00"},	
			{"name":"Shower", "type":"morning","duration":"45","image":"sample.jpg","startTime": "Sat Mar 15 2014 13:15:00"},
			{"name":"Brush teeth", "type":"morning","duration":"60","image":"sample.jpg","startTime": "Sat Mar 15 2014 14:00:00"},	
			{"name":"Shower", "type":"morning","duration":"15","image":"sample.jpg","startTime": "Sat Mar 15 2014 15:15:00"},
			{"name":"Brush teeth", "type":"morning","duration":"90","image":"sample.jpg","startTime": "Sat Mar 15 2014 16:00:00"},
		]},
		{"date":"2013-03-06","activities":[
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg"}
		]}
	]
};
