//creare l'array con le info dei membri
const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Carrol",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    },
]
console.log(teamMembers)

// stampare le info di ognuno 
for (let i = 0; i < teamMembers.length; i++){
    console.log(`Ecco un membro del team: ${teamMembers[i]["name"]}, il cui ruolo è ${teamMembers[i]["role"]} e il file della sua immagine è ${teamMembers[i]["photo"]}`);
}

//stamparle nel dom, verisone più estesa tanto per scomporre i passaggi e averli visivamente più chiari 
const listNames = document.querySelector("#name-list")
const listRole = document.querySelector("#role-list")
const listPhotos = document.querySelector("#photo-list")

for (let i = 0; i < teamMembers.length; i++){
    let newDivForName = document.createElement("div");
    let newDivForRole = document.createElement("div");
    let newDivForPhoto = document.createElement("div");

    newDivForName.innerHTML = teamMembers[i]["name"];
    newDivForRole.innerHTML = teamMembers[i]["role"];
    newDivForPhoto.innerHTML = `<img src="img/${teamMembers[i]["photo"]}">`;

    listNames.append(newDivForName);
    listRole.append(newDivForRole);
    listPhotos.append(newDivForPhoto);
}