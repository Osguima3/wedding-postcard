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
    fitText(recipientsDiv, 17);
    fitText(document.getElementById("recipients_header"), 15);
    fitText(document.getElementById("info"), 22);
});

let innerCard = document.getElementById('innerCard');

function flipCard() {
    innerCard.classList.toggle('flipped');
}

