/**
 * Created by Joel_ on 2017-02-11.
 */

/**
 * Created by Joel_ on 2017-02-07.
 */

/* Gör så att hemsidan laddas först innan JQuery sätter igång.
 */

$(document).ready(function () {

    $(".block").draggable({helper:'clone'});

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


/**
 * Created by Joel_ on 2017-02-03.
 */

/* Objekt konstruktor */
function menu(drinkName, drinkIngredients, drinkStyrka,drinkVolym, drinkSrc,
              drinkSerieNummer) {
    this.Name = drinkName;
    this.ingredients = drinkIngredients;
    this.styrka = drinkStyrka;
    this.Volym =drinkVolym;
    this.imageSrc = drinkSrc;
    this.serieNummer = drinkSerieNummer;
}

/*Skapar 5 st nya element */
var drink1 = new menu('Beer', 'Lactose,gluten', 12, 300, "../css/beermug.jpg",1);

function addDrink(drink1) {


    var OrderName = document.createTextNode(drink1.Name);
    var Orderingredients = document.createTextNode(drink1.ingredients);
    var Orderstyrka = document.createTextNode(drink1.styrka);
    var OrderVolym = document.createTextNode(drink1.Volym);

    var img = new Image(50, 50);
    img.src = drink1.imageSrc;

    /*Skapar en node som man fäster texten vid.*/

    var drinkName = document.getElementById("OrderName");
    var drinkBild = document.getElementById("OrderBild");
    var drinkingredients = document.getElementById("Orderingredients");
    var drinkstyrka = document.getElementById("Orderstyrka");
    var drinkvolym = document.getElementById("OrderVolym");

    /*lägger till texten vid id i htlm*/

    drinkName.appendChild(OrderName);
    drinkBild.appendChild(img);
    drinkingredients.appendChild(Orderingredients);
    drinkstyrka.appendChild(Orderstyrka);
    drinkvolym.appendChild(OrderVolym);
}


addDrink(drink1);