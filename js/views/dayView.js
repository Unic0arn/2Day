var DayView = function(container){

	this.container = container;
	
	this.displayDay = function(day){
		$('#dayView').html(""); //Empty current div.

		var row = $(document.createElement('div'));
		row.addClass('row');


		var divSun = $(document.createElement('div'));
		divSun.addClass("col-md-12");
        divSun.attr('id','sun');

		var divSchedule = $(document.createElement('div'));
		divSchedule.addClass("col-md-12");
        divSchedule.attr('id','daySchedule');

        var divScheduleContainer = $(document.createElement('div'));
		divScheduleContainer.addClass("divScheduleContainer");


		var pxPerMin = 2;

		
		//var containerWidth = $(".activity").length * parseInt($(".activity").css('width')) +  $(".activity").length * (parseInt($(".activity").css('margin-left')) + parseInt($(".activity").css('margin-right')));
		//console.log(day);
        for(var i=0; i < day.activities.length ; i++){
        	var activity = day.activities[i];
        	var divActivity = $(document.createElement('div'));
        	divActivity.addClass("activity");
        	var img = $(document.createElement('img'));
		 	img.attr('src', "images/" + activity.image);
			img.addClass("dayImage");

        	divActivity.append(getTimeFormatted(activity.startTime))
			divActivity.append(img);
			divActivity.width(activity.duration * pxPerMin); 

			divScheduleContainer.append(divActivity);

			if(i+1 < day.activities.length){
				var breakTilNext = day.activities[i + 1].startTime - activity.getEnd();

				var divBreak = $(document.createElement('div'));
				divBreak.addClass("break");
				divBreak.width(toMins(breakTilNext) * pxPerMin);
				divScheduleContainer.append(divBreak);
			}
        }

        var overlay = $(document.createElement('div'));
        overlay.attr('id','scheduleOverlay');
        divSchedule.append(overlay);


        container.append(row.clone().append(divSun));
        container.append(row.clone().append(divSchedule));
        divSchedule.append(divScheduleContainer);

/*        
			var activityMargins =  $(".activity").length * (parseInt($(".activity").css('margin-left')) + parseInt($(".activity").css('margin-right')));
			var breakMargins =  $(".break").length * (parseInt($(".break").css('margin-left')) + parseInt($(".break").css('margin-right')));
		var containerWidth = toMins(day.getDayLength()) * pxPerMin + activityMargins + breakMargins; // Minutes * 2
	*/
	
	var containerWidth = 5;
	var contents = $(".divScheduleContainer").find("div");
	for (var i=0; i < contents.length; i++){
		 containerWidth = containerWidth + $(contents[i]).outerWidth(true);
	 }
	
	$(".divScheduleContainer").width(containerWidth);
		
		var divClock = $(document.createElement('div'));
		divClock.addClass("col-md-12");
        divClock.attr('id','clock');
        divClock.html("lol");
        container.append(row.clone().append(divClock));
	}

	this.updateClock = function(time){
		var h = ( time.getHours() < 10 ? "0" : "" ) + time.getHours();
		var m = ( time.getMinutes() < 10 ? "0" : "" ) + time.getMinutes();
		var s = ( time.getSeconds() < 10 ? "0" : "" ) + time.getSeconds();
		
		$('#clock').text(h +":" + m + ":" + s);
	}
	
	this.updateScroll = function(target){
		var currentPos = $('#daySchedule').scrollLeft();

		if(currentPos < (target + 1) && currentPos > (target - 1)){
			$('#daySchedule').scrollLeft(target);
		}else{
			//console.log("Current pos: " + currentPos + " Target: " + target + " Diff: " + (target-currentPos));
			if(target - currentPos > 0){
				var newPos = currentPos + 1;
			}else{
				var newPos = currentPos - 1;
			}
			$('#daySchedule').scrollLeft(newPos);
		}	
	}
	this.updateOverlay = function(target){
		$('#scheduleOverlay').width(target);
	}

	this.getScheduleContainer = function(){
		return $('.divScheduleContainer');
	}

}


