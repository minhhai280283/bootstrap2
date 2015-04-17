$(document).ready(function(){

	
	var value=false;

	var form=$("#contact_form");
	var name=$("#name");
	var nameinfo=$("#nameInfo");
	var email=$("#email");
	var emailInfo=$("#emailInfo");
	var pass1=$("#pass1");
	var pass1info=$("#pass1Info");
	var pass2=$("#pass2");
	var pass2info=$("#pass2Info");
	var message=$("#message");
	var button=$("#send");
	var next=$("#next");

	next.hide();

	name.blur(function(){
		validateName();
		console.log(validateName());
		if(validateName()==true){
			$("#next").show();
		}
	});
	email.blur(validateEmail);
	pass1.blur(validatePass1);
	pass2.blur(validatePass2);
	message.blur(validateMessage);
	
	// validateName()=false;
	// validateEmail()=false;
	// validatePass1()=false;
	// validatePass2()=false;
	// validateMessage()=false;

	form.submit(function(){

		if(validateName() & validateEmail() & validatePass1() & validatePass2() & validateMessage())
		{
			alert("ok"+value);


			return true;

		}
		else
		{
			alert("ko thanh cong"+ value);
			return false;
		}

	});


	function validateName(){
		
		if(name.val().length<5){
			name.addClass("error");
			nameinfo.text("ten qua ngan");
			nameinfo.addClass("error");
			return false;
		}
		else{
			name.removeClass("error");
			nameinfo.text("What's your name?");
			value=true;
			return true;
			
		}
		
	}
	function validateEmail()
	{
		var a=$("#email").val();
		var regexp=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		if(regexp.test(a)){
			email.removeClass("error");
			emailInfo.text("So I can get back to you");
			email.removeClass("error");
			return true;
		}
		else{
			email.addClass("error");
			emailInfo.text("sai email");
			emailInfo.addClass("error");
			return false;
		}
	}

	function validatePass1(){
		

		if(pass1.val().length<8){
			pass1.addClass("error");
			pass1info.text("pass qua ngan");
			pass1info.addClass("error");
			return false;
		}
		else{
			pass1.removeClass("error");
			pass1info.text(" ok");
			pass1info.removeClass("error");
			return true;
		}

	}

	function validatePass2(){

		if(pass2.val().length<1){
			pass2info.text("confirm lai pass ^^");
			return false;
		}
		

		if(pass2.val()!==pass1.val()){
			pass2.addClass("error");
			pass2info.text("ko giong pass");
			pass2info.addClass("error");
			return false;
		}
		else{
			pass2.removeClass("error");
			pass2info.text(" ok");
			pass2info.removeClass("error");
			return true;
		}
	}
	function validateMessage(){

		if(message.val().length<30){
			message.addClass("error");
			return false;
		}
		else{
			message.removeClass("error");
			return true;
		}
	}



	if(validateName()==true){
		$("next").show();
	}

	
	
});