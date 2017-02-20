/**
 * Created by Joel_ on 2017-02-20.
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

    printOutTheTotalCost();
}

/* Function that prints out the current totalPrice and which drinks that has been ordered. */
function printOutTheTotalCost() {
    var totalCost = localStorage.GlobalTotalCost;
    $('#orderPaymentPage').html('Total Sum: $'+totalCost);

    /* Need to use JSON.parse because localStorage only handling strings and not arrays.*/
    var storedNames = JSON.parse(localStorage.getItem("drinksArray"));

    /* Loop the storedNames array and add the name to the page.*/
    for(i=0; i<storedNames.length; i++)
    {
        $('#drinksNames').prepend('<p> '+ storedNames[i]);
    }

}
