var ActivityGridController = function(view, main, model){

$(".activityImg").disableSelection();

$(".activityGridList").disableSelection();
$(".activityGridList").sortable();


        $(".activityGridList").droppable({
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


        /* Interesting, clone is probably what we need.
        $("#divBreakPoint").draggable({
            connectToSortable: '#divReportRows',
            helper: 'clone'
        });

        $("#divReportGrouping div.item").draggable({
            connectToSortable: '#divReportRows',
            helper: 'original'
        });
		*/


















	//This part is a test for Gridster. Should move to GridView!
	var gridster;

      $(function() {
          gridtster = $(".gridster > ul").gridster({

              widget_margins: [8, 8],
              widget_base_dimensions: [100, 100],
              min_cols: 6,
              max_size_x: 10

          }).data('gridster');

      });

}