$(document).ready(function() {
    $("#fetchButton").click(function() {
        // Fetch JSON data from your local JSON file
        $.getJSON("class-data.json", function(result) {
            $("#dataDisplay").empty();  // Clear previous data

            // Iterate over the games array in the JSON file
            result.games.forEach(function(game) {
                $("#dataDisplay").append(`
                    <p><strong>Game Name:</strong> ${game.gameName}</p>
                    <p><strong>URL:</strong> <a href="${game.gameURL}" target="_blank">${game.gameURL}</a></p>
                    <p><strong>Author:</strong> ${game.gameAuthor}</p>
                    <p><strong>Group:</strong> ${game.gameGroup}</p>
                    <hr>
                `);
            });
        }).fail(function() {
            console.error("Error loading JSON file.");
            $("#dataDisplay").text("Error loading data.");
        });
    });
});

//     $( "<ul/>", {
//       "class": "my-new-list",
//       html: items.join( "" )
//     }).appendTo( "body" );
//   });
