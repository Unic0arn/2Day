var OptionController = function(view, main, model){
	var newActivity = true;
    view.displayOption(model.getActivities());

	this.update = function(arg){
		view.displayOption(model.getActivities());
		setSortable();
	}

	$('#optionsView').on('mousedown', '.activityItem', function(){
		var activityId = $(this).attr('id');
		main.setDesc(activityId);
	});
	$('#optionsView').on('click', '#btnAdd', function(){
		newActivity = true;
		$("#btnCancel").click();
		$("#imgSelected").attr("src","images/dia.png");
	});   
	$('#optionsView').on('click', '#btnDelete', function(){
		if (newActivity){
			alert("For delete an activity, first you need yo pulse an activity"); 
		}
		else{
			var deleteActivity = confirm("Are you sure that do you want to delete this activity?");
			if (deleteActivity){
				
			}
		}
		
	}); 
	$('#optionsView').on('click', '#btnSave', function(){
		if (newActivity){
			
		}
		else{
			var editActivity = confirm("Are you sure that do you want to edit this activity?");
			if (editActivity){
				
			}
		}
	}); 
	$('#optionsView').on('click', '#btnCancel', function(){
		$("#imgSelected").attr("src","images/dia.png");
	});
	$('#optionsView').on('click', 'li', function(){
		newActivity = false;
		var image = $(this).children('img');
		var label = $(this).children('label');
		var data = JSON.parse($(this).children('p').text());
		
		$("#imgSelected").attr("src",image.attr('src'));
		$("#nameActivity").val(label.text());
		$("#descriptionArea").val(data.description);
		$("#opciones option:contains('" + data.type + "')").prop("selected", true);
		$("#duration").val(data.duration);
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
