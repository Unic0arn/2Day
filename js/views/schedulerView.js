var SchedulerView = function(container){

		this.container = container;

		this.thisDayActivities  = function(day){
    		container.html(""); //Clear container

    		var activityRow  = document.createElement('div');
			activityRow.className = "activityRow";


			container.append(activityRow); // add the Row div to view div

			var activityRowList = document.createElement('ul');
			activityRowList.className = "activityRowList";



			// Start adding activity items to activityRowList
			for (var i=0; i < day.activities.length; i++){

			 	var activity = day.activities[i];
				$(activityRowList).append(activity.createCard(activity));

			}//end adding activity items
			$(activityRow).append(activityRowList);
    	}



    	}
    		    

