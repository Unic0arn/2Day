var Activity = function(_id,_name,_type,_duration,_image){
	this.id = _id
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