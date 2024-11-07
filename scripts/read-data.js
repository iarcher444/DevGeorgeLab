

// $.ajax({
//   dataType: "json",
//   url: url,
//   data: data,
//   success: success
// });


$("button").click(function(){
    $.getJSON("https://randomuser.me/api/", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });

// $.getJSON( "https://barrycumbie.github.io/barrycumbie/data.js", function( data ) {
//     console.log(data); 
//     var items = [];
//     $.each( data, function( key, val ) {
//       items.push( "<li id='" + key + "'>" + val + "</li>" );
//     });
   
//     $( "<ul/>", {
//       "class": "my-new-list",
//       html: items.join( "" )
//     }).appendTo( "body" );
//   });
