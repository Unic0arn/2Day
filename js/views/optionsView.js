var OptionView = function(container){

		this.container = container;
    	//$(container).hide();
    	this.displayOption = function(activities){

    		container.html(""); //Clear container
		
    		var optionGrid  = $(document.createElement('div'));
			optionGrid.attr('class','activityGrid scrollGrid');
			optionGrid.attr('id','grid');
			container.append(optionGrid); // add the Grid div to view div

			var optionGridList = document.createElement('ul');
			optionGridList.className = "optionGridList";


			// Start adding activity items to activityGridList
		for (var i=0; i < activities.length; i++){
			activity = activities[i];
			$(optionGridList).append(activity.createCard(activity));
		}//end adding activity items
		
		$(optionGrid).append(optionGridList);
			var form = $(document.createElement('div'));
			form.attr("id","dvForm");
			container.append(form);
			var up  = $(document.createElement('div'));
			up.attr('id','up');
			var btnDelete = $(document.createElement('a'));
			btnDelete.attr('id','btnDelete');
			btnDelete.attr('class','boton rojo');
			btnDelete.html("Delete");
			var btnAdd = $(document.createElement('a'));
			btnAdd.attr('id','btnAdd');
			btnAdd.attr('class','boton rojo');
			btnAdd.html("Add+");
			up.append(btnDelete);
			up.append(btnAdd);
			form.append(up);
			var formulario = "<div id='formContainer'><div id='left'><form action='#' method='post' enctype='multipart/form-data' name='forms' id='forms' autocomplete='on'>";
			formulario += "<br /><p>Name*:<input id='nameActivity' name='nombre' type='text' autofocus required placeholder='Enter the activity\'s name' title='Enter the activity\'s name' autocomplete='on'  size='40'></p>";
			formulario += "<p>Image*:<input id = 'upFoto' name='foto' type='file' accept='image/*' autofocus required placeholder='Select a  image file'></p>";
			formulario += "<label for='select'>Type of Activity*:</label><p><select name='opciones' autofocus='autofocus' required='required' id='opciones' autofocusrequired>";
			formulario += "<option value='' selected>- Select a type -</option><option value='1'>Morning</option><option value='2'>Afternoon</option><option value='3'>Others</option>";
			formulario += "<option value='4'>Night</option></select></p><p><label for='time'>Duration of activity*:</label>";
			formulario += "<input name='duration' type='text' autofocus required id='duration' form='forms' title='Activity  duraction' value='30' >";
			formulario += "</p><p>Description";
			formulario += "<textarea style='width:252px;height:150px;' name='descriptionArea' cols='40' rows='10' maxlength='250' autofocus wrap='hard' id='descriptionArea' placeholder='Write here the  description of activity' title='Description' spellcheck='true'></textarea>";
			formulario += "</p><p><input type='button' id='btnSave' value='Save' class='boton rojo btnForm' /><input type='reset' id='btnCancel' value='Cancel' class='boton rojo btnForm' /></p></form></div><div id='rigth'>";
			formulario += "<div id='image'><p><img src='images/dia.png' width='200' height='200' id='imgSelected' title='Activity\'s image' /></p></div></div></div>";
			form.append(formulario);


    	}
		
        




}
