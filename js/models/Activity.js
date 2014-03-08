var Activity = function(_name,_type,_duration,_image){
	this.name = _name;
	this.type = _type;
	this.duration = _duration;
	this.starttime;
	this.image = _image;

	this.changeDuration = function(newDuration){
		duration = newDuration;
	}
	this.setStartTime = function(newStartTime){
		starttime = newStartTime;
	}
}