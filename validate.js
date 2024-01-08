function validate(e){
    // alert("Hello World")
    var name,email,package,phone,comments;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    package = document.getElementById('package').value;
    phone = document.getElementById('phone').value;
    comments = document.getElementById('comments').value;

    if(name==''|| email==''|| package==''|| phone==''|| comments==''){
        // alert('all fields are required');
        document.getElementById('nameErr').innerHTML="Name is required";
        document.getElementById('name').style= "border-color:red";
        document.getElementById('emailErr').innerHTML="Email is required";
        document.getElementById('email').style= "border-color:red";
        document.getElementById('phoneErr').innerHTML="Phone is required";
        document.getElementById('phone').style= "border-color:red";
        document.getElementById('packageErr').innerHTML="Package is required";
        document.getElementById('package').style= "border-color:red";
        
    }
    e.preventDefault();

}
document.getElementById('booking').addEventListener('submit',validate)
