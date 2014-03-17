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
        divDesc.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar odio nec urna suscipit iaculis.");


		var divCal = $(document.createElement('div'));
        divCal.attr('id','cal');

		var divBtn = $(document.createElement('div'));
        divBtn.attr('id','buttonArea');

        var btnSave = $(document.createElement('button'));
        divBtn.append(btnSave);
        btnSave.attr('id', 'saveButton');
        btnSave.attr('download', '2Day-data.json');
        btnSave.html('Save');

        container.append(row.clone().append(divLogo));
        container.append(row.clone().append(divDesc));
        container.append(row.clone().append(divCal));

        container.append(row.clone().append(divBtn));

	}

	this.getCal = function(){
		return $("#cal");
	}
}