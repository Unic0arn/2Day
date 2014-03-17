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
        
        container.append(row.clone().append(divLogo));
        container.append(row.clone().append(divDesc));
        container.append(row.clone().append(divCal));

	}

	this.getCal = function(){
		return $("#cal");
	}
}