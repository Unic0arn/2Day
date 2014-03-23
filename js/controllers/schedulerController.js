var SchedulerController = function(view, main, model){



var initDay = function(_day){
    	model.chooseDay(_day);
      var day = model.getDay();
      view.thisDayActivities(day);
  }
  initDay('2014-03-15');
  $(".activityImg").disableSelection();
  $(".activityGridList").disableSelection();
  

    this.update = function(arg){
        console.log("*****THIS HAS BEEN UPDATED****");
        view.thisDayActivities(model.getDay());
        $(".activityRowList").sortable({
           receive: handleDrop
           //,
           //connectWith: '.activityGridList' // Drag backwards
        });
        
        $(".activityRowList").droppable({
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            accept: '.activityItem',
            //drop: handleDrop
        });
    }
    this.update();

$('#schedulerView').on('mousedown', '.activityItem', function(){
    var activityId = $(this).attr('id');
    main.setDesc(activityId,true);
  });
var handleDrop = function(event, ui){

    console.log(ui);
    console.log(ui.item[0].id);
    console.log(ui.item[0].previousSibling.id);


    var _id = main.stripId(ui.item[0].id);
    console.log(_id);

    var _prevId = main.stripId(ui.item[0].previousSibling.id);
    model.addActivityToDay(_prevId, _id);
    

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
};
