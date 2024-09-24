const skillSection = document.getElementById("skills-section") as HTMLElement;
const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
console.log(skillSection);
console.log(toggleButton);

toggleButton.addEventListener("click", () => {
console.log("Button clicked!");

    
if (skillSection.style.display === "none") {
    skillSection.style.display = "block";
} else {
    skillSection.style.display ="none";
}

});