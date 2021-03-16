
function appendCharacter(charName) {
    const main = document.querySelector("main");

    const newArticle = document.createElement("article");

    const newBackground = document.createElement("img");
    newBackground.attributes.alt = "";
    newBackground.src = "img/outdoor-1.jpg";
    newBackground.classList.add("background");
    newArticle.appendChild(newBackground);

    const newCharacter = document.createElement("img");
    newCharacter.attributes.alt = "";
    newCharacter.src = `img/adventurers/${charName}/1.png`;
    newCharacter.classList.add("character");
    newArticle.appendChild(newCharacter);

    main.appendChild(newArticle);

}

const characters = ["amisandra", "lewto"];
for (let i = 0; i < characters.length; i++) {
    appendCharacter(characters[i]);
}
