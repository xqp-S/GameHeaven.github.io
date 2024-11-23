document.addEventListener("DOMContentLoaded", () => {
    const genreSelect = document.getElementById("Genre");
    const priceRange = document.getElementById("Price");
    const priceValueDisplay = document.getElementById("PriceValue");
    const filterButton = document.querySelector(".main-filter button[type='submit']");

    // Update price value display
    priceRange.addEventListener("input", () => {
        priceValueDisplay.textContent = priceRange.value; // Update displayed price value
    });

    // Filter items based on selected platform, genre, and price
    filterButton.addEventListener("click", () => {
        const selectedGenre = genreSelect.value;
        const maxPrice = parseInt(priceRange.value, 10); // Convert to integer

        // Get all items from the home_img section
        const tables = document.querySelectorAll(".home_img table");

        tables.forEach(table => {
            // Extract relevant information from the table
            const itemPriceText = table.querySelector("h5").textContent; // Get the price text
            const itemPrice = parseInt(itemPriceText, 10); // Convert price to number
            const itemGenre = table.getAttribute("data-genre"); // Get genre from h4 text

            // Check platform, genre, and price conditions
            const genreMatch = selectedGenre === itemGenre || selectedGenre === "All"; // Assuming 'all' is an option in your dropdown
            const priceMatch = itemPrice <= maxPrice;

            // Show or hide item based on filter conditions
            if (genreMatch && priceMatch) {
                table.style.display = ""; // Show item
            } else {
                table.style.display = "none"; // Hide item
            }
        });
    });
});
