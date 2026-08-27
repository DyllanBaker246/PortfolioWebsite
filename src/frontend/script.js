fetch("about.md")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load markdown file");
        }

        return response.text();
    })
    .then(markdown => {
        document.getElementById("about").innerHTML =
            marked.parse(markdown);
    })
    .catch(error => {
        console.error(error);
    });

fetch("versionControl.md")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load markdown file");
        }

        return response.text();
    })
    .then(markdown => {
        document.getElementById("versionControl").innerHTML =
            marked.parse(markdown);
    })
    .catch(error => {
        console.error(error);
    });