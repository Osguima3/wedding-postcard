document.addEventListener('DOMContentLoaded', () => {
	let recipientsParam = new URL(window.location.href).searchParams.get("recipients");
	let recipients = recipientsParam === null ? [] : recipientsParam.split(",");

	let html = "";
	let i = 0;
	for (; i < recipients.length; i++) {
	    html += "<p>" + recipients[i] + "</p><div class=\"line\"></div>";
	}

	for (; i < 5; i++) {
	    html += "<p style='color: white'>-</p><div class=\"line\"></div>";
	}

	let recipientsDiv = document.getElementById("recipients_list");
	recipientsDiv.innerHTML = html;
	if (recipients.length > 0) {
		fitText(recipientsDiv, 1.7);
		fitText(document.getElementById("recipients_header"), 1.5);
		fitText(document.getElementById("info"), 2.2);
	}
});

let innerCard = document.getElementById('innerCard');
function flipCard() {
	innerCard.classList.toggle('flipped');
}

