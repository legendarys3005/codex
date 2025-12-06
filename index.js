const body = document.getElementById("body");
const languages = [["HTML", "assets/html.png", "html"], ["CSS", "assets/css.png", "css"], ["Kotlin", "assets/kotlin.png", "kotlin"]];
for (let language of languages) {
    const title = language[0];
    const logoPath = language[1];
    const link = language[2]
    const languageButton = createLanguageButton(logoPath, title);
    languageButton.id = title.toLowerCase();
    body.appendChild(languageButton);
    languageButton.addEventListener("click", () => {
        window.open(link, "_self")
    });
}

function searchUpdate() {
    const searchbar = document.getElementById("search");
    const searchedLanguage = languages.filter(element => {
        const name = element[0].toLowerCase();
        return name.includes(searchbar.value.toLowerCase());
    });

    for (let language of languages) {
        const id = language[0].toLowerCase();
        const element = document.getElementById(id);
        if (searchedLanguage.includes(language)) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    }
}

function createLanguageButton(logoPath, title) {
    const languageButton = document.createElement("div");
    languageButton.classList.add("language-button");
    const logo = document.createElement("img");
    logo.src = logoPath;
    logo.alt = title;
    logo.classList.add("logo");
    const titleTag = document.createElement("h3");
    titleTag.classList.add("title");
    const titleData = document.createTextNode(title);
    titleTag.appendChild(titleData);
    languageButton.appendChild(logo);
    languageButton.appendChild(titleTag);
    return languageButton;
}