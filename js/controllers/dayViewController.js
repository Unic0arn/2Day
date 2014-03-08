var DayViewController = function(view, main, model){
	view.displayDay(model.getDay('2013-03-06'));
	var initDay = function(_day){
		var day = model.getDay(_day);

		//ReferenceError: invalid assignment left-hand side
		/*
		if(typeof day = 'Day'){
			console.log("Day existed, creating view");



		} */
	}


}