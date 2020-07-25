// Progression 1
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
var form = document.getElementById("myform")
function formValidation() {
    var uname = document.getElementById("usertext");
    var uemail = document.getElementById("emailtext");
    var passid = document.getElementById("passwordtext");
    if (checkUserName(uname, 8, 15)) {
        if (checkEmail(uemail)) {
            if ( checkPassword(passid,5,9)) {
                return true;
            }
        }
    }
    return false;
}

function checkUserName(uname, mx, my) {
    var uid_len = uname.value.length;
    if (uid_len == 0) {
        alert("User name should not be empty / length be between " + mx + " to " + my);
        uname.focus();
        return false;
    }
    return true;
}

// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len <= mx || passid_len >my) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}