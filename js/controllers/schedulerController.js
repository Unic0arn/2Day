var SchedulerController = function(view, main, model){



    var initDay = function(_day){
    	model.chooseDay(_day);
		var day = model.getDay();
		view.thisDayActivities(day);
	}
	initDay('2014-03-15');
	$(".activityImg").disableSelection();
    $(".activityGridList").disableSelection();
	$(".activityRowList").sortable();
    $(".activityRowList").droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        accept: '.activityItem',
        drop: function(event, ui) {

            var item = $(ui.draggable);

            if (item.hasClass('activityItem'))

                parent = $(item[0].parentElement)
                if(parent.hasClass('activityGridList')){
                console.log(ui.draggable.prop('id'));
                var _id = main.stripId(ui.draggable.prop('id'));
                console.log(_id);
                var itemActivity = model.getActivity(_id);
                console.log(itemActivity.id);
                model.getDay().addActivity(itemActivity);
                    console.log("Dropped from Grid");
                    
                }else if(parent.hasClass('activityRowList')){
                    console.log("Dropped from Row");
                }


            /*
            var id = ui.draggable.prop('id');
            var activity = day.activities[id];
            var activityItem = document.createElement('li');
				activityItem.className = "activityItem";
				activityItem.id = activity.id;
            $(".activityRowList").append(activityItem);
                return; */
                    /*
                    if(item.hasClass('breakPoint'))
                        item.removeAttr('id');

            if (item.hasClass('placeHolder'))
                item.removeClass("placeHolder");
          
            
            if (item.hasClass('reportGroup'))
                item.removeClass("reportGroup");
                                  
          item.addClass("reportRow");
          $(this).append(item);
          */  
        }
    });

    this.update = function(arg){
        console.log(model.getDay());
        view.thisDayActivities(model.getDay());
    }
    };

