/**
 * Created by Joel_ on 2017-02-07.
 */

/* Gör så att hemsidan laddas först innan JQuery sätter igång.
 $(document).ready(something);
 */


$.getJSON( "ajax/test.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "body" );
});

