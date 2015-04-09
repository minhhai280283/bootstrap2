$(document).ready(function(){

  $("#submit").click(function(){
    $(this).showLoading("toggle");
  });

  $("#hhh").mouseenter(function(){
    $("#myModal").modal('show');
  });

  $("#u19vn").click(function(){
    $("#u19").modal('show');

  });

  $("#signup").click(function(){
    $("#sign_up").modal('show');
  });
  
  //validation
  $.validator.setDefaults({
    submitHandler: function() {
      alert("submitted!");
    }
  });


  $("#signupForm").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        username: {
          required: true,
          minlength: 2
        },
        password: {
          required: true,
          minlength: 8
        },
        confirm_password: {
          required: true,
          minlength: 8,
          equalTo: "#password"
        },
        email: {
          required: true,
          email: true
        },
        topic: {
          required: "#newsletter:checked",
          minlength: 2
        },
        agree: "required"
      },
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        username: {
          required: "Please enter a username",
          minlength: "Your username must consist of at least 2 characters"
        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long"
        },
        confirm_password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long",
          equalTo: "Please enter the same password as above"
        },
        email: "Please enter a valid email address",
        agree: "Please accept our policy"
      }
    });

  //show loading

  
});

