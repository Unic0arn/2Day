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
	
	var activityGridView = new ActivityGrid($("#activityGridView"),this,model);

	var selectorView = new SelectorView($("#selectorView"),this, model);
	var selectorViewController = new SelectorViewController(selectorView,this, model);
	views['selectorView'] = selectorView;
	
	var cartView = new CartView($("#cartView"),this, model);
   	var cartViewController = new CartViewController(cartView,this, model);
	views['cartView'] = cartView;
	
	var dishView = new DishView($("#dishView"),this, model);
   	var dishViewController = new DishViewController(dishView,this, model);
	views['dishView'] = dishView;
	
    var dinnerConfirmationView = new DinnerConfirmationView($('#dinnerConfirmationView'), this, model);
    var dinnerConfirmationViewController = new DinnerConfirmationViewController(dinnerConfirmationView, this, model);
	views['dinnerConfirmationView'] = dinnerConfirmationView;
	
	var overviewView = new OverviewView($('#overviewView'), this, model);
    var overviewViewController = new OverviewViewController(overviewView, this, model);
	views['overviewView'] = overviewView;

	var fullRecipeView = new FullRecipeView($('#fullRecipeView'), this, model);
    var fullRecipeViewController = new FullRecipeViewController(fullRecipeView, this, model);
	views['fullRecipeView'] = fullRecipeView;	
	

	// END View declarations --------------------------------------------------------------------------------


	// Functions that can be called from all controllers. ---------------------------------------------------
	
	// This function should probably be modified to return selected activityId.
	this.getSelectedDishId = function() {return selectedDishId;};


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
	

	// Functions for updating data from the model to view. -------------------------------------------------

	//These are just examples from lab4. Need to be modified to suit our views.

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


}
