$(document).ready(function(){

  var accountform=$("#accountForm");
  var next=$("#next");
  var username=$("#username");
  var email=$("#email");
  var password=$("#password");
  var cpassword=$("#confirm_password");
  var name=$("#name");
  var country=$("#country");
  var datepicker=$("#datepicker_value");
  var step1=$("#step1");
  var step2=$("#step2");
  var next=$("#next");
  var prev=$("#prev");
  var submit=$("#submit");


  prev.hide();
  submit.hide();
  // $("#next").hide();
  // $("#prev").prop('disabled', false);

  next.click(function(){
    if(accountform.valid()==true){
      $('#tabs a:last').tab("show");
      prev.show();
      submit.show();
      next.hide();
    }


  });
  prev.click(function(){
    $('#tabs a:first').tab("show");
    prev.hide();
    submit.hide();
    next.show();
  });

  submit.click(function(){

    if(accountform.valid()==true){
      $.blockUI();

    }
  });



  // next.click(function(){

  //   $('#tabs a:last').tab("show");


  // });

  // prev.click(function(){

  //   $('#tabs a:first').tab("show");


  // });




  $("#signup").click(function () {
    $("#sign_up").modal('show');
  });

  $("#accountForm").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        username: {
          required: true,
          minlength: 2
        },
        name: {
          required: true,
          minlength: 5
        },

        country: {
          required: true,

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
        password: {
          required: "Please provide a country",
          minlength: "Your password must be at least 3 characters long"
        },
        name: {
          required: "Please enter a name",
          minlength: "Your name must consist of at least 5 characters"
        },
        country: {
          required: "Please provide a country",
          minlength: "Your password must be at least 3 characters long"
        },

        email: "Please enter a valid email address",
        agree: "Please accept our policy"
      }
    });



});