
function searchMaterial() {
    let input = document.getElementById("searchInput");
    let query = input.value.trim().toLowerCase();

    if (query === "") {
        alert("Please enter something to search!");
        return;
    }

    let cards = document.querySelectorAll(
        ".class-card, .material-card"
    );

    let found = false;

    cards.forEach(function(card) {
        if (card.innerText.toLowerCase().includes(query)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    if (!found) {
        alert("No matching result found!");
        cards.forEach(function(card) {
            card.style.display = "block";
        });
    }
}
