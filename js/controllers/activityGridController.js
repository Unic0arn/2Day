var ActivityGridController = function(view, main, model){

	view.displayActivities(model.getActivities());

	$('#activityGridView').on('mousedown', '.activityItem', function(){
		var activityId = $(this).attr('id');
		main.setDesc(activityId);
	});

	$('#activityGridView').on('mouseup', '.activityItem', function(){
		//Maybe needed later.
		/*
		var activityId = $(this).attr('id');
		alert(main.stripId(activityId));
		var bulle = model.getActivity(main.stripId(activityId));
		alert(bulle.type);
		*/

		
	});

	//This thing is called the first time
	this.update = function(arg){
		view.displayActivities(model.getActivities());
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
              console.log(event);
          },
          remove: updateView
      }); 
	}
	

	//This thing is needed after an activity has been moved.

	var updateView = function(){
		view.displayActivities(model.getActivities());
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
              console.log(event);
          },
          remove: updateView
      }); 
	}

	var setSortable = function(){

	}


}
