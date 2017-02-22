/**
 * Created by Joel_ on 2017-02-22.
 */

/* Function that erase the local storage so the current data about the user does not
exist any more when the user log out.
 */
function EraseLocalUserData() {
    localStorage.clear();
    alert("You have now log out!");
}