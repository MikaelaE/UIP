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
    WelcomeAndInformation();
}

function WelcomeAndInformation() {
    var Username = localStorage.TempUser;
    //$("#startbox").append( '<span id="welcomeUser" class="UsernameText">"+Username+"</span>' )
    $('#startbox').append('<h1 id="startbox">'+ Username);
}

