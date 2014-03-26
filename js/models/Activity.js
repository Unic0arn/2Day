var Activity = function(_id,_name,_type,_duration,_image,_description){
	this.id = _id
	this.name = _name;
	this.type = _type;
	this.duration = _duration;
	this.startTime;
	this.image = _image;
	this.description = _description;

	this.changeDuration = function(newDuration){
		this.duration = newDuration;
	}
	this.setStartTime = function(newTime){
		this.startTime = newTime;
	}

	this.getEnd = function(){
		return new Date(this.startTime.getTime() + this.duration*60000)
	}
	


	this.createCard = function(activity){
		
			var activityItem = $(document.createElement('li'));
			
				//var activityItem = document.createElement('li');
				//activityItem.className = "activityItem";
			activityItem.addClass("activityItem");
			activityItem.addClass(activity.typeChecker(activity.type));
            activityItem.attr('id', "activityId-" + activity.id); //Ids can not be numeric
			//ActivityItem image
            var img = $(document.createElement('img'));
			img.attr('src', "images/" + activity.image);
			img.attr('alt', "activityItem");
			img.attr('id', "activityId-" + activity.id);
			img.addClass("activityImg");
			$(activityItem).append(img);

			//ActivityItem label
			var activityItemLabel = $(document.createElement('label'));
			activityItemLabel.addClass("activityItemLabel");
			activityItemLabel.html(activity.name);
			$(activityItem).append(activityItemLabel);
			
			//ActivityItem data
			var description = $(document.createElement('p'));
			description.css("display","none");
			description.html("{\"type\":\"" + activity.type + "\",\"duration\":\"" + activity.duration + 
			"\",\"description\":\"" + activity.description + "\"}");
			$(activityItem).append(description);
		
			return activityItem;
		}




	this.typeChecker = function(activityType){
		// We shall use this to pass the type of activity and get a colour code in return.
		// Had to modify this to handle upper/lowercase.

		var colourClass = activityType.toString().toLowerCase();
		console.log(colourClass);

		switch (activityType)
		{
  		case 'morning': //console.log(activityType);
  		case 'Morning':
            break;
  		case 'afternoon': //console.log(activityType);
  		case 'Afternoon':
            break;
  		case 'night': //console.log(activityType);
  		case 'Night':
            break;
  		case 'others': //console.log(activityType);
  		case 'Others':
            break;
  		default:  console.log(activityType);
  		colourClass = "undefined";
		}
		return colourClass;

	} 
}