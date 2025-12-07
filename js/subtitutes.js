var joinBtn = document.getElementById("joinButton");
var emailBox = document.getElementById("emailContainer");
var submitEmail = document.getElementById("submitEmail");
var userEmail = document.getElementById("email");

joinBtn.onclick = function () {
    emailBox.style.display = "block";
    joinBtn.style.display = "none";
};

//email validation
function validateEmail () {
    var userEmailValue = userEmail.value;

    if (userEmailValue == "") {
        alert("Please enter your email");
        return;
    }

    var at = userEmailValue.indexOf("@");
    var dot = userEmailValue.lastIndexOf(".");
    var space = userEmailValue.indexOf(" ");

    if (at < 1 || dot < at + 2 || dot + 2 >= userEmailValue.length || space !== -1) {
        alert("Please enter a valid email address");
        return;
    }

    //successfully validated
    emailBox.style.display = "none";
    document.getElementById("newsletterMsg").style.display = "block";
};

submitEmail.onclick = function() {
    validateEmail();
};

// submit form by hitting Enter key src=https://www.w3schools.com/jsref/event_onkeydown.asp?
userEmail.onkeydown = function (event) {
    if (event.key == "Enter") {
        validateEmail();
    }
};

