var DayViewController = function(view, main, model){
	
	var initDay = function(_day){
		model.chooseDay(_day);
		var day = model.getDay();
		
		console.log("Earliest: ") ;
		console.log(day.getStart());
		//ReferenceError: invalid assignment left-hand side
		/*
		if(typeof day = 'Day'){
			console.log("Day existed, creating view");


		
		} */
	}
	initDay('2014-03-15');

	setInterval(function() {
		//var time = new Date("Sat Mar 15 2014 09:00:00");
		//var time = new Date("Sat Mar 15 2014 15:00:00");
		//var time = new Date("Sat Mar 15 2014 17:07:00");
		//var time = new Date("Sat Mar 15 2014 20:07:00");
		var time = new Date();
    	view.updateClock(time);

    	var day = model.getDay();
    	var daystart = day.getStart();
    	var dayend  = day.getEnd();
    	var daylength = dayend - daystart;
    	var farday = time - daystart;
    	var maxWidth = view.getScheduleContainer().width();
    	if(time > dayend){
    		overlay = maxWidth;
    	}else if(time < daystart){
    		overlay = 0;
    	}else{
    		overlay = (maxWidth * farday) / daylength;
    	}
/*		console.log(scrollPlace);
    	console.log("Start: " + getTimeFormatted(daystart) + " End: " + getTimeFormatted(dayend) + " Length of day: " + daylength);
    	console.log("Current time: " + getTimeFormatted(time) + " which is " + farday + "ns since daystart" + ", widh of container is: " + maxWidth);*/
    	scrollPlace = findScrollPlace(day,view,time);
    	view.updateScroll(scrollPlace);
    	view.updateOverlay(overlay);
    }, 10);
	this.update = function(arg){
		console.log(model.getDay());
		view.displayDay(model.getDay());
	}
}
function findScrollPlace(day, view,time){
	var inner = view.getScheduleContainer();
	var outer = inner.parent();
	var scrollArea = (inner.width() - outer.width())
    var daystart = day.getStart();
    var dayend  = day.getEnd();
    var daylength = dayend - daystart;
    var tar = (time - daystart);
	var target  = (tar / daylength) * scrollArea;	
	return target;
}
function getTimeFormatted(date){
	var h = ( date.getHours() < 10 ? "0" : "" ) + date.getHours();
	var m = ( date.getMinutes() < 10 ? "0" : "" ) + date.getMinutes();
	var s = ( date.getSeconds() < 10 ? "0" : "" ) + date.getSeconds();
	return h + ":" + m + ":" + s;
}

function toMins(time){
	return (time / (1000 * 60));
}
