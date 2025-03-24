document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reportForm");
    const description = document.getElementById("description");
    const charCount = document.getElementById("charCount");
    const responseMessage = document.getElementById("responseMessage");

    // Update character count for description
    description.addEventListener("input", function () {
        charCount.textContent = `${description.value.length}/500`;
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const issueType = document.getElementById("issueType").value;
        const descriptionText = description.value.trim();

        if (!issueType) {
            alert("Please select an issue type.");
            return;
        }

        if (descriptionText.length < 10) {
            alert("Description must be at least 10 characters long.");
            return;
        }

        responseMessage.textContent = "Your report has been submitted successfully!";
        responseMessage.style.color = "green";

        // Clear form fields after submission
        form.reset();
        charCount.textContent = "0/500";
    });
});
