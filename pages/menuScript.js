/**
 * Created by Joel_ on 2017-02-11.
 */

/**
 * Created by Joel_ on 2017-02-07.
 */

/* ----------------------------Show the menu from the database functions------------------------------------------*/
/* Gör så att hemsidan laddas först innan JQuery sätter igång.
 */
function docLoaded(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function indexPageLoaded() {
    /*displayItems(); */
    beer();
}


/* Funktion som hämtar hela sortimentet från databasen. Använder admin namnet ervtod för att få tillgång till
 databasen och funktionen inventory_get för att retunera sortimentet.  Anropar en annan funktonen med databasens
 data som är i JSON format.
 */
function beer() {
    $.ajax({
        type:'GET',
        url:'http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=inventory_get',
        dataType:'json',
        success:function (data) {
            parseBeer(data.payload);
        }
    });
}



/* beers är sortimentet från databasen och innehåller 167 olika drycker. */
function parseBeer(beers)  {
    // create a new div element
    // and give it some content
    for (i = 0; i<beers.length; i++) {

        /* skapar en ny div för varje loop för att göra listan dynamisk. */
        /* måste använda en ny break element varje gång man använder den eftersom element inte kan upprepas*/

        var newDiv = document.createElement("div");
        /* Skapar ett class name så att man kan ändra divens utseende i css filen.*/
        newDiv.className = "divdrag";


        var para = document.createElement("p");
        var br = document.createElement("br");
        var br2 = document.createElement("br");
        var br3 = document.createElement("br");


        /* Sorterar ut de värden som ej har något namn i databasen.*/

        if(beers[i].namn != "")
        {
            /* Plockar ut värdena från databasen.*/
            var nodeName = document.createTextNode(beers[i].namn);
            var pub_price = document.createTextNode("Price: " + beers[i].pub_price);

            /*Sätter fast värdena i en paragraf element och använder break för att få varje element på ny rad.*/
            para.appendChild(nodeName);
            para.appendChild(br);
            para.appendChild(br2);
            para.appendChild(pub_price);

            newDiv.appendChild(para); //add the text node to the newly created div.

            // add the newly created element and its content into the DOM
            /*
             var currentDiv = document.getElementById("div1");
             document.body.insertBefore(newDiv, currentDiv);
             */
            var div2 = document.getElementById("childDiv");
            var parentDiv = div2.parentNode;
            parentDiv.insertBefore(newDiv, div2);

        }

    }
}

/* ---------------------------------------------------------------------------------------------------------------*/


/* ----------------------------Drag and Drop functions------------------------------------------*/
$(document).ready(function () {

    $(".divdrag").draggable({helper:'clone'});

    $("#orderlistBox").droppable(
        {
            accept:".block",
            drop:function (ev,ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).append(droppedItem);
            }
        }
    );
});



/* ---------------------------------------------------------------------------------------------------------------*/