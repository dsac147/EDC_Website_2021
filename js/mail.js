function sendEmail() {

		var name = document.getElementById("name").value; 
		var mail = document.getElementById("mail").value; 
		var sub = document.getElementById("subject").value;
		var msg = document.getElementById("message").value;

		Email.send({
			Host: "smtp.gmail.com",
			Username : "#######",
			Password : "#######",
			To : 'ecell@bmsit.in',
			From : "##########",
			Subject: name+" | "+mail+": "+sub,
			Body: msg,
		})
			.then(function (message) {
			alert("mail sent successfully")
			});
		}