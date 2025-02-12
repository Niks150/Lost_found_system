document.addEventListener("DOMContentLoaded", function () {
    const ctx1 = document.getElementById('usersChart').getContext('2d');
    const ctx2 = document.getElementById('lostFoundChart').getContext('2d');
    const ctx3 = document.getElementById('categoryChart').getContext('2d');

    // Bar Chart for Users
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Total Users', 'Active Users', 'New Users'],
            datasets: [{
                label: 'Users Data',
                data: [500, 320, 120],
                backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
                borderWidth: 1
            }]
        },
        options: {
            animation: {
                duration: 1500,
                easing: 'easeOutBounce'
            }
        }
    });

    // Doughnut Chart for Lost & Found
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Lost Items', 'Found Items', 'Cross-Checked'],
            datasets: [{
                data: [200, 180, 90],
                backgroundColor: ['#f1c40f', '#9b59b6', '#1abc9c']
            }]
        },
        options: {
            animation: {
                animateScale: true
            }
        }
    });

    // Pie Chart for Category Distribution
    new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Electronics', 'Clothing', 'Books', 'Documents', 'Accessories'],
            datasets: [{
                data: [50, 30, 40, 20, 10],
                backgroundColor: ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#f39c12']
            }]
        },
        options: {
            animation: {
                animateRotate: true,
                animateScale: true
            }
        }
    });
});
