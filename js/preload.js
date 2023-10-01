console.log("loaded preload.js");

// cookies
function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
		c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
		}
	}
	return "";
}

let delete_cookie = function(cname) {
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	alert("You have been logged out");
	window.location.href = "./login.html";
};

//navbar profile button
function profile() {
	let login = getCookie("login")
	if (login == "true") {
		window.location.href = "./profile.html";
	}
	else {
		window.location.href = "./login.html";
	}
}
