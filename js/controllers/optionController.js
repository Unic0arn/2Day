var OptionController = function(view, main, model){

    view.displayOption(model.getActivities());

	this.update = function(arg){
		view.displayOption(model.getActivities());
		setSortable();
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


			//Added this like in activityGridView, even though Options may not need to be sortable.
			var setSortable = function(){

			    $(".activityImg").disableSelection();

    			$(".optionGridList").disableSelection();
    			$(".optionGridList").sortable({
  					connectWith: '#nothing',
  					placeholder: 'activityItem placeholder',
  					helper: 'clone',
					});

    			$(".optionGridList").droppable({
                    activeClass: "ui-state-default",
                    hoverClass: "ui-state-hover",
                    accept: '.activityItem',
                    drop: function(event, ui) {
                    var item = $(ui.draggable);
                    //console.log("Sorted ID:"+item.prop('id'));
                if (item.hasClass('activityItem'))
            	    //console.log("Useless If-statement");
                    return;
                                 }
        		});
		}



}
