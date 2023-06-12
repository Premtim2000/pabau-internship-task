let shuffleButton = document.getElementById("shuffle-button")
let checkBoxes = document.getElementById("checkbox-inputs")
let childrenBoxes = checkBoxes.querySelectorAll("label")
let changeValuesButton = document.getElementById("change-button")
let labelChildren = checkBoxes.querySelectorAll("span")
let showSelectedValuesButton = document.getElementById("selected-button")
let selectedButtonDiv = document.getElementById("selected-div")
let checkBoxInput = checkBoxes.querySelectorAll("input")

// const arr = [];
//     for(let boxes of childrenBoxes){
//         arr.push(boxes)
//     }
//     const shuffleArray = (arr) =>
//     arr.sort(() => Math.random()-0.5)

//     console.log(shuffleArray(arr))


// let myArray = []
// function shuffle(array){
//     let shuffledArray = []
//     let usedArray = []
//     let i = 0;
//     for(let boxes of childrenBoxes){
//         myArray.push(boxes)
//     }
//     while(i < array.length){
//         let randomNumber = Math.floor(Math.random() * array.length)
//         if(!usedArray.includes(randomNumber)){
//             shuffledArray.push(array[randomNumber])
//             usedArray.push(randomNumber)
//             myArray[i].innerHTML = shuffledArray[i].innerHTML
//             i++;
//         }
//     }
//     return shuffledArray
// }
// console.log(shuffle(myArray)) 

    // const shuffleArray = array =>{
    //     for (let i = array.length -1; i>0; i--){
    //         const j = Math.floor(Math.random() * (i+1))
    //         const temp = array[i]
    //         array[i] = array[j]
    //         array[j] = temp
    //     }
    // }
    // console.log(shuffleArray)

//     shuffleButton.addEventListener("click",()=>{
// //         let arr = []
// //      for(let array of childrenBoxes){
// //         arr.push(array)
// //     }
// //     [arr[0].innerHTML, arr[1].innerHTML, arr[2].innerHTML, arr[3].innerHTML] = [arr[1].innerHTML, 
// //     arr[0].innerHTML, arr[3].innerHTML, arr[2].innerHTML]

// //     console.log(arr)
// let array = []



//  })

shuffleButton.addEventListener("click", shuffleValues);

changeValuesButton.addEventListener("click",changeValues);

showSelectedValuesButton.addEventListener("click", showSelectedValues);

function showSelectedValues() {
    let boxArray = [];
    if(![...checkBoxInput].some(checkbox => checkbox.checked)) {
        selectedButtonDiv.innerHTML = ""
        return "";
    }
    for(let box of checkBoxInput) {
        if(box.checked) {
            boxArray.push(box.nextElementSibling.innerHTML)
            selectedButtonDiv.classList.remove("display-hidden")
        }
    }
    selectedButtonDiv.innerHTML = boxArray.map(text => text);
}

function changeValues() {
    let randomTexts = ["Hello","Hello2","Hello3","Hello4","Hello5","Hello6"]
    let newText = "OK"
    for(let box of labelChildren){
        randomTexts.push(newText)
        let otherRandomTexts = Math.floor(Math.random() * (randomTexts.length))
        box.textContent = randomTexts[otherRandomTexts]
        randomTexts.splice(otherRandomTexts, 1)
        console.log(randomTexts)
    }
}

function shuffleValues() {
    // let array = [];
    // for(let boxes of labelChildren){
    //     array.push(boxes)
    //     let sortedArray = array.sort(() => 0.5 - Math.random())
    //     boxes.innerHTML = array[sortedArray]
    //     array.splice(sortedArray,0);
    // }
    // console.log(array)
    let randomValues = []
    for(let box of labelChildren) {
        randomValues.push(box)
        let randomIndex = Math.floor(Math.random() * randomValues.length);
        box.innerHTML = randomValues[randomIndex].innerHTML;
        randomValues.splice(randomIndex,0)
        console.log(randomValues)
    }
}
