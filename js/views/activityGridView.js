var ActivityGridView = function(container,main,model){

		this.container = container;
    	//$(container).hide();

    	this.displayActivities = function(){
    		activities = model.getActivities();
    		console.log("From agv:")
    		console.log(container.html)
    		container.html(""); //Clear container

    		var activityGrid  = document.createElement('div');
			activityGrid.className = "activityGrid";


			container.append(activityGrid); // add the Grid div to view div

			var activityGridList = document.createElement('ul');
			activityGridList.className = "activityGridList";

			$(activityGrid).append(activityGridList);

			// Start adding activity items to activityGridList
			for (var i=0; i < activities.length; i++){
			 	var activity = activities[i];
			 	console.log(activity)
				var activityItem = document.createElement('li');
				activityItem.className = "activityItem";
				activityItem.id = "activityID-" + activity.id;

				$(activityGridList).append(activityItem);

			    var img = $(document.createElement('img'));
				img.attr('src', "images/" + activity.image); // replace with activity.name
				img.attr('alt', "activityItem");
				img.attr('id', "activityID-" + activity.id);
				img.addClass("activityImg");
				 

				$(activityItem).append(img);

			}//end adding activity items

    	}
    		    

}