//2Day model constructor
var MainModel = function(){
	var activities = [];
	var days = [];

	/** Returns the list of activity objects */
	//var getActivities = function(){
	this.getActivities = function(){
		return activities;
	}

	this.getDay = function(_day){
		var day = days[_day];
		return day;
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
			
			//console.log(object);
			var act = new Activity(i, object.name,object.type,object.duration,object.image);
			act.setStartTime(new Date(object.starttime));
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
			day.setActivities(parseActivities(object.activites));
			days[object.date] = day;
		}
	}


	parseDays(jsonObject.days)
	activities = parseActivities(jsonObject.activities);

}

//Temporary storage for our object.
var jsonObject = {
	"activities":[
		{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg"},	
		{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg"}
	],
	"days":[
		{"date":"2014-03-05","activites":[
			{"name":"Brush teeth", "type":"morning","duration":"50","image":"sample.jpg","starttime": "Sat Mar 15 2014 14:07:00"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg","starttime": "Sat Mar 15 2014 09:07:00"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg","starttime": "Sat Mar 15 2014 10:07:00"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg","starttime": "Sat Mar 15 2014 11:07:00"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg","starttime": "Sat Mar 15 2014 12:07:00"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg","starttime": "Sat Mar 15 2014 13:07:00"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg","starttime": "Sat Mar 15 2014 14:07:00"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg","starttime": "Sat Mar 15 2014 15:07:00"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg","starttime": "Sat Mar 15 2014 16:07:00"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg","starttime": "Sat Mar 15 2014 20:07:00"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg","starttime": "Sat Mar 15 2014 21:07:00"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg", "starttime": "Sat Mar 15 2014 23:07:00"}
		]},
		{"date":"2014-03-15","activites":[
			{"name":"Brush teeth", "type":"morning","duration":"60","image":"sample.jpg","starttime": "Sat Mar 15 2014 08:00:00"},	
			{"name":"Shower", "type":"morning","duration":"30","image":"sample.jpg","starttime": "Sat Mar 15 2014 09:30:00"},
			{"name":"Brush teeth", "type":"morning","duration":"105","image":"sample.jpg","starttime": "Sat Mar 15 2014 10:15:00"},	
			{"name":"Shower", "type":"morning","duration":"60","image":"sample.jpg","starttime": "Sat Mar 15 2014 12:00:00"},	
			{"name":"Shower", "type":"morning","duration":"45","image":"sample.jpg","starttime": "Sat Mar 15 2014 13:15:00"},
			{"name":"Brush teeth", "type":"morning","duration":"60","image":"sample.jpg","starttime": "Sat Mar 15 2014 14:00:00"},	
			{"name":"Shower", "type":"morning","duration":"15","image":"sample.jpg","starttime": "Sat Mar 15 2014 15:15:00"},
			{"name":"Brush teeth", "type":"morning","duration":"90","image":"sample.jpg","starttime": "Sat Mar 15 2014 16:00:00"},
		]},
		{"date":"2013-03-06","activites":[
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"sample.jpg"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"sample.jpg"}
		]}
	]
};