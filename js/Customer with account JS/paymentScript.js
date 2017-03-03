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
    for(var i=0; i<storedNames.length; i++)
    {
        $('#drinksNames').prepend('<p> '+ storedNames[i]);
    }

    var servedDrinks = JSON.parse(localStorage.getItem("servedDrinksArray"));
    var div = document.createElement('div');
    var dn = document.getElementById("drinksNames");
    $('#drinksNames').append('<h1>Ready to be fetched:</h1>');
    for(i=0; i<servedDrinks.length; i++)
        {
                div.appendChild(document.createTextNode(servedDrinks[i] + " ✔"));
                div.appendChild(document.createElement('br'));    
       }

      div.style.color = "green";
      dn.appendChild(div);

      refreshWhileNotReady();//keeps refreshing page till all drinks are served
}

function AutoRefresh( t ) {

               setTimeout("location.reload(true);", t);
}

function refreshWhileNotReady(){
    var servedDrinks = JSON.parse(localStorage.getItem("servedDrinksArray"));
    var storedNames = JSON.parse(localStorage.getItem("drinksArray"));

    if(servedDrinks.length==storedNames.length ){//when nr of selected drinks == nr served drinks
        clearTimeout( setTimeout("location.reload(true);",6000));
        //change color to green and text
        document.getElementById('readyBox').children[0].innerHTML="Your Order is ready!";
        document.getElementById('readyBox').style.background = 'green';
    }
    else
        AutoRefresh(6000);
}