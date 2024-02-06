const initializePage = () => {
    // Function to handle changes in the star rating
    const handleStarRating = (event) => {
        const selectedStars = event.target.parentNode.querySelectorAll('.star');
        const selectedIndex = Array.from(selectedStars).indexOf(event.target);

        // Clear all stars
        selectedStars.forEach(star => star.innerHTML = '&#9734;');

        // Fill in selected stars
        for (let i = 0; i <= selectedIndex; i++) {
            selectedStars[i].innerHTML = '&#9733;';
        }
    };

    // Adding event listeners to the star rating
    const starRatingContainer = document.querySelector('.leave-review-section .star-rating');
    starRatingContainer.addEventListener('click', handleStarRating);
};

document.addEventListener("DOMContentLoaded", initializePage);