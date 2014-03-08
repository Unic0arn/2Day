var DayView = function(container){

	this.displayDay = function(day){
		$('#dayView').html(""); //Empty current div.

			var divSun = $(document.createElement('div'));
			divSun.addClass("col-md-12");
            divSun.attr('id','sun');

			var divSchedule = $(document.createElement('div'));
			divSchedule.addClass("col-md-12");
            divSchedule.attr('id','daySchedule');

            var divScheduleContainer = $(document.createElement('ul'));
			divScheduleContainer.addClass("divScheduleContainer");

            console.log(day);
            for(var i=0; i < day.activities.length ; i++){
            	var activity = day.activities[i];
            	var divActivity = $(document.createElement('li'));
            	divActivity.addClass("col-md-2 activity");
            	console.log(activity);
            	var img = $(document.createElement('img'));
			 	img.attr('src', "images/" + activity.image);
				img.addClass("dayImage");

            
				divActivity.append(img);
				divScheduleContainer.append(divActivity);
            }
            container.append(divSun);
            container.append(divSchedule);
            divSchedule.append(divScheduleContainer);


			console.log($(".activity").css('width')	);
			var containerWidth = $(".activity").length * parseInt($(".activity").css('width')) +  $(".activity").length * (parseInt($(".activity").css('margin-left')) + parseInt($(".activity").css('margin-right')));
			$(".divScheduleContainer").width(containerWidth);
			console.log(containerWidth);

	
	
	}
}
