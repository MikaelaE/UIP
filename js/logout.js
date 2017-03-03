/**
 * Created by Joel_ on 2017-02-22.
 */

/*-------------------------------------These functions is for the NO button---------------------------*/

/* Function that start the page and calls the necessary functions.
* The function getTheUserDatabase is necessary for the button NO to work, this because
* the the buttons redirection to another page depends if the user is a admin or a customer.
* */
function indexPageLoaded() {
    language();
}

/* Calls the database and get all user in the system and send the data to another function. */
function getTheUserDatabase() {
    $.ajax({
        type:'GET',
        url:'http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=user_get_all',
        dataType:'json',
        success:function (data) {
            getTheUserCredentials(data.payload)
        }
    });
}

/*Function that take the current usernames CredentialsNumber and send it forward to another function.*/
function getTheUserCredentials(AllUserData) {
    var Username = localStorage.TempUser;

    for(var i=0; i<AllUserData.length; i++)
    {
        if(Username == AllUserData[i].username)
        {
            var CredentialsNumber = AllUserData[i].credentials;
            GoBackToUserIndexPage(CredentialsNumber);
        }
    }
}

function GoBackToUserIndexPage(CredentialsNumber) {

    /* Checks if the user is admin or a customer. Depending of what the user
     is, the redirection to the page changes. This because the html files is in different folders.
     */
    var Username = localStorage.TempUser;
    console.log(Username);
    console.log(CredentialsNumber);

    /* Admin has credentials 0. */
    if(CredentialsNumber==0)
    {
        window.location = "../../html/Admin pages/AdminLogIn.html";
    }

    /* Customer has credentials 3. */
    else if(CredentialsNumber ==3)
    {
        window.location = "../../html/Customer with account pages/LoginSuccess.html";
    }
}
/*--------------------------------------------------------------------------------------------------------*/

/*-------------------------------------This function is for the Yes button---------------------------*/

/* Function that erase the local storage so the current data about the user does not
exist any more when the user log out.
 */
function EraseLocalUserData() {
    localStorage.clear();
    alert("You have now log out!");
    window.location = "../../index.html";
}

/*--------------------------------------------------------------------------------------------------------*/
