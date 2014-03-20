var SidebarController = function(view, main, model){
	view.init();
	view.getCal().clndr({
        	startWithMonth: moment(),
        	weekOffset: 1,
        	clickEvents: {
        		click: function(target) {
        				console.log(target.date._i);
        				model.chooseDay(target.date._i);
        				console.log(model.getDay());
        		}
        	},
        });

	$('#sidebarView').on('change', '#fileupload', function(evt){
		console.log(evt);
		console.log(evt.target.files[0]);
		var file = evt.target.files[0];
/*
		if (!file.type.match('*.json')) {
        	alert("wrong file type!");
      	}
*/

		var reader = new FileReader();

		reader.onload = (function(theFile) {
	        return function(e) {
	        	model.importFile(e.target.result);
	        };
      	})(file);

      	reader.readAsText(file);
	return false;
	});

	$('#sidebarView').on('click', '#saveButton', function(){
		window.open('data:text/csv;charset=utf-8,' + escape(model.exportFile()));
		//model.addDishToMenu(main.getSelectedDishId());
	});

	this.updateDesc = function(activityId){
		console.log(activityId);
		activities = model.getActivities();
		activity = activities[activityId];
		view.updateDescView(activity);	
	}
	
}
