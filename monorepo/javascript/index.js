let controlsContainer = document.getElementById("controls-container");
let valuesContainer = document.getElementById("values-container");

let shuffleButton = document.getElementById("shuffle-button");
let changeValuesButton = document.getElementById("change-button");
let showSelectedValuesButton = document.getElementById("selected-button");

shuffleButton.addEventListener("click", shuffleValues);
changeValuesButton.addEventListener("click",changeValues);
showSelectedValuesButton.addEventListener("click", showSelectedValues);

function shuffleValues() {
    let randomValues = [1, 2, 3, 4];
    let controls = controlsContainer.querySelectorAll("div");

    [...controls].forEach(control => {
        let randomIndex = Math.floor(Math.random() * (randomValues.length));
        control.setAttribute('data-order', randomValues[randomIndex]);
        randomValues.splice(randomIndex, 1);
    });

    let html = [...controls].sort((a, b) => a.getAttribute('data-order') - b.getAttribute('data-order'))
        .map(element => element.outerHTML)
        .join('');

    controlsContainer.innerHTML = html;
    showSelectedValues();
}

function showSelectedValues() {
    const checkedCheckboxes = controlsContainer.querySelectorAll("input[type='checkbox']:checked");

    if (!checkedCheckboxes.length) {
        valuesContainer.innerHTML = "";
        return;
    }

    let selectedValues = [];
    for (let box of checkedCheckboxes) {
        selectedValues.push(box.nextElementSibling.innerHTML);
    }
    
    valuesContainer.innerHTML = selectedValues.map(html => html);
}

function changeValues() {
    let randomValues = ["Hobbies", "Football", "Music", "Gym", "Programming", "Working"];
    let controls = controlsContainer.querySelectorAll("div");

    for (let control of controls) {
        let randomIndex = Math.floor(Math.random() * (randomValues.length));
        control.getElementsByTagName('label')[0].textContent = randomValues[randomIndex];
        randomValues.splice(randomIndex, 1);
    }
    showSelectedValues()
}
