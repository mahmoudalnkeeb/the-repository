const anchors = [
  { name: "linkedin", element: document.getElementById("inLink") },
  { name: "github", element: document.getElementById("githubLink") },
  { name: "email", element: document.getElementById("emailLink") },
  { name: "resume", element: document.getElementById("resumeLink") },
];
const nameElement = document.getElementById("name");
const roleElement = document.getElementById("role");
const companyElement = document.getElementById("company");
const aboutElement = document.getElementById("about");

fetch("../config.json").then(async (res) => {
  const { info, socials } = await res.json();
  nameElement.innerText = info.name;
  roleElement.innerText = info.role;
  if (!!info.company) {
    companyElement.classList.remove('company-empty')
    companyElement.innerText = info.company;
  }
  aboutElement.innerText = info.about
  anchors.forEach((anchor) => {
    anchor.element.setAttribute("href", socials[`${anchor.name}`]);
  });
});
