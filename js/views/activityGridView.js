var ActivityGridView = function(container,main,model){

		this.container = container;
    	//$(container).hide();

    	this.displayActivities = function(){
    		activities = model.getActivities();
    		container.html(""); //Clear container

    		var activityGrid  = document.createElement('div');
			activityGrid.className = "activityGrid";


			container.append(activityGrid); // add the Grid div to view div

			var activityGridList = document.createElement('ul');
			activityGridList.className = "activityGridList";

			$(activityGrid).append(activityGridList);

			// Start adding activity items to activityGridList
			for (var i=0; i < 10; i++){
			 var activity = activities[i];
			var activityItem = document.createElement('li');
			activityItem.className = "activityItem";
			activityItem.id = "id1";

			$(activityGridList).append(activityItem);

			             var img = $(document.createElement('img'));
							img.attr('src', "images/" + "sample.jpg"); // replace with activity.name
							img.attr('alt', "activityItem");
							img.attr('id', "act42");
							img.addClass("activityImg");
							 
            
							$(activityItem).append(img);

			}//end adding activity items

    	}
    		    

}