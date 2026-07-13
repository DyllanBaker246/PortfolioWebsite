class Book{
    constructor(title, rating, plot, pacing, characters, worldBuilding, logic, total, link){
        this.title = title;
        this.rating = rating;
        this.plot = plot;
        this.pacing = pacing;
        this.characters = characters;
        this.worldBuilding = worldBuilding;
        this.logic = logic;
        this.total = total;
        this.link = link;
    }
}

const books = [];

const colors = [
    "#8B0000",
    "#355E3B",
    "#1E3A5F",
    "#6A4C93",
    "#8B5A2B",
    "#A63D40",
    "#2F4858",
    "#D4AF37"
];

const textColors = [
    "#F8E9D2", // For #8B0000 (warm ivory)
    "#F2E8D5", // For #355E3B (cream)
    "#EAF4FF", // For #1E3A5F (light blue-white)
    "#F3E8FF", // For #6A4C93 (lavender white)
    "#FFF4D6", // For #8B5A2B (parchment)
    "#FFE8D6", // For #A63D40 (warm ivory)
    "#E6F4F8", // For #2F4858 (icy white)
    "#3A2E00"  // For #D4AF37 (dark brown)
];
const borders = [
    "#5E0000", // Dark Burgundy
    "#244028", // Dark Forest Green
    "#13253D", // Dark Navy
    "#4A3568", // Dark Purple
    "#68431F", // Dark Brown
    "#7A2D30", // Dark Crimson
    "#20323D", // Dark Blue-Gray
    "#A3872B"  // Dark Gold
];

const heights = ["42vh", "45vh", "39vh"];
const heightDiffs = ["0vh", "-3vh", "3vh"]

async function loadBooks() {
    const jsonPath = "books.json";

const response = await fetch(jsonPath);
    const data = await response.json();

    data.forEach(bookData => {
        const book = new Book(
        bookData.title,
        bookData.rating,
        bookData.plot,
        bookData.pacing,
        bookData.characters,
        bookData.worldBuilding,
        bookData.logic,
        bookData.total,
        bookData.link
        );

        books.push(book);
    });

    displaybooks(books);
}

loadBooks();

function displaybooks(books) {
    const container = document.getElementById("bookShelf");

    if (!container) return;

    container.innerHTML = "";

    books.forEach(book => {
        const indexColor = Math.floor(Math.random() * colors.length);
        const indexHeight = Math.floor(Math.random() * heights.length);
        const color = colors[indexColor];
        const border = borders[indexColor];
        const text = textColors[indexColor];
        const height = heights[indexHeight];
        const heightDiff = heightDiffs[indexHeight];

        container.innerHTML += `
            <a href="${book.link}" class="book" style="
            --book-color: ${color};
            --border-color: ${border};
            text-decoration: none;
            --text-color: ${text};
            --book-height: ${height};
            --height-diff: ${heightDiff};
            ">
                <h1>${book.title}</h1>
            </a>
        `;
    });
}