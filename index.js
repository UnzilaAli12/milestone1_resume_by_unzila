var skillSection = document.getElementById("skills");
var toggleButton = document.getElementById("toggle-skills-button");
console.log(skillSection);
console.log(toggleButton);
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
    console.log("Button clicked!");
    if (skillSection.style.display === "none") {
        skillSection.style.display = "block";
    }
    else {
        skillSection.style.display = "none";
    }
});
