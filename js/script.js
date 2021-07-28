function togglePassword() {
    var icon = document.getElementsByClassName("password-icon")[0];
    var input = document.getElementById("password");
    if( input.type === "password" ) {
        input.type = "text";
    } else {
        input.type = "password";
    }
}