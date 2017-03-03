/**
 * Created by Joel_ on 2017-02-22.
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

    /* Need to call the function so every item get the language that is chosen.*/
    language();

    getTheInventoryDatabase();

    /* The functions for the hide/show buttons. */
    showAndHideWellStocked();
    showAndHideFew();
    showAndHideEmpty();
    showAndHideAll();
}

/*------------Functions to get the database and attached them to the page--------------------------------------*/

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

    for (var i = 0; i<beers.length; i++) {

        /*Create two paragraph elements to hold the data from the database.Can't use a element
          more than once therefore the the need of two paragraph. */
        var paragraph = document.createElement("p");
        var paragraph1 = document.createElement("p");

        /* Give the new div a class so we can manipulate the div in the css file. */
        paragraph.className = "dynamicallyParagraphClass";
        paragraph1.className = "dynamicallyParagraphClass";


        /* Create some breaking point so every sentence comes into a new row. Can't use a element
         * more than once therefore the the need of many break. */
        var br = document.createElement("br");
        var br2 = document.createElement("br");
        var br3 = document.createElement("br");
        var br4 = document.createElement("br");
        var br5 = document.createElement("br");
        var br6 = document.createElement("br");

        /* Attached to the button Show All. */
        if(beers[i].namn != "")
        {
            /* Get the data from the database and create element from them.*/

            var nodeName1 = document.createTextNode(beers[i].namn);
            var beerId1 = document.createTextNode("Drink Id:" + beers[i].beer_id);
            var Amount1 = document.createTextNode("Amount:" + beers[i].count);
            var price1 = document.createTextNode("Price:" + beers[i].price);

            /* Set the data to the paragraph node. Using the break point to get the data on a new row.*/
            paragraph1.appendChild(nodeName1);
            paragraph1.appendChild(br3);
            paragraph1.appendChild(beerId1);
            paragraph1.appendChild(br4);
            paragraph1.appendChild(Amount1);
            paragraph1.appendChild(br5);
            paragraph1.appendChild(price1);


            $('#allSection').append(paragraph1);
        }

        /* Add only the elements with name (The current database has a few element without names)
         * and elements that have more than 0 in the inventory.
         * */
        if(beers[i].namn != "" && beers[i].count > 50)
        {
            /* Get the data from the database and create element from them.*/
            var nodeName = document.createTextNode(beers[i].namn);
            var beerId = document.createTextNode("Drink Id:" + beers[i].beer_id);
            var Amount = document.createTextNode("Amount:" + beers[i].count);
            var price = document.createTextNode("Price:" + beers[i].price);

            /* Set the data to the paragraph node. Using the break point to get the data on a new row.*/
            paragraph.appendChild(nodeName);
            paragraph.appendChild(br);
            paragraph.appendChild(beerId);
            paragraph.appendChild(br2);
            paragraph.appendChild(Amount);
            paragraph.appendChild(br6);
            paragraph.appendChild(price);


            $('#wellStockedSection').append(paragraph);
        }

        else if((beers[i].namn != "") && (beers[i].count <= 50) && (beers[i].count >= 10) )
        {
            /* Get the data from the database and create element from them.*/
            var nodeName = document.createTextNode(beers[i].namn);
            var beerId = document.createTextNode("Drink Id:" + beers[i].beer_id);
            var Amount = document.createTextNode("Amount:" + beers[i].count);
            var price = document.createTextNode("Price:" + beers[i].price);

            /* Set the data to the paragraph node. Using the break point to get the data on a new row.*/
            paragraph.appendChild(nodeName);
            paragraph.appendChild(br);
            paragraph.appendChild(beerId);
            paragraph.appendChild(br2);
            paragraph.appendChild(Amount);
            paragraph.appendChild(br6);
            paragraph.appendChild(price);


            $('#fewSection').append(paragraph);
        }

        else if(beers[i].namn != "" && beers[i].count <= 0)
        {
            /* Get the data from the database and create element from them.*/
            var nodeName = document.createTextNode(beers[i].namn);
            var beerId = document.createTextNode("Drink Id:" + beers[i].beer_id);
            var Amount = document.createTextNode("Amount:" + beers[i].count);
            var price = document.createTextNode("Price:" + beers[i].price);

            /* Set the data to the paragraph node. Using the break point to get the data on a new row.*/
            paragraph.appendChild(nodeName);
            paragraph.appendChild(br);
            paragraph.appendChild(beerId);
            paragraph.appendChild(br2);
            paragraph.appendChild(Amount);
            paragraph.appendChild(br6);
            paragraph.appendChild(price);

            $('#emptySection').append(paragraph);
        }
    }
}

/*------------------------------------------------------------------------------------------------------------*/

/*------------Functions to Hide/show buttons---------------------------------------------------------------------------*/
/* From https://www.youtube.com/watch?v=tFSsKSQB-CI&t=393s */

function showAndHideWellStocked() {
    $('#showWell-Stocked').click(function ()
    {
        $('#showWell-Stocked').css('display','none');
        $('#dataWell-Stocked').show();
        $('#hideWell-Stocked').show();
    });

    $('#hideWell-Stocked').click(function ()
    {
        $('#hideWell-Stocked').css('display','none');
        $('#dataWell-Stocked').hide();
        $('#showWell-Stocked').show();
    });
};

function showAndHideFew() {
    $('#showFew').click(function ()
    {
        $('#showFew').css('display','none');
        $('#dataFew').show();
        $('#hideFew').show();
    });

    $('#hideFew').click(function ()
    {
        $('#hideFew').css('display','none');
        $('#dataFew').hide();
        $('#showFew').show();
    });
};

function showAndHideEmpty() {
    $('#showEmpty').click(function ()
    {
        $('#showEmpty').css('display','none');
        $('#dataEmpty').show();
        $('#hideEmpty').show();
    });

    $('#hideEmpty').click(function ()
    {
        $('#hideEmpty').css('display','none');
        $('#dataEmpty').hide();
        $('#showEmpty').show();
    });
};

function showAndHideAll() {
    $('#showAll').click(function ()
    {
        $('#showAll').css('display','none');
        $('#dataAll').show();
        $('#hideAll').show();
    });

    $('#hideAll').click(function ()
    {
        $('#hideAll').css('display','none');
        $('#dataAll').hide();
        $('#showAll').show();
    });
};

/*------------------------------------------------------------------------------------------------------------*/

/*------------Functions to send the new order to the database-------------------------------------------------*/
/* https://www.youtube.com/watch?v=5nL7X1UMWsc */

function sendOrder() {

    var beer_id = document.order.beer_id.value;
    var amount = document.order.amount.value;
    var price = document.order.price.value;

    var Username = localStorage.TempUser;
    var link = 'http://pub.jamaica-inn.net/fpdb/api.php?username='+Username+'&password='+Username+'&action=inventory_append';

    if(beer_id=="" || price == "")
    {
        alert("Need to fill in drink id or price");
    }
    else
    {
        var order = {
            beer_id: beer_id,
            amount: amount,
            price: price
        }

        $.ajax({
            type:'POST',
            url:link,
            data: order,
            success: function () {
                alert("Your order was successful!");
            },
            error: function () {
                alert("error sending order!");
            }
        });
    }
};
/*------------------------------------------------------------------------------------------------------------*/


