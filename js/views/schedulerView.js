var SchedulerView = function(container){

		this.container = container;

		this.thisDayActivities  = function(day){
    		container.html(""); //Clear container

    		var activityRow  = document.createElement('div');
			activityRow.className = "activityRow";


			container.append(activityRow); // add the Row div to view div

			var activityRowList = document.createElement('ul');
			activityRowList.className = "activityRowList";

			$(activityRow).append(activityRowList);


			// Start adding activity items to activityRowList
			for (var i=0; i < day.activities.length; i++){
			 	var activity = day.activities[i];
				var activityItem = document.createElement('li');
				activityItem.className = "activityItem";
				activityItem.id = "activityID-" + activity.id;

				$(activityRowList).append(activityItem);

			    var img = $(document.createElement('img'));
				img.attr('src', "images/" + activity.image); // replace with activity.name
				img.attr('alt', "activityItem");
				img.attr('id', "activityID-" + activity.id);
				img.addClass("activityImg");
				 

				$(activityItem).append(img);

			}//end adding activity items

    	}



    	}
    		    

