fetch("./vc.md")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load markdown file");
        }

        return response.text();
    })
    .then(markdown => {
        document.getElementById("version-control").innerHTML =
            marked.parse(markdown);
    })
    .catch(error => {
        console.error(error);
    });
