//2Day model constructor
var MainModel = function(){
	var activities = [];
	var days = [];

	/** Returns the list of activity objects */
	var getActivities = function(){
		return activities;
	}


	/** Parses a json object and returns a list of new activy objects
		Input: A JSON object of the form {"name":"","type":"","duration":"","image":""}
		Return: A list of activities in the form of Activity objects. 
		*/
	var parseActivities = function(jsonActivities){
		console.log(jsonActivities);
		var newActivities = [];
		for (var i = 0; i<jsonActivities.length; i++){
			var object = jsonActivities[i];
			console.log(object);
			newActivities.push(new Activity(object.name,object.type,object.duration,object.image));
			
		}
		return newActivities;
	}

	/** Parses a json object and adds them to the var days in the model.
		Input: A JSON object of the form {"day":"xxxx-xx-xx","activities":[]}
		*/
	var parseDays = function(jsonDays){
		for (var i = 0; i<jsonDays.length; i++){
			var object = jsonDays[i];
			console.log(object);
			var day = new Day(object.date);
			day.setActivities(parseActivities(object.activites));
			days[object.date] = day;
		}
	}


	parseDays(jsonObject.days)
	parseActivities(jsonObject.activities);
	console.log(days);

}

//Temporary storage for our object.
var jsonObject = {
	"activities":[
		{"name":"Brush teeth", "type":"morning","duration":"10","image":"test.jpg"},	
		{"name":"Shower", "type":"morning","duration":"20","image":"test2.jpg"}
	],
	"days":[
		{"date":"2014-03-05","activites":[
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"test.jpg"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"test2.jpg"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"test.jpg"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"test2.jpg"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"test.jpg"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"test2.jpg"}
		]},
		{"date":"2013-03-06","activites":[
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"test.jpg"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"test2.jpg"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"test.jpg"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"test2.jpg"},
			{"name":"Brush teeth", "type":"morning","duration":"10","image":"test.jpg"},	
			{"name":"Shower", "type":"morning","duration":"20","image":"test2.jpg"}
		]}
	]
};