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
    getTheUserDatabase();
}

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

function WelcomeAndInformation(AllUsers) {
    var Username = localStorage.TempUser;
    //$("#startbox").append( '<span id="welcomeUser" class="UsernameText">"+Username+"</span>' )

    for(var i=0; i<AllUsers.length; i++)
    {
        if(Username == AllUsers[i].username)
        {
            $('#startbox').append('<h1 id="startbox">'+ "Welcome " + AllUsers[i].first_name + " "+
                AllUsers[i].last_name + "!");

            $('#informationSection2').append('<h4 id="startbox">'+ "Username:" +AllUsers[i].username +"<br>"+
                "First name:"+ AllUsers[i].first_name + "<br>" +
                "Last name:"+ AllUsers[i].last_name + "<br>" +
                "Phone number:"+ AllUsers[i].phone + "<br>" +
                "Email:"+ AllUsers[i].email + "<br>" +
                "Card number: **** **** **** 7023");
        }
    }
}

/*--------------------------------------Information button---------------------------------------*/
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}