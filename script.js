const booksByCountry = {
    "mexico": ["Aura", "Pedro Paramo", "Respuesta a Sor Filotea"],
    "nicaragua": ["Azul"],
    "espana": ["Brevisima Relacion de la Destrucción de las Indias"],
    "colombia": ["Cien años de soledad", "La vorágine", "María"],
    "chile": ["Desolacion", "La casa de los espiritus", "Residencia en la tierra", "Los detectives salvajes"],
    "venezuela": ["Doña Bárbara"],
    "argentina": ["Facundo", "Rayuela", "Ficciones"],
    "cuba": ["Los pasos perdidos", "Motivos de Son"]
};

function showMap() {
    document.getElementById("mapContainer").style.display = "block";
}

function showSecondOption() {
    alert("Opción 2 aún no está implementada.");
}

function showBooks(country) {
    const bookList = document.getElementById("bookList");
    const books = booksByCountry[country];
    const bookListElement = document.getElementById("books");

    // Clear the book list before displaying it
    bookListElement.innerHTML = "";
    
    if (books) {
        books.forEach(book => {
            const listItem = document.createElement("li");
            listItem.textContent = book;
            listItem.onclick = () => openPDF(book);
            listItem.ontouchstart = () => openPDF(book); // For mobile touch support
            bookListElement.appendChild(listItem);
        });
        bookList.style.display = "block";
    } else {
        bookList.style.display = "none";
    }
}

function openPDF(bookTitle) {
    const pdfPath = `pdf/${bookTitle.replace(/\s+/g, '_')}.pdf`;
    window.open(pdfPath, "_blank");
}

// Touch-friendly function to handle map area clicks
function handleMapAreaEvents() {
    const mapAreas = document.querySelectorAll('area');
    mapAreas.forEach(area => {
        // Event listeners for both mouse and touch interactions
        area.addEventListener("mouseover", () => showBooks(area.alt.toLowerCase()));
        area.addEventListener("touchstart", () => showBooks(area.alt.toLowerCase()));
    });
}

// Initialize functions on window load
window.onload = function() {
    if (document.querySelector('map[name="image-map"]')) {
        imageMapResize();
    }
    handleMapAreaEvents(); // Set up touch and mouse events for map areas
};
