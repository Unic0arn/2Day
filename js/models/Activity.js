var Activity = function(_id,_name,_type,_duration,_image){
	this.id = _id
	this.name = _name;
	this.type = _type;
	this.duration = _duration;
	this.startTime;
	this.image = _image;

	this.changeDuration = function(newDuration){
		this.duration = newDuration;
	}
	this.setStartTime = function(newTime){
		this.startTime = newTime;
	}

	this.getEnd = function(){
		return new Date(this.startTime.getTime() + this.duration*60000)
	}
	
	this.setColour = function(activityType){
		// We shall use this to pass the type of activity and get a colour code in return.
		// needed by ActivityGridView, Planenr view and perhaps DayView?
		
		//if
		//Switch
	} 
}