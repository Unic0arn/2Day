var ActivityGridView = function(container){

	this.container = container;
    	//$(container).hide();

	this.displayActivities = function(activities,repActivity){
		var activity;
		//var activityGrid  = document.createElement('div');
	if(activities == null){
			activity = repActivity;
			//$('#activityGridList').append(activity.createCard(activity));
			$('#activityGridList:last-child').append(activity.createCard(activity));
			//$('#activityGrid ul').append(activity.createCard(activity));
			//activity.createCard(activity).append('#activityGridList');
	} 		//Check if this is a total repaint or just a replentishment
	else{
			/* For some reason this is called twice? So just emptying activityGrid is not enough,
			    have to clear the container or there will be two lists...*/
			container.html("");
			//$('#activityGrid ul').empty();
			//If not null, use activities array to repaint and clear.

		var activityGrid = $(document.createElement('div'))
		//activityGrid.className = "activityGrid";
		activityGrid.addClass("activityGrid");
		activityGrid.attr('id',"activityGrid");
		container.append(activityGrid); // add the Grid div to view div

		//var activityGridList = document.createElement('ul');
		var activityGridList = $(document.createElement('ul'));
		//activityGridList.className = "activityGridList";
		activityGridList.addClass("activityGridList");
		activityGridList.attr('id',"activityGridList");


		// Start adding activity items to activityGridList
		for (var i=0; i < activities.length; i++){
			activity = activities[i];
			$(activityGridList).append(activity.createCard(activity));
		}//end adding activity items
		
		$(activityGrid).append(activityGridList);
	} 	

		


	}
}
