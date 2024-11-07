$("button").click(function(){
    $.getJSON("https://randomuser.me/api/", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
