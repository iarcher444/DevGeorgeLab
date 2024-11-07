
$(document).ready(function() {
    $("button").click(function() {
        $.getJSON("https://barrycumbie.github.io/barrycumbie/data.json", function(result) {
            $("#dataDisplay").empty();  // Clear previous data
            $.each(result, function(key, value) {
                // Assuming the JSON structure is an object with key-value pairs
                $("#dataDisplay").append(`<p><strong>${key}:</strong> ${value}</p>`);
            });
    });
});
