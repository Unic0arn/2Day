var ActivityGridController = function(view, main, model){

    view.displayActivities(model.getActivities());
	this.update = function(arg){
		view.displayActivities(model.getActivities());
	}





}
