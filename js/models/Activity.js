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
		// Lol this function turned out to be useless. We can just set a class to activityType.

		var colourClass = activityType;

		switch (activityType)
		{
  		case 'morning': console.log(activityType);
            break;
  		case 'afternoon': console.log(activityType);
            break;
  		case 'night': console.log(activityType);
            break;
  		case 'others': console.log(activityType);
            break;
  		default:  console.log(activityType);
  		colourClass = "others";
		}
		return colourClass;

	} 
}