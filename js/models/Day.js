var Day = function(_date){
	this.date = _date;
	this.activities = [];
	var start = null;
	var end = null;
	this.getStart = function(){
		if(start == null){
			var earliest = new Date(2015,12);
			console.log(this.activities);
			$.each(this.activities, function(i, a){
				if(a.startTime < earliest){
					earliest = a.startTime;
				}

			});
			start = earliest;
		}
		return start;
		
	}

	this.getEnd = function(){
		if(end == null){
			var latest = new Date(1997,12);
			$.each(this.activities, function(i, a){
				if(a.startTime > latest){
					latest = a.getEnd(); // Add the duration to time
				}
			});
			end = latest;
		}
		return end;
	}


	this.getActivitiesLength = function(){
		var length = 0;
		for (var activity in this.activites){
			length += activity.getDuration();
		}
		return length;
	}
	this.getDayLength = function(){
		return this.getEnd() - this.getStart(); 

	}
	this.addActivity = function(activity){
		activities.push(activity);
	}

	this.getActivites = function(){
		return activites;
	}
	this.setActivities = function(newActivities){this.activities = newActivities;}
}