var ActivityGridView = function(container){

	this.container = container;
    	//$(container).hide();

	this.displayActivities = function(activities,repActivity){

		//Check if this is a total repaint or just a replentishment
		if(activities == null){
		/* All I tried to do is to add one fucking object to a fucking array but it fucking doesnt fucking work so fuck this fucking shit.
		activities = [];
		activities[0].id = repActivity.id;
		activities[0].name = repActivity.name;
		activities[0].image = repActivity.image;
		activities[0].type = repActivity.type;
		activities[0].id = repActivity.id;

		alert(activities.lenght);

		//tempActivities.push(repActivity);
		//tempActivities[0] = repActivity;
		//alert(tempActivities.id);
		//var activities = activities.push(repActivity);
		//console.log(activities.lenght);
		//alert(activities[0].id);

		*/
		}
		else
 		{
  		container.html(""); //Clear container
  		//If not null, use activities array to repaint and clear.
  		}
		
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
			img.attr('src', "images/" + activity.image);
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
		

/* Notes.
    $("#fromList li").draggable('destroy').draggable({
        connectToSortable: "#toList",
        revert: "invalid",
        containment: '#equipCont',
        helper: function(e, ui) {
            return jQuery(this).clone().css('width', jQuery(this).width());
        }
    });
    $("#toList").droppable('destroy').droppable({
        drop: function(e, ui) {
            var dragClone = $(ui.draggable).clone();
            $("#toList").append(dragClone);
        }
    });
    $("ul, li").disableSelection();
*/
/*
		$(".activityGridList").droppable({
			activeClass: "ui-state-default",
			hoverClass: "ui-state-hover",
			accept: '.activityItem',
			drop: function(event, ui) {
				var item = $(ui.draggable);
				console.log("Sorted ID:"+item.prop('id'));
				if (item.hasClass('activityItem'))
					//console.log("Useless If-statement");
				return;
			}
		});
*/


	}
}
