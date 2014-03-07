var Day = function(_date){
	this.date = _date;
	this.activities = [];



	this.getLength = function(){
		var length = 0;
		for (var activity in activites){
			length += activity.getDuration();
		}
		return length;
	}
	this.addActivity = function(activity){
		activities.push(activity);
	}

	this.getActivites = function(){
		return activites;
	}
	this.setActivities = function(newActivities){activities = newActivities;}
}