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
/* Function that start the page and calls the necessary functions. */
function indexPageLoaded() {
    getTheUserDatabase();
}

/* Calls the database and get all user in the system and send the data to another function. */
function getTheUserDatabase() {
    $.ajax({
        type:'GET',
        url:'http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=user_get_all',
        dataType:'json',
        success:function (data) {
            WelcomeAndInformation(data.payload);
        }
    });
}
/*--------------------------------------Information about the user account data---------------------------------------*/


/* The function finds the current user and attached it to the page. */
function WelcomeAndInformation(AllUsers) {

    /* The username is stored in the local storage from the log in page.*/
    var Username = localStorage.TempUser;

    for(var i=0; i<AllUsers.length; i++)
    {
        /* Find the right username and print out all information about the user. */
        if(Username == AllUsers[i].username)
        {
            $('#startbox').append('<h1 id="startbox">'+ "You are log in as admin and your name is " + AllUsers[i].first_name + " "+
                AllUsers[i].last_name + "!");

            $('#informationSection2').append('<h4 id="startbox">'+ "Username:" +AllUsers[i].username +"<br>"+
                "First name:"+ AllUsers[i].first_name + "<br>" +
                "Last name:"+ AllUsers[i].last_name + "<br>" +
                "Phone number:"+ AllUsers[i].phone + "<br>" +
                "Email:"+ AllUsers[i].email + "<br>");
        }
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*----------------------------------------------------------------------------------------------------------*/