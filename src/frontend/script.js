fetch("src/frontend/about.md")
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

fetch("src/frontend/versionControl.md")
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

// const button = document.getElementById("cryptologyProj");

// button.addEventListener("click", function () {

//     fetch("src/frontend/project-md/cryptoFinal.md")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Could not load markdown file");
//             }

//             return response.text();
//         })
//         .then(markdown => {
//             document.getElementById("about").innerHTML =
//                 marked.parse(markdown);
//         })
//         .catch(error => {
//             console.error(error);
//         });

// });

const certificateAuthorityButton = document.getElementById("certificateAuthority");

certificateAuthorityButton.addEventListener("click", function () {

    fetch("src/frontend/project-md/certificateAuthority.md")
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

});

const vpnButton = document.getElementById("vpn");

vpnButton.addEventListener("click", function () {

    fetch("src/frontend/project-md/vpn.md")
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

});

const sshButton = document.getElementById("ssh");

sshButton.addEventListener("click", function () {

    fetch("src/frontend/project-md/ssh.md")
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

});

const pgpButton = document.getElementById("pgp");

pgpButton.addEventListener("click", function () {

    fetch("src/frontend/project-md/pgp.md")
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

});

const ipsecButton = document.getElementById("ipsec");

ipsecButton.addEventListener("click", function () {

    fetch("src/frontend/project-md/ipsec.md")
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

});