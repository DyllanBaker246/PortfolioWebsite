class Project{
    constructor(title, description, skills, link){
        this.title = title;
        this.description = description;
        this.skills = skills;
        this.link = link;
    }

    getTitle(){
        return this.title;
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

const projects = [];


function displayProjectsHome(projects) {
    const container = document.getElementById("home-projects-container");

    if (!container) return;

    container.innerHTML = "";

    projects.slice(0, 3).forEach(project => {
    const skills = project.skills
        .map(skill => `<li>${skill}</li>`)
        .join("");

    container.innerHTML += `
        <a href="${project.link}" class="clickable-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <ul>${skills}</ul>
        </a>
    `;
});
}
function displayProjects(projects) {
    const container = document.getElementById("projects-container");

    if (!container) return;

    container.innerHTML = "";

    projects.forEach(project => {
        const skills = project.skills
            .map(skill => `<li>${skill}</li>`)
            .join("");

        container.innerHTML += `
            <a href="${project.link}" class="clickable-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <ul>
                    ${skills}
                </ul>
            </a>
        `;
    });
}

async function loadProjects() {
    const jsonPath = window.location.pathname.endsWith("projects.html")
    ? "../../src/projects.json"
    : "./src/projects.json";

const response = await fetch(jsonPath);
    const data = await response.json();

    data.forEach(projectData => {
        const project = new Project(
            projectData.title,
            projectData.description,
            projectData.skills,
            projectData.link
        );

        projects.push(project);
    });

    console.log(projects);

    displayProjects(projects);
    displayProjectsHome(projects);
}



loadProjects();
