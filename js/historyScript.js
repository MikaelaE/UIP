/**
 * Created by Joel_ on 2017-02-21.
 */
/**
 * Created by Joel_ on 2017-02-21.
 */
function docLoaded(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
/* Function that start the page and calls the necessary functions. */
function indexPageLoaded() {
    getTheUserName();
}

/*Function that take the current username and send it forward to another function.*/
function getTheUserName() {
    var Username = localStorage.TempUser;
    getTheUserPurchasesHistory(Username);
}

/*The function calls the database with the current username and get all purchase history from the user.*/
function getTheUserPurchasesHistory(Username) {
    var link = 'http://pub.jamaica-inn.net/fpdb/api.php?username='+Username+'&password='+Username+'&action=purchases_get';
    console.log(link);
    $.ajax({
        type:'GET',
        url:link,
        dataType:'json',
        success:function (data) {
            Information(data.payload);
        }
    });
}

/* The function attached the user purchase information to the page. */
function Information(PurchasesHistory) {

    for(var i=0; i<PurchasesHistory.length; i++)
    {
        $('#informationSection2').append('<p id="startbox">'+ "Number:" + i + " , Name:" + PurchasesHistory[i].namn +
            ", Timestamp:" + PurchasesHistory[i].timestamp + " <br> ");
    }
}
