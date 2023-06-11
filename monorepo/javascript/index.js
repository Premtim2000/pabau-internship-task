let shuffleButton = document.getElementById("shuffle-button")
let checkBoxes = document.getElementById("checkbox-inputs")
let childrenBoxes = checkBoxes.querySelectorAll("label")
let changeValuesButton = document.getElementById("change-button")
let labelChildren = checkBoxes.querySelectorAll("span")
let selectedButton = document.getElementById("selected-button")
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

    shuffleButton.addEventListener("click",()=>{
//         let arr = []
//      for(let array of childrenBoxes){
//         arr.push(array)
//     }
//     [arr[0].innerHTML, arr[1].innerHTML, arr[2].innerHTML, arr[3].innerHTML] = [arr[1].innerHTML, 
//     arr[0].innerHTML, arr[3].innerHTML, arr[2].innerHTML]

//     console.log(arr)
let array = []

for(let boxes of childrenBoxes){
    array.push(boxes)
    array.sort(() => 0.5 - Math.random())
    console.log(boxes[0])
}
array.innerHTML = array.innerHTML
console.log(array)

 })

changeValuesButton.addEventListener("click",()=>{
    for(let box of labelChildren){
        box.textContent = Math.floor(Math.random() * 10).toString()
    }
}) 

selectedButton.addEventListener("click", ()=>{
    let boxArray = []
    if(![...checkBoxInput].some(checkbox => checkbox.checked))
    {
        selectedButtonDiv.innerHTML = ""
        return;
    }
    for(let box of checkBoxInput){
        if(box.checked){
            boxArray.push(box.nextElementSibling.innerHTML)
            selectedButtonDiv.classList.remove("display-hidden")
        }
    }
    selectedButtonDiv.innerHTML = boxArray.map(text => text)
})