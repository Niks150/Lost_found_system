
        // Function to load login.html into the modal
        function openLoginModal() {
            const modal = document.getElementById('login-modal');
            const modalBody = document.getElementById('modal-body');

            // Load login.html content
            fetch('login.html')
                .then(response => response.text())
                .then(data => {
                    modalBody.innerHTML = data;
                    modal.style.display = 'flex';
                })
                .catch(err => console.error('Error loading login.html:', err));
        }

        // Close the modal
        function closeModal() {
            const modal = document.getElementById('login-modal');
            modal.style.display = 'none';
        }

        // Attach event listeners to images
        document.querySelectorAll('.image').forEach(image => {
            image.addEventListener('click', (e) => {
                e.preventDefault();
                openLoginModal();
            });
        });
        document.addEventListener("DOMContentLoaded", function () {
            const images = document.querySelectorAll(".image");
        
            images.forEach(image => {
                image.addEventListener("click", function () {
                    window.location.href = "buy_sell.html";
                });
            });
        });