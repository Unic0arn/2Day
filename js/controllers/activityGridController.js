var ActivityGridController = function(view, main, model){

	view.displayActivities(model.getActivities());

	$('#activityGridView').on('mousedown', '.activityItem', function(){
		var activityId = $(this).attr('id');
		//Broken:
		//main.setDesc(activityId);
	});

	$('#activityGridView').on('mouseup', '.activityItem', function(){
	});

	//This global update function is called the first time
	this.update = function(arg){
		view.displayActivities(model.getActivities());
		setSortable();
	}
	

	//This local update function is needed after an activity has been moved to the scheduler.
	var replentishView = function(idToAdd){
		console.log("Replentish:");
		console.log(idToAdd);

		view.displayActivities(null, model.getActivity(idToAdd));
		setSortable();
	}

	var setSortable = function(){
		$(".activityImg").disableSelection();
		$(".activityGridList").disableSelection();
		$(".activityGridList").sortable({
		connectWith: '.activityRowList',
		placeholder: 'activityItem placeholder',
			//helper: "clone",
			helper: 'original',
			cursor: 'move',
			containment: '#schedulingContainer',
			start: function(event, ui) {
				
				//console.log("Start:");
				//console.log(main.stripId(ui.item[0].id));
              console.log(event);
          },
          remove: function(event, ui) {
          		console.log("Remove:");
          		console.log(main.stripId(ui.item[0].id));
          		var removedId = main.stripId(ui.item[0].id);
          	replentishView(removedId);
          	//console.log(ui.helper);
          }
      }); 
	}


}
