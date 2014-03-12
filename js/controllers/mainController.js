var MainController = function(model) {

	// The MainController is a communication hub between the view controllers and the model.
	
	// variable declarations -------------------------------------------------------------------------------

	//var exampleVariable;
	var views = []; //Array-list thingy for storing all view objects

	// BEGIN View & Controller declarations -------------------------------------------------------

		//And create the needed controllers and views
	/* EXAMPLE (Copy paste these 3 rows for each view/controller and rename:
	// --- Create an object variable that is an instance of the Function/object NameView, pass 
	// --- the HTML container to the function. 
	var nameView = new NameView($("#nameView"));
	// --- Create an instance of the controller for this view and pass along: 
		// view object with HTML(DOM)-reference,
		// main controller (so that the other controllers can reach functions here) and
		// the model (so the controllers can reach it).
	var nameViewController = newNameViewController(nameView,this, model);
	// --- Put this view object in the views Array-list thingy and give it a key with the same name.
	views['nameView'] = nameView;
		*/

	var activityGridView = new ActivityGridView($("#activityGridView"),this,model);
	var activityGridController = new ActivityGridController(activityGridView,this,model);
	views['activityGridView'] = activityGridView;


	var dayView = new DayView($("#dayView"),this,model); //Don't we need to send this and model to view?
	var dayViewController = new DayViewController(dayView,this,model);
	views['dayView'] = dayView;

	
	
	
	/*
	var selectorView = new SelectorView($("#selectorView"),this, model);
	var selectorViewController = new SelectorViewController(selectorView,this, model);
	views['selectorView'] = selectorView;
	
	var cartView = new CartView($("#cartView"),this, model);
   	var cartViewController = new CartViewController(cartView,this, model);
	views['cartView'] = cartView;
	*/
	
	//Test
	activityGridView.displayActivities();


	// END View declarations --------------------------------------------------------------------------------


	// Functions that can be called from all controllers. ---------------------------------------------------
	
	// This function should probably be modified to return selected activityId.
	


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
	//this.switchView('dayView')
	// Functions for updating data from the model to view. -------------------------------------------------

	//These are just examples from lab4. Need to be modified to suit our views.
/*
	this.updateConfirmation = function(){
		overviewViewController.update();
	}

	this.updateRecipe = function(){
		fullRecipeViewController.update();
	}

	}
	
	this.updateDishView = function(dishId){
	//Update Dish view
		selectedDishId = dishId;
		dishView.displayDish(selectedDishId);
	}
*/

}
