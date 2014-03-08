$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	
	//We instantiate our model
	var model = new MainModel();
	var mainController = new MainController(model);



	//This part is a test for Gridster. Should move to GridView!
	var gridster;

      $(function() {
          gridtster = $(".gridster > ul").gridster({

              widget_margins: [10, 10],
              widget_base_dimensions: [140, 140],
              min_cols: 6
          }).data('gridster');

      });

/* TEST AREA


	// Simplyscroll autoscrolling 
			$(function() { //on DOM ready 
				$("#daySchedule").simplyScroll({
					frameRate:0.1,
					speed:1,


				});
			});
  */


      //This is a test for a droppable div located in 
    /*   $(function() {
		$( "#dayView" ).draggable();
		
		
		$( "#scheduleView" ).droppable({
		drop: function( event, ui ) {
		$( this )
		.addClass( "ui-state-highlight" )
		.find( "p" )
		.html( "Dropped!" );
		}
		});
		});
*/


});	
