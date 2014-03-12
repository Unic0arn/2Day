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
				console.log(a.startTime);
				if(a.startTime < earliest){
					earliest = a.startTime;
				}

			});
			return earliest;
		}else{
			return start;
		}
	}

	this.getEnd = function(){
		if(end == null){
			var latest = new Date(2015,12);
			console.log(this.activities);
			$.each(this.activities, function(i, a){
				console.log(a.startTime);
				if(a.startTime > latest){
					latest = a.startTime;
				}

			});
			return latest;
		}else{
			return start;
		}
	}


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
	this.setActivities = function(newActivities){this.activities = newActivities;}
}