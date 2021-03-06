var OptionController = function(view, main, model){
	var newActivity = true;
	var preActivity = "";
    view.displayOption(model.getActivities());

	this.update = function(arg){
		view.displayOption(model.getActivities());
		setSortable();
	}
	$('#optionsView').on('change', '#upFoto', function(){
		var inputFileImage = document.getElementById("upFoto");
		var file = inputFileImage.files[0];
		var data = new FormData();
		data.append('archivo',file);
		$.ajax({
			url:'class/upload.php',
			type:'POST',
			contentType:false,
			data:data,
			processData:false,
			cache:false,
			success : function(result){
				var name = JSON.parse(result);
				$("#imgSelected").attr("src","images/" + name["name"]);
			}});
	});
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
				if (preActivity.length != 0){
					model.removeActivity(preActivity);
					model.saveFile("activities.json", model.getActivities());
					view.displayOption(model.getActivities());
				}
				else{
					alert("There was an error");
				}
			}
		}
		
	}); 
	$('#optionsView').on('click', '#btnSave', function(){
		if (newActivity){
			if ($("#nameActivity").val() == "" || $("#opciones option:selected").text() == "- Select a type -" || $("#duration").val() == ""
				|| $("#upFoto")[0].files[0] === undefined){
				alert("You need to complete fields with *");
			}
			else{
				model.addActivity($("#nameActivity").val(), $("#opciones option:selected").text(), 
				$("#duration").val(), $("#upFoto")[0].files[0].name, $("#descriptionArea").val());
				model.saveFile("activities.json", model.getActivities());
				view.displayOption(model.getActivities());
			}
		}
		else{
			if ($("#nameActivity").val() == "" || $("#opciones option:selected").text() == "- Select a type -" || $("#duration").val() == ""){
				alert("You need to complete fields with *");
			}
			else{
				var editActivity = confirm("Are you sure that do you want to edit this activity?");
				if (editActivity){
					var imageSource;
					if ($("#upFoto")[0].files[0] === undefined){
						imageSource = $("#imgSelected").attr("src").substring(7);
					}
					else{
						imageSource = $("#upFoto")[0].files[0].name;
					}
					model.removeActivity(preActivity);
					model.addActivity($("#nameActivity").val(), $("#opciones option:selected").text(), 
					$("#duration").val(), imageSource, $("#descriptionArea").val());
					model.saveFile("activities.json", model.getActivities());
					view.displayOption(model.getActivities());
				}
			}	
		}
	}); 
	$('#optionsView').on('click', '#btnCancel', function(){
		$("#imgSelected").attr("src","images/dia.png");
	});
	$('#optionsView').on('click', 'li', function(){
		newActivity = false;
		$("#btnCancel").click();
		var image = $(this).children('img');
		var label = $(this).children('label');
		var data = JSON.parse($(this).children('p').text());
		
		$("#imgSelected").attr("src",image.attr('src'));
		$("#nameActivity").val(label.text());
		$("#descriptionArea").val(data.description);
		$("#opciones option:contains('" + data.type + "')").prop("selected", true);
		$("#duration").val(data.duration);
		preActivity = $("#nameActivity").val();
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
