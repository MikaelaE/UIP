/**
 * Created by Joel_ on 2017-02-08.
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
    /* Need to call the function so every item get the language that is chosen.*/
    language();
}

function validate() {
    getTheUserDatabase();
}

function getTheUserDatabase() {
    $.ajax({
        type:'GET',
        url:'http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=user_get_all',
        dataType:'json',
        success:function (data) {
            printOutTheMenu(data.payload);
        }
    });
}

function printOutTheMenu(AllUsers) {
    /* un(username) get the value from the form in the html page. */
    var un = document.login.username.value;
    /* psw(password) get the value from the form in the html page and convert it with a hash function. */
    var psw = md5(document.login.password.value);

    var checkNotNull = "";
    /* See below for explanation.
    var pw = document.login.password.value;
    */
    var valid = false;

    for(var i=0; i<AllUsers.length; i++)
    {
        /* The password is not correct in the Documentation, for example,
         User Name & Password is aamsta in the doc but in the database the password
         is number such as 88ab1f4dac9422a7ee3cb34eca3793b7, maybe security hashed?.
          Therefor only the securit check with the username.
         if((un == AllUsers[i].username)  && (pw == AllUsers[i].password))
         */

        /* Loop the database with all the users. Need to check that the username is not null because there is
        *  usernames in the database that have null as username. */
        if((un == AllUsers[i].username) && (psw== AllUsers[i].password) && (AllUsers[i].username != checkNotNull))
        {
            valid = true;
            /* Sett the user name to a global variable. So we can use the other functions to the database. */
            localStorage.setItem("TempUser", un);
            break;
        }
    }
    /* Checks if the user credentials is 3, in that case the user is a customer. */
    if (valid && (AllUsers[i].credentials==3))
    {
        alert("Login as user was successful");
        /*Take the path from the logIn.html file. */
        window.location = "../../html/Customer with account pages/loginSuccess.html";
        return false;
    }

    /* Checks if the user credentials is 0, in that case the user is a admin. */
    else if (valid && (AllUsers[i].credentials==0))
    {
        alert("Login as admin was successful");
        /*Take the path from the logIn.html file. */
        window.location = "../../html/Admin pages/AdminLogIn.html";
        return false;
    }
    else
    {
        alert("Wrong password or username!");
        window.location = "logIn.html";
        return false;
    }
}