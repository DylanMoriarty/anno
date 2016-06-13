global.$ = global.jQuery = global.jquery = require('jquery');
var currentday = 0;

$(document).ready(function() {

    $('body').css("background", 'url("assets/graphics/2016/6-July/background.png")');

    $(".calendar-item").click(function(){
        var classes = $(this).attr("class").split(' ')[1].replace("script", "");

        pickaday(classes);
        $(".full-view").delay("fast").fadeIn();
    });

    $(document).keyup(function(e) {
        switch(e.keyCode)  {
          // Right
          case 27:
            $(".full-view").delay("slow").fadeOut();
            break;

          case 37:
            var yesterday = parseInt(currentday) - 1;

            $('.left-key')
                .css("color", "#e5c53e")
                .css("margin-top", "4px");

            pickaday(yesterday)

            setTimeout(leftreturncss, 400);

            function leftreturncss(){
            $('.left-key')
                .css("color", "")
                .css("margin-top", "");                
            }
            break;

          case 39:
            var tomorrow = parseInt(currentday) + 1;

            $('.right-key')
                .css("color", "#e5c53e")
                .css("margin-top", "4px");

            pickaday(tomorrow)

            setTimeout(rightreturncss, 400);

            function rightreturncss(){
            $('.right-key')
                .css("color", "")
                .css("margin-top", "");                
            }
          break;

        }
    });

    // $(".close-me").click(function(){
    //     $(".full-view").delay("slow").fadeOut();
    // });

    $(".full-view-targetarea").click(function(){
        $(".full-view").delay("slow").fadeOut();
    });

    $(".left-key").click(function(){
        var yesterday = parseInt(currentday) - 1;
        pickaday(yesterday)
    });
    $(".right-key").click(function(){
        var yesterday = parseInt(currentday) + 1;
        pickaday(yesterday)
    });
});

function pickaday(day){
    //update global day for navigation
    currentday = day;
    console.log(day);

    // resert title, description, et image
    $(".title").html(PT.title[day])
    $(".descrip").html(PT.descrip[day])
    $(".full-view-image img").attr('src', PT.image[day]);

    // make link, if there's one
    var linksrc = '<a href="'+PT.link[day]+'" target="_blank">This Link</a>';

    if(PT.link[day] != ""){
        $(".descrip-link").html(linksrc);            
    }else{
        $(".descrip-link").html("");            
    };
}

