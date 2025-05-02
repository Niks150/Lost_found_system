
/*close button*/
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const smallBox = document.getElementById("small-box");
    const closeBtn = document.getElementById("close-btn");

    // Add click event to each image in the box
    document.querySelectorAll(".box img").forEach((img) => {
        img.addEventListener("click", () => {
            const smallBoxImage = smallBox.querySelector("img");
            smallBoxImage.src = img.src; // Set the clicked image
            overlay.style.display = "flex"; // Show the overlay
        });
    });

    // Add click event to close button
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none"; // Hide the overlay
    });
});



/*modify the code*/
document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", function () {
        const overlay = this.querySelector("#overlay");
        overlay.style.display = "flex";
        overlay.style.display = "block";
    });
});

document.querySelectorAll("#close-btn").forEach((btn) => {
    btn.addEventListener("click", function (event) {
        event.stopPropagation();
        this.closest("#overlay").style.display = "none";
    });
});

/*---*/
document.addEventListener("DOMContentLoaded", function () {
    const overlayContainer = document.querySelector(".scrollable-container");

    // Fetch stored data from localStorage
    const foundItems = JSON.parse(localStorage.getItem("foundItems")) || [];

    // Dynamically create small-box containers
    foundItems.forEach((item, index) => {
        const box = document.createElement("a");
        box.classList.add("box");
        box.setAttribute("href", "#");

        // Create the HTML structure for the box
        box.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
        `;

        // Add click event to show the overlay with item details
        box.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default action of the anchor tag

            const overlay = document.getElementById("overlay");
            const smallBox = document.getElementById("small-box");

            // Update the small-box content with the clicked item's details
            smallBox.innerHTML = `
                <button id="close-btn">❌</button>
                <img src="${item.image}" alt="${item.name}">
                <div class="section"><strong>Item Name:</strong> <p>${item.name}</p></div>
                <div class="section"><strong>Last Seen Location:</strong> <p>${item.location}</p></div>
                <div class="section"><strong>Description:</strong> <p>${item.description}</p></div>
                <div class="section"><strong>Date:</strong> <p>${item.date}</p></div>
            `;

            // Show the overlay

            overlay.style.display = "flex";

            overlay.style.display = "flex";


            // Close button functionality
            document.getElementById("close-btn").addEventListener("click", function () {
                overlay.style.display = "none";
            });
        });

        // Append the box to the container
        overlayContainer.appendChild(box);
    });
});


