/**
 * Created by Joel_ on 2017-02-25.
 */

/*--------------- Switch languages --------------------------------------------------------
 https://www.youtube.com/watch?v=Tjt_u_OSh40 */

function docLoaded(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
/* Function that start the page and calls the neccessary functions. */
function indexPageLoaded() {
    language();
}

/* Array consisting of json objects, for example in the json object 'en'
 has 'start': 'START' there 'start' is the key and 'START' is the value.
 */
var arrLang = {
    'en' : {
        /*--------- Header -----------*/
        'start': 'START',
        'menu': 'MENU',
        'about': 'ABOUT US',
        'events': 'EVENTS',
        'logIn': 'LOG IN',
        'welcome': 'WELCOME',
        'enter' : 'ENTER',
        /* ---------------------------*/

        /*--------- menuPage -----------*/
        'orderlist':'Orderlist',
        'total':'Total: $0',
        'amountOfDrinks':'Amount of drinks: 0',
        'undoButton':'UNDO',
        'orderButton': 'ORDER',
        /* ---------------------------*/

        /*--------- aboutPage -----------*/
        'firstSectionText': "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
        "printer took a galley of type and scrambled it to make a type specimen book. It has survived " +
        "not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",

        'secondSectionText': "Contrary to popular belief, Lorem Ipsum " +
        "is not simply random text. It has roots in a piece of classical Latin" +
        " literature from 45 BC, making it over 2000 years old. Richard McClintock, " +
        "a Latin professor at Hampden-Sydney College in Virginia, looked up one of the " +
        "more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through " +
        "the cites of the word in classical literature, discovered the undoubtable source.",
        /* ---------------------------*/

        /*--------- logInPage -----------*/
        'username':'Username:',
        'password':'Password:',
        /* ---------------------------*/

        /*--------- MyProfilePage VIP Customer -----------*/
        'MyProfile':'MY PROFILE',
        'history': 'HISTORY',
        'logOut':'LOG OUT',
        'welcomeText':'Welcome',
        'accountInformation': 'Account Information',
        'close': 'Close',
        'balanceInformation':'Saldo',
        /* ---------------------------*/

        /*--------- historyPage-----------*/
        'allPurchases':'List of all your purchases',
        /* ---------------------------*/
        /*--------- logOutPage-----------*/
        'logOutButton':'Are you sure you want log out?',
        'yesButton':'YES',
        'noButton':'NO',
        /* ---------------------------*/

        /*--------- AdminIndexPage-----------*/
        'inventory':'INVENTORY',
        'adminWelcomeText':'Welcome admin!',
        /* ---------------------------*/

        /*--------- inventoryPage-----------*/
        'inventoryTitle':'The Inventory',
        'orderToInventory':'Order to the inventory',
        'wellStocked':'Well-Stocked',
        'few':'Few items left',
        'empty':'Empty',
        'all':'Show all',
        'name':'Name:',
        'drinkID':'Drink ID:',
        'amount':'Amount:',
        'price':'Price:',
        /* ---------------------------*/

        /*--------- requestPage -----------*/
        'serve': 'Serve selected drinks',
        'undoServe':'Undo order for this Table',
        'clean':'Clean Table',
        /* ---------------------------*/

        /*--------- paymentPage -----------
        'order': 'ORDER', */
        /* ---------------------------*/
    },
    'sv' : {
        /*--------- Header -----------*/
        'start': 'START',
        'menu': 'MENY',
        'about': 'OM OSS',
        'events': 'EVENTS',
        'logIn': 'LOGGA IN',
        'welcome': 'VÄLKOMMEN',
        'enter' : 'START',
        /* ---------------------------*/

        /*--------- menuPage -----------*/
        'orderlist':'Beställning',
        'total':'Totalt: $0',
        'amountOfDrinks':'Antal drycker: 0',
        'undoButton':'ÅNGRA',
        'orderButton': 'BESTÄLL',
        /* ---------------------------*/

        /*--------- aboutPage -----------*/
        'firstSectionText': "Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin." +
        "Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att " +
        "antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har " +
        "inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan " +
        "större förändringar.I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa ord." +
        " Det har sina rötter i ett stycke klassiskt litteratur på latin från 45 år före år 0, och " +
        "är alltså över 2000 år gammalt. Richard McClintock, en professor i latin på Hampden-Sydney" +
        " College i Virginia, översatte ett av de mer ovanliga orden, consectetur, från ett stycke Lorem" +
        " Ipsum och fann dess ursprung genom att studera användningen av dessa ord i klassisk litteratur. " +
        "Lorem Ipsum kommer från styckena 1.10.32 och 1.10.33 av de Finibus Bonorum et Malorum (Ytterligheterna" +
        " av ont och gott) av Cicero, skriven 45 före år 0. Boken är en avhandling i teorier om etik, och var " +
        "väldigt populär under renäsanssen. Den inledande meningen i Lorem Ipsum, Lorem Ipsum dolor sit amet..., " +
        "kommer från stycke 1.10.32." ,

        'secondSectionText': 'Det är ett välkänt faktum att läsare distraheras av läsbar text på ' +
        ' en sida när man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ' +
        'ordflöde, till skillnad från "Text här, Text här", och ger intryck av att vara läsbar text. ' +
        ' Många publiseringprogram och webbutvecklare använder Lorem Ipsum som test-text, och en ' +
        'sökning efter "Lorem Ipsum" avslöjar många webbsidor under uteckling. Olika versioner har dykt' +
        ' upp under åren, ibland av olyckshändelse, ibland med flit (mer eller mindre humoristiska)',
        /* ---------------------------*/

        /*--------- logInPage -----------*/
        'username':'Användarnamn:',
        'password':'Lösenord:',
        /* ---------------------------*/

        /*--------- MyProfilePage VIP Customer -----------*/
        'MyProfile':'MIN PROFIL',
        'menuCustomer': 'MENU',
        'history': 'HISTORIK',
        'logOut':'LOGGA UT',
        'welcomeText':'Välkommen',
        'accountInformation': 'Konto Uppgifter',
        'close': 'Stäng',
        'balanceInformation':'Saldo',
        /* ---------------------------*/

        /*--------- historyPage-----------*/
        'allPurchases':'Lista över alla dina inköp',
        /* ---------------------------*/

        /*--------- logOutPage-----------*/
        'logOutButton':'Är du säker att du vill logga ut?',
        'yesButton':'JA',
        'noButton':'NEJ',
        /* ---------------------------*/

        /*--------- AdminIndexPage-----------*/
        'inventory':'LAGER',
        'adminWelcomeText':'Välkommen admin!',
        /* ---------------------------*/

        /*--------- inventoryPage-----------*/
        'inventoryTitle':'Lagret',
        'orderToInventory':'Beställ till lagret',
        'wellStocked':'Välfyllda',
        'few':'Några kvar ',
        'empty':'Tomt',
        'all':'Visa allt',
        'name':'Namn:',
        'drinkID':'Dryck ID:',
        'amount':'Antal:',
        'price':'Pris:',
        /* ---------------------------*/

        /*--------- requestPage -----------*/
        'serve': 'Servera drycker',
        'undoServe':'Ta bort beställning',
        'clean':'Rensa bordet',
        /* ---------------------------*/

        /*--------- paymentPage -----------
        'order': 'BESTÄLLNING', */
        /* ---------------------------*/
    }
};

/* Function that change texts inside JS files. */
function changeInsideJS(language) {
    if (language== 'sv')
    {
        /*------------------At Log In page,Log In Button. ------------------------------ */
        $("#btnLogIn").prop('value', 'LOGGA IN');
        /*---------------------------------------------------------------------------------*/

        /*------------------------------- At payment page* --------------------
        var totalCost = localStorage.GlobalTotalCost;
        $('#totalSum').html('Totalsumma: $'+totalCost);
        */
        /*---------------------------------------------------------------------------------*/

        /*----------------------- At the menu page----------------------------------*/
        var totalCost = localStorage.GlobalTotalCost;
        var totalDrinks = localStorage.GlobalTotalDrinks;
        var counter = localStorage.GlobalCounter;

        /* This is needed so we don't get old data to print out, the variable counter is in
         the menuScript.js file and is a global variable. */
        if(counter == 0)
        {
            totalCost = 0;
            totalDrinks = 0;
        }
        $('#orderlistBox .totalCost').html('Totalsumma: $'+totalCost);
        $('#orderlistBox .totalDrinks').html('Antal drycker: '+totalDrinks);
        /*---------------------------------------------------------------------------------*/

        /*------------------At inventory page,show data Button. ------------------------------ */
        $("#showWell-Stocked").prop('value', 'Visa data');
        $("#hideWell-Stocked").prop('value', 'Dölj Data');

        $("#showFew").prop('value', 'Visa data');
        $("#hideFew").prop('value', 'Dölj Data');

        $("#showEmpty").prop('value', 'Visa data');
        $("#hideEmpty").prop('value', 'Dölj Data');

        $("#showAll").prop('value', 'Visa data');
        $("#hideAll").prop('value', 'Dölj Data');

        $("#sendOrderButton").prop('value', 'Skicka Beställning');
        /*---------------------------------------------------------------------------------*/
    }
    else if(language== 'en')
    {
        /*------------------At inventory page,show data Button. ------------------------------ */
        $("#showWell-Stocked").prop('value', 'Show Data');
        $("#hideWell-Stocked").prop('value', 'Hide Data');

        $("#showFew").prop('value', 'Show Data');
        $("#hideFew").prop('value', 'Hide Data');

        $("#showEmpty").prop('value', 'Show Data');
        $("#hideEmpty").prop('value', 'Hide Data');

        $("#showAll").prop('value', 'Show Data');
        $("#hideAll").prop('value', 'Hide Data');

        $("#sendOrderButton").prop('value', 'Send Order');

        /*---------------------------------------------------------------------------------*/

        /*------------------At Log In page,Log In Button. ------------------------------ */
        $("#btnLogIn").prop('value', 'LOG IN');
        /*---------------------------------------------------------------------------------*/

        /*------------ At payment page ---------------------------------------------------
        var totalCost = localStorage.GlobalTotalCost;
        $('#totalSum').html('Total Sum: $'+totalCost);
        */
        /*---------------------------------------------------------------------------------*/

        /*----------------------- At the menu page----------------------------------*/
        /*We need to bring the global variables. */
        var totalCost = localStorage.GlobalTotalCost;
        var totalDrinks = localStorage.GlobalTotalDrinks;
        var counter = localStorage.GlobalCounter;

        /* This is needed so we don't get old data to print out, the variable counter is in
         the menuScript.js file and is a global variable. If the counter is zero we know that
          none draggable has come into the dropzone tet and the total sum and amount of drinks is
          zero. */
        if(counter == 0)
        {
            totalCost = 0;
            totalDrinks = 0;
        }
        $('#orderlistBox .totalCost').html('Total Sum: $'+totalCost);
        $('#orderlistBox .totalDrinks').html('Amount of drinks: '+totalDrinks);
        /*---------------------------------------------------------------------------------*/

    }
};

/* Function that activates when the user clicks on some of the flag images, depending
on which flag the language is chosen.
 */
$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        /* Function that changes texts that is inside JS files. */
        changeInsideJS(lang);

        /* Need to save the chosen language so we can use the variable in the function language. */
        localStorage.setItem("languageChosen", lang);

        /*Loop through every element with that has the class lang. */
        $('.lang').each(function (index,element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });

});

/* Each time the user refresh the page this function starts, it looks which current language is using
 and loop through the page and set the correct language. If we should not have this function,
 each time the user should refresh the page it would go back to the default language.
 */
function language() {
    var selectedLanguage = localStorage.languageChosen;

    /* Function that changes texts that is inside JS files. */
    changeInsideJS(selectedLanguage);

    $('.lang').each(function (index,element) {
        $(this).text(arrLang[selectedLanguage][$(this).attr('key')]);
    });
};
