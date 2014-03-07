var Activity = function(_name,_type,_duration,_image){
	var name = _name;
	var type = _type;
	var duration = _duration;
	var starttime;
	var image = _image;

	this.getName = function(){return name;}
	this.getType = function(){return type;}
	this.getDuration = function(){return duration;}
	this.getStarttime = function(){return starttime;}
	this.getImage = function(){return image;}
	this.changeDuration = function(newDuration){
		duration = newDuration;
	}
	this.setStartTime = function(newStartTime){
		starttime = newStartTime;
	}
}