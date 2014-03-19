var ActivityGridView = function(container,main,model){

		this.container = container;
    	//$(container).hide();

    	this.displayActivities = function(activities){
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
				var activityItem = $(document.createElement('li'));
					//var activityItem = document.createElement('li');
					//activityItem.className = "activityItem";
				activityItem.addClass("activityItem");
				activityItem.addClass(activity.typeChecker(activity.type));
                activityItem.attr('id', "activityId-" + activity.id); //Ids can not be numeric

			    var img = $(document.createElement('img'));
				img.attr('src', "images/" + activity.image); // replace with activity.name
				img.attr('alt', "activityItem");
				img.attr('id', "activityId-" + activity.id);
				img.addClass("activityImg");
				$(activityItem).append(img);

				//ActivityItem label
				var activityItemLabel = $(document.createElement('p'));
				activityItemLabel.addClass("activityItemLabel");
				activityItemLabel.html(activity.name);
				$(activityItem).append(activityItemLabel);

				$(activityGridList).append(activityItem);
			}//end adding activity items

			    $(".activityImg").disableSelection();

    			$(".activityGridList").disableSelection();
    			$(".activityGridList").sortable({
  					connectWith: '#desc',
  					placeholder: 'activityItem placeholder',
  					helper: 'clone',
					});

    				$(".activityGridList").droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        accept: '.activityItem',
        drop: function(event, ui) {
                var item = $(ui.draggable);
                console.log("Sorted ID:"+item.prop('id'));
            if (item.hasClass('activityItem'))
            	console.log("Useless If-statement");
                return;
                                 }
        });

 


    	}
    		    
        




}
