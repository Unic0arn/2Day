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
                return;
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

    };

