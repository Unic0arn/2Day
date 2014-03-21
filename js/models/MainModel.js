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

	this.getActivity = function(_id){
		//console.log(activities);
		for (var i=0; i < activities.length; i++){
			var activity = activities[i];
			if(activity.id==_id){
				return activity;
			}
		}
	}

	this.getDay = function(){
		return chosenDay;
	}
	this.update = function(){notifyObservers();}
	this.chooseDay = function(_day){
		if (days[_day] == undefined){
			days[_day] = new Day(_day);
			console.log("Created new day");
		}
		chosenDay = days[_day];
		notifyObservers();
		return chosenDay;	

	}
	this.getActivityFromDay = function(_id){
		for (var i=0; i < chosenDay.activities.length; i++){
			if (chosenDay.activities[i].id == _id){
				return chosenDay.activities[i];
			}
		}

	}
	this.changeDurationOfActivity = function(_id, newDuration){
		diff = 0;


		for (var i=0; i < chosenDay.activities.length; i++){
			if (chosenDay.activities[i].id == _id){
				console.log("found it : " + _id);
				console.log(newDuration);
				activity = chosenDay.activities[i];
				diff = newDuration - activity.duration;
				pos = i;
				activity.duration = parseInt(activity.duration) + parseInt(diff);
				break;
			}
		}
		console.log("diff =  " + diff);
		for(var i = pos + 1; i < chosenDay.activities.length; i++){
			chosenDay.activities[i].startTime = new Date(chosenDay.activities[i].startTime.getTime() +  diff*60000);
		}
		console.log(chosenDay.activities);

	}
	this.addActivityToDay = function(prev, activityId){
		console.log(chosenDay.activities);
		var pos;
		activity = this.getActivity(activityId);
		newAct = new Activity(activity.id,activity.name,activity.type, activity.duration,activity.image);


		for (var i=0; i < chosenDay.activities.length; i++){
			if (chosenDay.activities[i].id == prev){
				pos = i;
				newAct.setStartTime(chosenDay.activities[i].getEnd());
				chosenDay.activities.splice(i+1,0,newAct);
				break;
			}
		}
		for(var i = pos + 2; i < chosenDay.activities.length; i++){
			console.log(chosenDay.activities[i].startTime + "  +  " +  newAct.duration);
			chosenDay.activities[i].startTime = new Date(chosenDay.activities[i].startTime.getTime() +  newAct.duration*60000);

		}
		console.log(chosenDay.activities);

	}


	/** Parses a json object and returns
	 {"name":"","type":"","duration":"","image":""}
		Return: A list of activities in the form of Activity objects. 
		*/
	var parseActivities = function(jsonActivities){
		//console.log(jsonActivities);
		var newActivities = [];
		for (var i = activities.length; i<activities.length + jsonActivities.length; i++){
			var object = jsonActivities[i];
			
			//console.log(object);
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
		console.log(jsonObject2);
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
	{"name":"Brush teeth", "type":"morning","duration":"10","image":"brushing_teeth.jpg"},	
	{"name":"Shower", "type":"morning","duration":"20","image":"shower.png"},
	{"name":"Shave", "type":"morning","duration":"15","image":"afeitar.png"},
	{"name":"Ride a bike", "type":"morning","duration":"30","image":"bike.png"},
	{"name":"Birthday", "type":"afternoon","duration":"180","image":"birthday.png"},
	{"name":"Brush hair", "type":"morning","duration":"10","image":"brushing_hair.png"},
	{"name":"Call doctor", "type":"others","duration":"10","image":"call.png"},
	{"name":"Chat", "type":"others","duration":"60","image":"chat.png"},
	{"name":"Clean", "type":"afternoon","duration":"60","image":"cleaning150x150.jpg"},
	{"name":"Hang clothes", "type":"morning","duration":"40","image":"Clothesline.png"},
	{"name":"Cook", "type":"others","duration":"60","image":"cookinf2.png"},
	{"name":"Dance class", "type":"others","duration":"90","image":"dance150x150.jpg"},
	{"name":"Walk dog", "type":"others","duration":"25","image":"dog.png"},
	{"name":"Draw", "type":"others","duration":"90","image":"draw.png"},
	{"name":"Dress", "type":"Morning","duration":"20","image":"dress.png"},
	{"name":"Eat", "type":"others","duration":"60","image":"eat.png"},
	{"name":"Fishing", "type":"others","duration":"240","image":"fishing150x150.jpg"},
	{"name":"Football", "type":"afternoon","duration":"120","image":"football.png"},
	{"name":"Radio", "type":"others","duration":"60","image":"listeningRadio150x150.jpg"},
	{"name":"Hairdresser's", "type":"others","duration":"120","image":"peluqueria.png"},
	{"name":"Roller skate", "type":"afternoon","duration":"90","image":"roller150x150.jpg"},
	{"name":"Go to karaoke", "type":"afternoon","duration":"120","image":"sing150x150.jpg"},
	{"name":"Go to bed", "type":"night","duration":"540","image":"sleep.png"},
	{"name":"Go shopping", "type":"others","duration":"60","image":"supermarket.png"},
	{"name":"Swim", "type":"others","duration":"50","image":"swiming.png"},
	{"name":"Travel", "type":"others","duration":"60","image":"travell.png"},
	{"name":"Watch TV", "type":"afternoon","duration":"120","image":"wahtchTV150x150.jpg"},
	{"name":"Excursion", "type":"others","duration":"360","image":"walkCamping.png"},
	{"name":"Washing clothes", "type":"others","duration":"65","image":"wash_clothes.png"},
	{"name":"Washing dishes", "type":"others","duration":"20","image":"wash_dish.png"},
	{"name":"Studying", "type":"others","duration":"120","image":"works150x150.jpg"}




	],
	"days":[
	{"date":"2014-03-05","activities":[
	{"name":"Brush teeth", "type":"morning","duration":"10","image":"brushing_teeth.jpg"},	
	{"name":"Shower", "type":"morning","duration":"20","image":"shower.png"},
	{"name":"Excursion", "type":"others","duration":"360","image":"walkCamping.png"},
	{"name":"Go to bed", "type":"night","duration":"540","image":"sleep.png"}
	]},		
	{"date":"2014-03-15","activities":[
	{"name":"Brush teeth", "type":"morning","duration":"60","image":"sample.jpg","startTime": "Teu Mar 18 2014 08:00:00"},	
	{"name":"Shower", "type":"morning","duration":"30","image":"sample.jpg","startTime": "Teu Mar 18 2014 09:30:00"},
	{"name":"Brush teeth", "type":"morning","duration":"105","image":"sample.jpg","startTime": "Teu Mar 18 2014 10:15:00"},	
	{"name":"Shower", "type":"morning","duration":"60","image":"sample.jpg","startTime": "Teu Mar 18 2014 12:00:00"},	
	{"name":"Shower", "type":"morning","duration":"45","image":"sample.jpg","startTime": "Teu Mar 18 2014 13:15:00"},
	{"name":"Brush teeth", "type":"morning","duration":"60","image":"sample.jpg","startTime": "Teu Mar 18 2014 14:00:00"},	
	{"name":"Shower", "type":"morning","duration":"15","image":"sample.jpg","startTime": "Teu Mar 18 2014 15:15:00"},
	{"name":"Brush teeth", "type":"morning","duration":"90","image":"sample.jpg","startTime": "Teu Mar 18 2014 16:00:00"},

	]},
	{"date":"2013-03-06","activities":[
	{"name":"Brush teeth", "type":"morning","duration":"10","image":"brushing_teeth.jpg"},	
	{"name":"Shower", "type":"morning","duration":"20","image":"shower.png"},
	{"name":"Brush teeth", "type":"morning","duration":"10","image":"test.jpg"},	
	{"name":"Shower", "type":"morning","duration":"20","image":"test2.jpg"},
	{"name":"Brush teeth", "type":"morning","duration":"10","image":"test.jpg"},	
	{"name":"Go to bed", "type":"night","duration":"540","image":"sleep.png"}
	]}
	]
};
