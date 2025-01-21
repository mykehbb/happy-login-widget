document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phoneInput');
    const continueButton = document.querySelector('.continue-button');
    const closeButton = document.querySelector('.close-button');

    // Handle phone input
    phoneInput.addEventListener('input', function(e) {
        // You can add phone number validation here if needed
        const phoneNumber = e.target.value;
        console.log('Phone number:', phoneNumber);
    });

    // Handle continue button click
    continueButton.addEventListener('click', function() {
        const phoneNumber = phoneInput.value;
        if (phoneNumber) {
            console.log('Submitting phone number:', phoneNumber);
            // Add your login logic here
        } else {
            alert('Please enter a phone number');
        }
    });

    // Handle close button click
    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Close button clicked');
        // Add your close logic here
    });
});