var OptionController = function(view, main, model){

    view.displayOption(model.getActivities());

	this.update = function(arg){
		view.displayOption(model.getActivities());
	}

	$('#optionsView').on('mousedown', '.activityItem', function(){
		var activityId = $(this).attr('id');
		main.setDesc(activityId);
	});
	$('#optionsView').on('click', '#bottonDown', function(){
		alert("add");
	});   
	$('#optionsView').on('click', '#bottonM', function(){
		alert("delete");
	}); 
	$('#optionsView').on('click', '#bottonUp', function(){
		alert("edit");
	}); 
	$('#optionsView').on('click', 'li', function(){
		var image = $(this).children('img');
		var label = $(this).children('p');
		
		$("#imgSelected").attr("src",image.attr('src'));
		$("#nameActivity").val(label.text());
	});
}
