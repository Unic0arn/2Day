var SidebarView = function(container){

	this.init = function(){
		var row = $(document.createElement('div'));
		row.addClass('row');

		var divLogo = $(document.createElement('div'));
		divLogo.addClass("col-md-12");
        divLogo.attr('id','logo');
        divLogo.append("<h1>2DAY</h1>");

		var divDesc = $(document.createElement('div'));
		divDesc.addClass("col-md-12");
        divDesc.attr('id','desc');
        divDesc.append("Click an activity card to display information about it here.");


		var divCal = $(document.createElement('div'));
        divCal.attr('id','cal');

		var divBtn = $(document.createElement('div'));
        divBtn.attr('id','buttonArea');

        var btnSave = $(document.createElement('button'));
        divBtn.append(btnSave);
        btnSave.attr('id', 'saveButton');
        btnSave.attr('download', '2Day-data.json');
        btnSave.html('Save');

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

        container.append(row.clone().append(divLogo));
        container.append(row.clone().append(divDesc));
        container.append(row.clone().append(divCal));

        container.append(row.clone().append(divBtn));
        container.append(row.clone().append(uploadForm));

                //ONLY FOR TESTING! Remove when planner view is ready.
                $( "#desc" ).droppable({
                        drop: function( event, ui ) {
                $( this )
                //$( "#desc" ).html( "Dropped!" );
                $( "#desc" ).sortable({
                        connectWith: '.activityGridList'
                });
                        }
                });




	}

        





	this.getCal = function(){
		return $("#cal");
	}
}