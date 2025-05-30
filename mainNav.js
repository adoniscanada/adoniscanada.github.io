function aboutClick() {
  console.log("about");
}
function projectsClick() {
  console.log("projects");
}

const btnAbout = document.getElementById("btn-about");
const btnProjects = document.getElementById("btn-projects");

btnAbout.onclick = aboutClick;
btnProjects.onclick = projectsClick;
