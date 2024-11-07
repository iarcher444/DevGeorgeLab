$("button").click(function(){
    $.getJSON("https://barrycumbie.github.io/barrycumbie/data.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
