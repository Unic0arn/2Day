var OptionView = function(container){

		this.container = container;
    	//$(container).hide();
    	this.displayOption = function(activities){

    		container.html(""); //Clear container

    		var optionGrid  = $(document.createElement('div'));
			optionGrid.attr('class','activityGrid');
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
			container.append(up);
			var formulario = "<div id='formContainer'><div id='left'><form action='#' method='post' enctype='multipart/form-data' name='forms' id='forms' autocomplete='on'>";
			formulario += "<p>&nbsp;</p><p>N<span style='text-align: left'>ame:<input id='nameActivity' name='nombre' type='text' autofocus required placeholder='Enter the activity\'s name' title='Enter the activity\'s name' autocomplete='on'  size='40'>";
			formulario += "*</span></p><span style='text-align: left'>Image :</span><input name='foto' type='file' accept='image/*' autofocus required placeholder=='Select title='Select a  image' image file'>";
			formulario += "<label for='select'><br /><br />Type of Activity :</label><p><select name='opciones' autofocus='autofocus' required='required' id='opciones' autofocusrequired>";
			formulario += "<option value='' selected>- Select a type -</option><option value='1'>Morning</option><option value='2'>Afternoon</option><option value='3'>Others</option>";
			formulario += "<option value='4'>Night</option></select>*</p><p><span style='text-align: left'><label for='time'>Duration of activity:</label>";
			formulario += "<input name='duration' type='time' autofocus required id='duration' form='forms' max='16:00:00' min='00:10:00' step='300' title='Activity  duraction' value='00:30:00' >";
			formulario += "*</span></p><span style='text-align: left'><label> Description</label></span><span style='text-align: left; width: 55%; position: relative; height: 100%;'>";
			formulario += "<textarea style='width:314px;' name='descriptionArea' cols='40' rows='10' maxlength='250' autofocus wrap='hard' id='descriptionArea' placeholder='Write here the  description of activity' title='Description' spellcheck='true'></textarea>";
			formulario += "</span><input type='button' id='btnSave' value='Save' class='boton rojo' ><input type='reset' id='btnCancel' value='Cancel' class='boton rojo' ></form></div><div id='rigth'>";
			formulario += "<div id='image'><p><img src='images/dia.png' width='340' height='340' id='imgSelected' title='Activity\'s image' /></p></div></div></div>";
			container.append(formulario);


    	}
		
        




}
