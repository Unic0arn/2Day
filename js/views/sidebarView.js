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
        btnSave.attr('download', '2Day-data.json');
        btnSave.html('Download');

        var uploadForm = $(document.createElement('form'));
 
        var input = $(document.createElement('input'));
        input.attr('type', 'file');
        input.attr('name', 'file');
        input.attr('id', 'fileupload');
        uploadForm.append(input);
        
        var btnUpload = $(document.createElement('button'));
        btnUpload.attr('id', 'uploadButton');
        btnUpload.html('Upload');

        uploadForm.append(btnUpload);

        //container.append(row.clone().append(divLogo));
        container.append(row.clone().append(divDesc));
        container.append(row.clone().append(divCal));

        container.append(row.clone().append(divBtn));
        container.append(row.clone().append(uploadForm));

	}

    this.updateDescView = function(activity,edit){
        $('#desc').html("");

        var activityItemTitle = $(document.createElement('p'));
        activityItemTitle.addClass("activityItemTitle");
        activityItemTitle.html("<h2>"+activity.name+"</h2>");
        $('#desc').append(activityItemTitle);

        var activityItemDuration = $(document.createElement('p'));
        activityItemDuration.html("Duration:  min");
        $('#desc').append(activityItemDuration);

        var activityItemType = $(document.createElement('p'));
        activityItemType.html("Type: "+activity.type);
        $('#desc').append(activityItemType);

        if (edit == true){
            var inputDuration = $(document.createElement('input'));
            inputDuration.type = "text";
            inputDuration.attr('id','durationField');
            inputDuration.val(activity.duration);
             $('#desc').append(inputDuration);

            var btnSaveAct = $(document.createElement('button'));
            btnSaveAct.val(activity.id);
            btnSaveAct.attr('id', 'saveActivity');
            btnSaveAct.html('Save Activity');
            $('#desc').append(btnSaveAct);
        }
        else
        {
            var secretTip = $(document.createElement('p'));
            secretTip.html("Tip: To edit duration, please drop the activity into the scheduler.");
            $('#desc').append(secretTip);
        }
    }

	this.getCal = function(){
		return $("#cal");
	}
}