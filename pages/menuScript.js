/**
 * Created by Joel_ on 2017-02-11.
 */

/**
 * Created by Joel_ on 2017-02-07.
 */
function docLoaded(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
/* Function that start the page and calls the neccessary functions. */
function indexPageLoaded() {

    getTheInventoryDatabase();
}


/* Function that retrieves all alcohol products from the database. The function use
 the admin name ervtod to get access to the database and the function inventory_get to
 retrieve the database. getTheInventoryDatabase() calls another function with the database data
 as paramter which is in JSON Format.
 */

function getTheInventoryDatabase() {
    $.ajax({
        type:'GET',
        url:'http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=inventory_get',
        dataType:'json',
        success:function (data) {
            printOutTheMenu(data.payload);
        }
    });
}




/*
 The function is getting the inventory database and adding it to the page.
 Parameter: The inventory database which is in JSON format.
 */
function printOutTheMenu(beers)  {
    /*creates dynamically so many divs as the number of elements in beers. */

    for (i = 0; i<beers.length; i++) {

        var newDiv = document.createElement("div");

        /* Give the new div a class so we can manipulate the div in the css file. */
        newDiv.className = "dynamicallyDivClass";

        /*Create a paragraph element to hold the data from the database.*/
        var paragraph = document.createElement("p");

        /* Create some breaking point so every sentence comes into a new row. Can't use a element
         * more than once therefore the the need of many break. */
        var br = document.createElement("br");
        var br2 = document.createElement("br");

        /* Add only the element wiht name.(The current database has a few element without names)*/
        if(beers[i].namn != "")
        {
            /* Get the data from the database and create element from them.*/
            var nodeName = document.createTextNode(beers[i].namn);
            var pub_price = document.createTextNode("Price: " + beers[i].pub_price);

            /* Set the data to the paragraph node. Using the break point to get the data on a new row.*/
            paragraph.appendChild(nodeName);
            paragraph.appendChild(br);
            paragraph.appendChild(pub_price);

            /* Add the text node to the newly created div.*/
            newDiv.appendChild(paragraph);

            /* Add the newly created element and its content into the DOM. */
            var div2 = document.getElementById("childDiv");
            var parentDiv = div2.parentNode;
            parentDiv.insertBefore(newDiv, div2);

        }

        /* Need to make the draggable and droppable functions here, if they is outside the function
         the drag and drop ability will go away after reloaded the page.
         http://stackoverflow.com/questions/4225341/draggable-stops-working-after-i-reload-a-part-of-web-page-with-ajax
         */
        $(".dynamicallyDivClass").draggable({helper:'clone'});

        $("#orderlistBox").droppable(
            {
                drop:function (ev,ui) {
                    ev.preventDefault();
                    var droppedItem = $(ui.draggable).clone();
                    $(this).append(droppedItem);

                }
            }
        );

    }
}

/* ---------------------------------------------------------------------------------------------------------------*/

