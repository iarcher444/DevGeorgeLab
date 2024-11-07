$("button").click(function(){
    $.getJSON("https://iarcher444.github.io/DevGeorgeLab/data.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
