var SidebarView = function(container){

	this.init = function(){
		var row = $(document.createElement('div'));
		row.addClass('row');
        
		var divDesc = $(document.createElement('div'));
		divDesc.addClass("col-md-12");
        divDesc.attr('id','desc');
        divDesc.append("<h2> Information </h2> <p>Click an activity card to display information about it here.</p> <p> You may also edit the duration of activities in the scheduler here. </p>");
      


		var divCal = $(document.createElement('div'));
        divCal.attr('id','cal');

		var divBtn = $(document.createElement('div'));
        divBtn.attr('id','buttonArea');

        var btnSave = $(document.createElement('button'));
        divBtn.append(btnSave);
        btnSave.attr('id', 'saveButton');
        btnSave.addClass("rojo");
        btnSave.attr('download', '2Day-data.json');
        btnSave.html('Download');

        var uploadForm = $(document.createElement('form'));
 
        var input = $(document.createElement('input'));
        input.attr('type', 'file');
        input.attr('name', 'file');
        input.attr('id', 'fileupload');
        input.addClass("");
        uploadForm.append(input);
        
        var btnUpload = $(document.createElement('button'));
        btnUpload.attr('id', 'uploadButton');
        btnUpload.addClass("rojo");
        btnUpload.html('Upload');

        uploadForm.append(btnUpload);

        //container.append(row.clone().append(divLogo));
        container.append(row.clone().append(divDesc));
        container.append(row.clone().append(divCal));

        container.append(row.clone().append(divBtn));
        container.append(row.clone().append(uploadForm));


        //Trash-can

        var trashContainer = $(document.createElement('div'));

            trashContainer.addClass("container");
            trashContainer.addClass("trashContainer");
            trashContainer.attr('id', 'trashContainer'); 
            var trashCanImage = $(document.createElement('img'));
            trashCanImage.attr('src', "images/" + "trash.png");
            trashCanImage.attr('alt', "activityItem");
            trashCanImage.attr('id', "trashCanImage");
            $(trashContainer).append(trashCanImage);
            container.append(row.clone().append(trashContainer));

            $("#trashContainer").sortable({
            items: '> img:not(#trashCanImage)',
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            });

            $("#trashContainer").droppable({
            items: '> img:not(#trashCanImage)',
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            accept: '.activityItem',
            drop: function(event, ui) {
                ui.helper.remove();
                }
            });



	}

    this.updateDescView = function(activity,edit){
        $('#desc').html("");

        var activityItemTitle = $(document.createElement('p'));
        activityItemTitle.addClass("activityItemTitle");
        activityItemTitle.html("<h2>"+activity.name+"</h2>");
        $('#desc').append(activityItemTitle);

        var activityItemType = $(document.createElement('p'));
        activityItemType.html("Type: "+activity.type);
        $('#desc').append(activityItemType);

        var activityItemDescription = $(document.createElement('p'));
        activityItemDescription.html("Description: "+activity.description);
        $('#desc').append(activityItemDescription);

        if (edit == true){
            var inputDuration = $(document.createElement('input'));
            inputDuration.type = "text";
            inputDuration.addClass("form-control");
            inputDuration.attr('id','durationField');
            inputDuration.val(activity.duration);
             $('#desc').append(inputDuration);

            var btnSaveAct = $(document.createElement('button'));
            btnSaveAct.val(activity.id);
            btnSaveAct.addClass("rojo");
            btnSaveAct.attr('id', 'saveActivity');
            btnSaveAct.html('Save Activity');
            $('#desc').append(btnSaveAct);
        }
        else
        {
            var activityItemDuration = $(document.createElement('p'));
            activityItemDuration.html("Duration: " +activity.duration+ " min");
            $('#desc').append(activityItemDuration);

            var secretTip = $(document.createElement('p'));
            secretTip.html("Tip: To edit duration, please drop the activity into the scheduler.");
            $('#desc').append(secretTip);
        }
    }

	this.getCal = function(){
		return $("#cal");
	}
}