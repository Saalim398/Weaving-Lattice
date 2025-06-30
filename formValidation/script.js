function validateForm() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phno = document.getElementById("phnumber").value;
            var pswd = document.getElementById("pswd").value;
            var cpswd = document.getElementById("cpswd").value;

            if (!name || !email || !phno || !pswd || !cpswd) {
                alert("All fields are required.");
                return false;
            }
            if(isNaN(phno) || !phno.length > 0|| !phno.length<10){
                alert("Please Enter Valid Phone number")
            }
            
            if (pswd !== cpswd) {
                alert("Passwords do not match.");
                return false;
            }

            alert("Form submitted successfully!");
            return true;
}