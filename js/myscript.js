$(document).ready(function() {
	var username,password,count,locked;
	count = 0;
	locked = false;

	$("#submit").click(function() {
		username = $('#username').val();
		password = $('#password').val();

		if (locked == false) {
			console.log("user is not locked");
			if (username == "" || username == null) {
				alert("Please enter a valid username");
				$('#username').css('border', '1px solid red');
				$('#message1').css('display','block');
				count = count + 1;
				if (count == 6) {
					alert("account is locked!");
					$('#message4').css('display', 'block');
					console.log("account is locked");
					count = 0;
					locked = true;
					counter();
				}
				console.log("counter is: " + count);
			} else if (password == "" || password == null) {
				alert("Please enter a valid password");
				$('#password').css('border', '1px solid red');
				if (username !== "") {
					$('#message1').css('display', 'none');
					$('#username').css('border', '1px solid #cccccc');
				}
				$('#message2').css('display', 'block');
				count = count + 1;
				if (count == 6) {
					alert("account is locked");
					console.log("account is locked");
					count = 0;
					locked = true;
					counter();
				}
				console.log("counter is: " + count);
			} else {
				alert("Username is: " + username + " & " + "Password is: " + password);
				$('#message2').css('display', 'none');
				$('#username').css('border', '1px solid #cccccc');
				$('#password').css('border', '1px solid #cccccc');
				$('#username').val("");
				$('#password').val("");
				$('#message3').css('display', 'block');
			}
		} else {
			console.log("account waiting");
		}

		function counter() {
			var sec = 0;
			var counter = setInterval(function() {
				sec++;
				console.log(sec);
				if(sec == 20) {
					clearInterval(counter);
					return locked = false;
				}
				$('#message4').css('display', 'none');
			}, 1000);
		}

		/*Messing around with Timer*/
		// set minutes


		/* Checking if username is valid */
		/*
		if (username == "" || username == null) {
			alert("Please enter a valid username");
			count = count + 1; // keeping track of errors
			if (count > 5) {
				alert("account is locked!");
			}
			console.log(count);
		} else if (password == "" || password == null) {
			alert("Please enter a valid password");
			count = count + 1;
			console.log(count);
			if (count > 5) {
				alert("account is locked!");
			}
		} else {
			alert(username + " " + password);
		}
		*/
	});
});