fetch("example.md")
    .then(response => response.text())
    .then(markdown => {
        const content = document.getElementById("markdown");

        content.innerHTML = marked.parse(markdown);
    })
    .catch(error => {
        console.error("Error loading Markdown:", error);
    });