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
	initDay('2013-03-06');

	setInterval(function() {
		var time = new Date();
		
    	view.updateClock(time);

    	
    	var daystart = new Date(2014,2,12,14,0); //this.day.getStart();
    	var dayend  = new Date(2014,2,12,19,10);//this.day.getEnd();
    	var daylength = dayend - daystart;
    	var farday = time - daystart;
    	var maxWidth = view.getScheduleContainerWidth();
    	
    	console.log(daystart)
    	console.log(dayend)
    	scrollPlace = (maxWidth * farday) / daylength;
    	//console.log(maxWidth);
    	console.log(daylength);

    	console.log(farday);
		console.log(scrollPlace)
    	view.updateScroll(scrollPlace);
    }, 1000);

}