class Project{
    constructor(title, description, skills){
        this.title = title;
        this.description = description;
        this.skills = skills;
    }

    displayCard(){
        let skillsHtml = "";
        for(const skill of this.skills){
            skillsHtml += `<li>${skill}</li>`;
        }

        return ` 
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <ul>${skillsHtml}</ul>
        `;
    }
}

const certificateAuthority = new Project(
    "Certificate Authority",
    "lorem emsum",
    ["meow", "meow"]);
const testProj2 = new Project(
    "title2",
    "lorem emsumjsdhfjksd jlksdjf lksdjflksdjf sbfdkhsd kjhdfskd jrhfjkdsfhkdgfjfhkjdf,fj", 
    ["bark", "bark"]);


document.getElementById("Certificate Authority").innerHTML = certificateAuthority.displayCard();
document.getElementById("project 2").innerHTML = testProj2.displayCard();