var SidebarController = function(view, main, model){
	view.init();
	view.getCal().clndr({
        	startWithMonth: moment(),
        	weekOffset: 1,
        	clickEvents: {
        		click: function(target) {
        				alert(target);
        		}
        	},
        });


	$('#sidebarView').on('click', '#saveButton', function(){
		window.open('data:text/csv;charset=utf-8,' + escape(model.exportFile()));
		//model.addDishToMenu(main.getSelectedDishId());
	});
}