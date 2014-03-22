var OptionView = function(container){

		this.container = container;
    	//$(container).hide();
    	this.displayOption = function(activities){
    		container.html(""); //Clear container

    		var activityGrid  = $(document.createElement('div'));
			activityGrid.attr('class','activityGrid');
			activityGrid.attr('id','grid');
			container.append(activityGrid); // add the Grid div to view div

			var activityGridList = document.createElement('ul');
			activityGridList.className = "activityGridList";

			$(activityGrid).append(activityGridList);

			// Start adding activity items to activityGridList
			for (var i=0; i < activities.length; i++){
			 	var activity = activities[i];
				var activityItem = $(document.createElement('li'));
					//var activityItem = document.createElement('li');
					//activityItem.className = "activityItem";
				activityItem.addClass("activityItem");
				activityItem.addClass(activity.typeChecker(activity.type));
                activityItem.attr('id', "activityId-" + activity.id); //Ids can not be numeric

			    var img = $(document.createElement('img'));
				img.attr('src', "images/" + activity.image); // replace with activity.name
				img.attr('alt', "activityItem");
				img.attr('id', "activityId-" + activity.id);
				img.addClass("activityImg");
				$(activityItem).append(img);

				//ActivityItem label
				var activityItemLabel = $(document.createElement('p'));
				activityItemLabel.addClass("activityItemLabel");
				activityItemLabel.html(activity.name);
				$(activityItem).append(activityItemLabel);

				$(activityGridList).append(activityItem);
			}//end adding activity items


			/* You can't just copy the code and ids, this breaks the activity grid.

			    $(".activityImg").disableSelection();

    			$(".activityGridList").disableSelection();
    			$(".activityGridList").sortable({
  					connectWith: '#desc',
  					placeholder: 'activityItem placeholder',
  					helper: 'clone',
					});

    			$(".activityGridList").droppable({
                    activeClass: "ui-state-default",
                    hoverClass: "ui-state-hover",
                    accept: '.activityItem',
                    drop: function(event, ui) {
                    var item = $(ui.draggable);
                    console.log("Sorted ID:"+item.prop('id'));
                if (item.hasClass('activityItem'))
            	    console.log("Useless If-statement");
                    return;
                                 }

        });


		*/


			var up  = $(document.createElement('div'));
			up.attr('id','up');
			var bup = $(document.createElement('a'));
			bup.attr('id','bottonUp');
			bup.attr('class','boton rojo');
			bup.html("Edit");
			var bm = $(document.createElement('a'));
			bm.attr('id','bottonM');
			bm.attr('class','boton rojo');
			bm.html("Delete");
			var bd = $(document.createElement('a'));
			bd.attr('id','bottonDown');
			bd.attr('class','boton rojo');
			bd.html("Add+");
			up.append(bup);
			up.append(bm);
			up.append(bd);
			container.append(up);
			var formulario = "<div id='formContainer'><div id='left'><form action='#' method='post' enctype='multipart/form-data' name='forms' id='forms' autocomplete='on'>";
			formulario += "<p>&nbsp;</p><p>N<span style='text-align: left'>ombre:<input id='nameActivity' name='nombre' type='text' autofocus required placeholder='Enter the activity\'s name' title='Enter the activity\'s name' autocomplete='on'  size='40'>";
			formulario += "*</span></p><span style='text-align: left'>Imagen :</span><input name='foto' type='file' accept='image/*' autofocus required placeholder=='Select title='Select a  image' image file'>";
			formulario += "*<label for='select'><br /><br />Type of Activity :</label><p><select name='opciones' autofocus='autofocus' required='required' id='opciones' autofocusrequired>";
			formulario += "<option value='' selected>- Select a type -</option><option value='1'>Morning</option><option value='2'>Afternon</option><option value='3'>Evening</option>";
			formulario += "<option value='4'>Anytime</option></select>*</p><p><span style='text-align: left'><label for='time'>Duration of activity:</label>";
			formulario += "<input name='duration' type='time' autofocus required id='duration' form='forms' max='16:00:00' min='00:10:00' step='300' title='Activity  duraction' value='00:30:00' >";
			formulario += "*</span></p><span style='text-align: left'><label> Description</label></span><span style='text-align: left; width: 55%; position: relative; height: 100%;'>";
			formulario += "<textarea style='width:314px;' name='descriptionArea' cols='40' rows='10' maxlength='250' autofocus wrap='hard' id='descriptionArea' placeholder='Write here the  description of activity' title='Description' spellcheck='true'></textarea>";
			formulario += "</span><input type='submit' value='Save' class='boton rojo' ><input type='reset' value='Cancel' class='boton rojo' ></form></div><div id='rigth'>";
			formulario += "<div id='image'><p><img src='images/dia.png' width='340' height='340' id='imgSelected' title='Activity\'s image' /></p></div></div></div>";
			container.append(formulario);


    	}
		
        




}
