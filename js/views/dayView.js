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

            var divScheduleContainer = $(document.createElement('ul'));
			divScheduleContainer.addClass("divScheduleContainer");

           
            for(var i=0; i < day.activities.length ; i++){
            	var activity = day.activities[i];
            	var divActivity = $(document.createElement('li'));
            	divActivity.addClass("col-md-2 activity");
            	var img = $(document.createElement('img'));
			 	img.attr('src', "images/" + activity.image);
				img.addClass("dayImage");

            
				divActivity.append(img);
				divScheduleContainer.append(divActivity);
            }
            container.append(row.clone().append(divSun));
            container.append(row.clone().append(divSchedule));
            divSchedule.append(divScheduleContainer);
			var containerWidth = $(".activity").length * parseInt($(".activity").css('width')) +  $(".activity").length * (parseInt($(".activity").css('margin-left')) + parseInt($(".activity").css('margin-right')));
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
	
	this.updateScroll = function(place){
		$('#daySchedule').scrollLeft(place);
	}

	this.getScheduleContainerWidth = function(){
		console.log($('#daySchedule').width());
		return $('#daySchedule').width();
	}
}
