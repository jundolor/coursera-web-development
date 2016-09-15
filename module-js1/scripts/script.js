document.addEventListener("DOMContentLoaded",
	function(event){
		console.log('DOM is loaded');


		document.querySelector("button")
			.addEventListener("click", function () {

			// Call server to get the name
			$ajaxUtils
			.sendGetRequest("/data/name.json", 
				function (res) {
					var message = 
					res.firstName + " " + res.lastName
					if (res.likesChineseFood) {
						message += " likes Chinese food";
					}
					else {
						message += " doesn't like Chinese food";
					}
					message += " and uses ";
					message += res.numberOfDisplays + 1;
					message += " displays for coding.";

					document.querySelector("#content")
					.innerHTML = "<h2>" + message + "</h2>";
			});
		});
	}
);