var DayViewController = function(view, main, model){
	
	this.day;
	var initDay = function(_day){
		this.day = model.getDay(_day);
		view.displayDay(this.day);
		console.log("Earliest: ") ;
		console.log(this.day.getStart());
		//ReferenceError: invalid assignment left-hand side
		/*
		if(typeof day = 'Day'){
			console.log("Day existed, creating view");


		
		} */
	}
	initDay('2014-03-05');

	setInterval(function() {
		var time8 = new Date("Fri Mar 14 2014 08:00:00");
		var time12 = new Date("Fri Mar 14 2014 12:00:00");
		var time17 = new Date("Fri Mar 14 2014 17:07:00");
		var time22 = new Date("Fri Mar 14 2014 22:07:00");
		var time = new Date();
    	view.updateClock(time12);

    	
    	var daystart = this.day.getStart();
    	var dayend  = this.day.getEnd();
    	var daylength = dayend - daystart;
    	var farday = time12 - daystart;
    	var maxWidth = view.getScheduleContainerWidth();
    	scrollPlace = (maxWidth * farday) / daylength;
    	//console.log("Start: " + getTime(daystart) + " End: " + getTime(dayend) + " Length of day: " + daylength);
    	//console.log("Current time: " + getTime(time) + " which is " + farday + "ns since daystart" + ", widh of container is: " + maxWidth);
    	view.updateScroll(scrollPlace);
    }, 10);

}

function getTime(date){
	var h = ( date.getHours() < 10 ? "0" : "" ) + date.getHours();
	var m = ( date.getMinutes() < 10 ? "0" : "" ) + date.getMinutes();
	var s = ( date.getSeconds() < 10 ? "0" : "" ) + date.getSeconds();
	return h + ":" + m + ":" + s;
}

function toMins(time){
	return (time / (1000 * 60));
}