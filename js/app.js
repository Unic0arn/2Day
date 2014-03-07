$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	
	//We instantiate our model
	var model = new MainModel();




	//This part is a test for Gridster
	var gridster;

      $(function() {
          gridtster = $(".gridster > ul").gridster({
              widget_margins: [10, 10],
              widget_base_dimensions: [140, 140],
              min_cols: 6
          }).data('gridster');
      });


});	
