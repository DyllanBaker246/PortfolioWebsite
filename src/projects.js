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
const portfolioWebsite = new Project(
    "Portfolio Website",
    "Created a static website from scratch in order to show my portfolio. Also served as an oportunity to learn various scripting languages.",
    ["HTML", "CSS", "JavaScript", "Web Dev"]);
const certificateAuthority = new Project(
    "Certificate Authority",
    "Created a Certificate Authority that issues certificates to Apache, Microsoft IIS, and Node.js web servers.",
    ["PKI", "Digital Signatures", "X.509", "Certificate Chains", "Apache", "Node.js"]);
const virtualPrivateNetwork = new Project(
    "Virtual Private Network",
    "Secured a connection between two devices using an encrypted tunnel.", 
    ["WireGuard", "Linux"]);
const passwordlessSSH = new Project(
    "Passwordless SSH",
    "Set up a passwordless SSH into a Linux system using public key cryptography.", 
    ["SSH", "Public Key Cryptography", "Linux"]);
const IPSecChannel = new Project(
    "IPSec Channel",
    "lorem emsum",
    ["meow", "meow"]);
const prettyGoodPrivacy = new Project(
    "Pretty Good Privacy",
    "lorem emsumjsdhfjksd jlksdjf lksdjflksdjf sbfdkhsd kjhdfskd jrhfjkdsfhkdgfjfhkjdf,fj", 
    ["bark", "bark"]);
const DNSSECBasedDNSServer = new Project(
    "DNSSEC-Based DNS Server",
    "lorem emsumjsdhfjksd jlksdjf lksdjflksdjf sbfdkhsd kjhdfskd jrhfjkdsfhkdgfjfhkjdf,fj", 
    ["bark", "bark"]);


document.getElementById("Portfolio Website").innerHTML = portfolioWebsite.displayCard();
document.getElementById("Certificate Authority").innerHTML = certificateAuthority.displayCard();
document.getElementById("Virtual Private Network").innerHTML = virtualPrivateNetwork.displayCard();
document.getElementById("Passwordless SSH").innerHTML = passwordlessSSH.displayCard();
document.getElementById("IPSec Channel").innerHTML = IPSecChannel.displayCard();
document.getElementById("Pretty Good Privacy").innerHTML = prettyGoodPrivacy.displayCard();
document.getElementById("DNSSEC-Based DNS Server").innerHTML = DNSSECBasedDNSServer.displayCard();
