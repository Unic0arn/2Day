var MainController = function(model) {

	// The MainController is a communication hub between the view controllers and the model.
	
	// variable declarations -------------------------------------------------------------------------------
	var views = []; //Array for storing all view objects
	var mc = this;

	// BEGIN View & Controller declarations -------------------------------------------------------
	var schedulerView = new SchedulerView($("#schedulerView"));
	var schedulerController = new SchedulerController(schedulerView, this, model);
	views['schedulerView'] = schedulerView;
	model.addObserver(schedulerController);

	var activityGridView = new ActivityGridView($("#activityGridView"));
	var activityGridController = new ActivityGridController(activityGridView, this, model);
	views['activityGridView'] = activityGridView;
	model.addObserver(activityGridController);

	var dayView = new DayView($("#dayView"),this,model);
	var dayViewController = new DayViewController(dayView, this, model);
	views['dayView'] = dayView;
	model.addObserver(dayViewController);
	
	var sidebarView = new SidebarView($("#sidebarView"));
	var sidebarController = new SidebarController(sidebarView, this, model);
	views['sidebarView'] = sidebarView;
	
	var optionView = new OptionView($("#optionsView"));
	var optionController = new OptionController(optionView, this, model);
	views['optionView'] = optionView;
	model.addObserver(optionController);



	viewDoms = [$("#welcomeView"),$("#mainView"),$("#dayView"),$("#optionsView"),$("#aboutUsView"),$("#contactUsView")];

	this.hideAll = function(){
		for(var view in viewDoms){
			viewDoms[view].hide();
		}
	}
	this.hideAll();
	$("#mainView").show();
	//$("#welcomeView").show();

	// Controls for the Welcome View
	$('#helpVideo').hide();

	$('#headerView').on('click', 'a', function(evt){
		mc.hideAll();
		model.update();
		$(evt.target.name).show();
	});
	$('#start').on('click', '#startButton', function(evt){
		mc.hideAll();
		$("#mainView").show();
	});
		$('#start').on('click', '#helpButton', function(evt){
		$('#helpVideo').toggle();
		$('#welcomeLogo').toggle();
	});

	
	//Test
	//activityGridView.displayActivities();


	// END View declarations --------------------------------------------------------------------------------


	// Functions that can be called from all controllers. ---------------------------------------------------
	
	
	// Three functions for switching, showing and hiding views.---------------------------------------------

	this.switchView = function(newView){
		for(var key in views){
			views[key].container.hide();
		}
		views[newView].container.show();
	}

	this.showView = function(view){
		console.log(view);
		views[view].container.show();
	}

	this.hideView = function(view){
		console.log(view);
		views[view].container.hide();
	
	}
	
	// Functions for updating data from the model to view. -------------------------------------------------

	// This function gets id of clicked activity in activity grid view and sends to the sidebar desc.
	this.setDesc = function(activityId,edit){
		sidebarController.updateDesc(this.stripId(activityId),edit);
	}

	this.stripId = function(activityId){
		var aId = activityId.replace("activityId-","");
		//console.log(aId);
		return aId
	}


}

