const body = document.getElementById("body");
const languages = [["HTML", "assets/html.png", "html"], ["CSS", "assets/css.png", "css"], ["Kotlin", "assets/kotlin.png", "kotlin"]];
for (let language of languages){
    const title = language[0];
    const logoPath = language[1];
    const link = language[2]
    const languageButton = createLanguageButton(logoPath, title);
    body.appendChild(languageButton);
    languageButton.addEventListener("click", () => {
        window.open(link, "_self")
    });
}



function createLanguageButton(logoPath, title) {
    const languageButton = document.createElement("div");
    languageButton.classList.add("language-button");
    const logo = document.createElement("img");
    logo.src = logoPath;
    logo.alt = title;
    logo.id = title;
    logo.classList.add("logo");
    const titleTag = document.createElement("h3");
    titleTag.classList.add("title");
    const titleData = document.createTextNode(title);
    titleTag.appendChild(titleData);
    languageButton.appendChild(logo);
    languageButton.appendChild(titleTag);
    console.log(languageButton);
    return languageButton;
}