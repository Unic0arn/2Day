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
	this.removeActivity = function(_name){
		for (var i=0; i < activities.length; i++){
			if(activities[i].name==_name){
				activities.splice(i,1);
				for (var j=0; j < days.length; j++){
					for (var k=0; k < days[j].activities.length; k++){
						if (days[j].activities[k].name == _name){
							days[j].activities.splice(k,1);
							k = days[j].activities.length;
						}
					}
				}
				i = activities.length;
				//this.saveFile("activities.json", activities);
			}
		}
	}
	this.addActivity = function(_name,_type,_duration,_image,_description){
		var newAct = new Activity(activities.length+1,_name,_type,_duration,_image,_description);
		activities.push(newAct);
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
		if(prev){

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
		}
		else{
			chosenDay.activities.splice(0,0,newAct);
			//myDate = new Date(theDate);
			var from = chosenDay.date; 
			var numbers = from.match(/\d+/g); 
			var theDate = new Date(numbers[0], numbers[1]-1, numbers[2], 8);
			str = theDate.toString();
			console.log("This day is this day: " + chosenDay);
			newAct.setStartTime(theDate);
			for(var i = 1; i < chosenDay.activities.length; i++){
				console.log(chosenDay.activities[i].startTime + "  +  " +  newAct.duration);
				chosenDay.activities[i].startTime = new Date(chosenDay.activities[i].startTime.getTime() +  newAct.duration*60000);
			}

		}
		console.log(chosenDay.activities);
	}

	this.removeActivityToDay = function(activityId){
		for (var i=0; i < chosenDay.activities.length; i++){
			if (chosenDay.activities[i].id == activityId){
				chosenDay.activities.splice(i,1);
				break;
			}

	}
}


	/** Parses a json object and returns
	 {"name":"","type":"","duration":"","image":"","description":""}
		Return: A list of activities in the form of Activity objects. 
		*/
	var parseActivities = function(jsonActivities){
		//console.log(jsonActivities);
		var newActivities = [];
		for (var i = activities.length; i<activities.length + jsonActivities.length; i++){
			var object = jsonActivities[i];
			
			//console.log(object);
			var act = new Activity(i, object.name,object.type,object.duration,object.image,object.description);
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
	this.loadFile = function(name){
		$.ajax({
			url: "js/models/" + name,
			dataType: "json",
			async:false,
			success : function(result){
				parseDays(result.days);
				activities = parseActivities(result.activities);
			}
		});
	}
	this.saveFile = function(name, _activities){
		var jsonActivities = JSON.stringify(_activities);
		var output = [];
		for (var day in days) {
			output.push(days[day]);
		}
		var jsonDays = JSON.stringify(output);
		var jsonAll = "{\"activities\":" + jsonActivities + ", \n \"days\":" + jsonDays + "}";
		$.ajax({
			url: "class/jsonFunctions.php",
			type: "POST",
			data: { nombre : name, datos : jsonAll },
			async:false,
			success : function(result){
				alert(result);
			}
		});
		console.log("aqui");
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
	this.loadFile("activities.json");
	//parseDays(jsonObject.days)
	//activities = parseActivities(jsonObject.activities);
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
	{"name":"Brush teeth", "type":"Morning","duration":"10","image":"brushing_teeth.jpg","description":"d1"},	
	{"name":"Shower", "type":"Morning","duration":"20","image":"shower.png","description":"d2"},
	{"name":"Shave", "type":"Morning","duration":"15","image":"afeitar.png","description":"d3"},
	{"name":"Ride a bike", "type":"Morning","duration":"30","image":"bike.png","description":"d4"},
	{"name":"Birthday", "type":"Afternoon","duration":"180","image":"birthday.png","description":"d5"},
	{"name":"Brush hair", "type":"Morning","duration":"10","image":"brushing_hair.png","description":"d6"},
	{"name":"Call doctor", "type":"Others","duration":"10","image":"call.png","description":"d7"},
	{"name":"Chat", "type":"Others","duration":"60","image":"chat.png","description":"d8"},
	{"name":"Clean", "type":"Afternoon","duration":"60","image":"cleaning150x150.jpg","description":"d9"},
	{"name":"Hang clothes", "type":"Morning","duration":"40","image":"Clothesline.png","description":"d10"},
	{"name":"Cook", "type":"Others","duration":"60","image":"cookinf2.png","description":"d11"},
	{"name":"Dance class", "type":"Others","duration":"90","image":"dance150x150.jpg","description":"d12"},
	{"name":"Walk dog", "type":"Others","duration":"25","image":"dog.png","description":"d13"},
	{"name":"Draw", "type":"Others","duration":"90","image":"draw.png","description":"d14"},
	{"name":"Dress", "type":"Morning","duration":"20","image":"dress.png","description":"d15"},
	{"name":"Eat", "type":"Others","duration":"60","image":"eat.png","description":"d16"},
	{"name":"Fishing", "type":"Others","duration":"240","image":"fishing150x150.jpg","description":"d17"},
	{"name":"Football", "type":"Afternoon","duration":"120","image":"football.png","description":"d18"},
	{"name":"Radio", "type":"Others","duration":"60","image":"listeningRadio150x150.jpg","description":"d19"},
	{"name":"Hairdresser's", "type":"Others","duration":"120","image":"peluqueria.png","description":"d20"},
	{"name":"Roller skate", "type":"Afternoon","duration":"90","image":"roller150x150.jpg","description":"d21"},
	{"name":"Go to karaoke", "type":"Afternoon","duration":"120","image":"sing150x150.jpg","description":"d22"},
	{"name":"Go to bed", "type":"Night","duration":"540","image":"sleep.png","description":"d23"},
	{"name":"Go shopping", "type":"Others","duration":"60","image":"supermarket.png","description":"d24"},
	{"name":"Swim", "type":"Others","duration":"50","image":"swiming.png","description":"d25"},
	{"name":"Travel", "type":"Others","duration":"60","image":"travell.png","description":"d26"},
	{"name":"Watch TV", "type":"Afternoon","duration":"120","image":"wahtchTV150x150.jpg","description":"d27"},
	{"name":"Excursion", "type":"Others","duration":"360","image":"walkCamping.png","description":"d28"},
	{"name":"Washing clothes", "type":"Others","duration":"65","image":"wash_clothes.png","description":"d29"},
	{"name":"Washing dishes", "type":"Others","duration":"20","image":"wash_dish.png","description":"d30"},
	{"name":"Studying", "type":"Others","duration":"120","image":"works150x150.jpg","description":"d31"}
	],
	"days":[
	{"date":"2014-03-05","activities":[
	{"name":"Brush teeth", "type":"Morning","duration":"10","image":"brushing_teeth.jpg","description":"d1"},	
	{"name":"Shower", "type":"Morning","duration":"20","image":"shower.png","description":"d1"},
	{"name":"Excursion", "type":"Others","duration":"360","image":"walkCamping.png","description":"d1"},
	{"name":"Go to bed", "type":"Night","duration":"540","image":"sleep.png","description":"d1"}
	]},		
	{"date":"2014-03-15","activities":[
	{"name":"Brush teeth", "type":"Morning","duration":"60","image":"sample.jpg","startTime": "Teu Mar 18 2014 08:00:00","description":"d1"},	
	{"name":"Shower", "type":"Morning","duration":"30","image":"sample.jpg","startTime": "Teu Mar 18 2014 09:30:00","description":"d1"},
	{"name":"Brush teeth", "type":"Morning","duration":"105","image":"sample.jpg","startTime": "Teu Mar 18 2014 10:15:00","description":"d1"},	
	{"name":"Shower", "type":"Morning","duration":"60","image":"sample.jpg","startTime": "Teu Mar 18 2014 12:00:00","description":"d1"},	
	{"name":"Shower", "type":"Morning","duration":"45","image":"sample.jpg","startTime": "Teu Mar 18 2014 13:15:00","description":"d1"},
	{"name":"Brush teeth", "type":"Morning","duration":"60","image":"sample.jpg","startTime": "Teu Mar 18 2014 14:00:00","description":"d1"},	
	{"name":"Shower", "type":"Morning","duration":"15","image":"sample.jpg","startTime": "Teu Mar 18 2014 15:15:00","description":"d1"},
	{"name":"Brush teeth", "type":"Morning","duration":"90","image":"sample.jpg","startTime": "Teu Mar 18 2014 16:00:00","description":"d1"}

	]},
	{"date":"2013-03-06","activities":[
	{"name":"Brush teeth", "type":"Morning","duration":"10","image":"brushing_teeth.jpg","description":"d1"},	
	{"name":"Shower", "type":"Morning","duration":"20","image":"shower.png","description":"d1"},
	{"name":"Brush teeth", "type":"Morning","duration":"10","image":"test.jpg","description":"d1"},	
	{"name":"Shower", "type":"Morning","duration":"20","image":"test2.jpg","description":"d1"},
	{"name":"Brush teeth", "type":"Morning","duration":"10","image":"test.jpg","description":"d1"},	
	{"name":"Go to bed", "type":"Night","duration":"540","image":"sleep.png","description":"d1"}
	]}
	]
};
