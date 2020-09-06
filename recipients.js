// document.addEventListener('DOMContentLoaded', () => {
    let recipientsParam = new URL(window.location.href).searchParams.get("recipients");
    let recipients = recipientsParam === null ? [] : recipientsParam.split(",");

    let html = "";
    let i = 0;
    for (; i < recipients.length; i++) {
        html += "<p>" + recipients[i] + "</p><div class=\"line\">";
    }

    for (; i < 5; i++) {
        html += "<p style='color: white'>-</p><div class=\"line\">";
    }

    let recipientsDiv = document.getElementById("recipients_list");
    recipientsDiv.innerHTML = html;
    fitText(recipientsDiv, 1.7);
    fitText(document.getElementById("recipients_header"), 1.5);
    fitText(document.getElementById("info"), 2.2);
// });
