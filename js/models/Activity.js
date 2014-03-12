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
}