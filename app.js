const words = [
    "which",
    "there",
    "their",
    "about",
    "would",
    "these",
    "other",
    "words",
    "could",
    "write",
    "first",
    "water",
    "after",
    "where",
    "right",
    "think",
    "three",
    "years",
    "place",
    "sound",
    "great",
    "again",
    "still",
    "every",
    "small",
    "found",
    "those",
    "never",
    "under",
    "might",
    "while",
    "house",
    "world",
    "below",
    "asked",
    "going",
    "large",
    "until",
    "along",
    "shall",
    "being",
    "often",
    "earth",
    "began",
    "since",
    "study",
    "night",
    "light",
    "above",
    "paper",
    "parts",
    "young",
    "story",
    "point",
    "times",
    "heard",
    "whole",
    "white",
    "given",
    "means",
    "music",
    "miles",
    "thing",
    "today",
    "later",
    "using",
    "money",
    "lines",
    "order",
    "group",
    "among",
    "learn",
    "known",
    "space",
    "table",
    "early",
    "trees",
    "short",
    "hands",
    "state",
    "black",
    "shown",
    "stood",
    "front",
    "voice",
    "kinds",
    "makes",
    "comes",
    "close",
    "power",
    "lived",
    "vowel",
    "taken",
    "built",
    "heart",
    "ready",
    "quite",
    "class",
    "bring",
    "round"
]


const TARGET = words[Math.floor(Math.random()*101)]
let INPUT = ''
let INDEX = 0

const goToNextRow = () => {
    const currentRow = document.getElementById("currentRow")
    const newCurrentRow = currentRow.nextElementSibling
    currentRow.removeAttribute("id")
    if (newCurrentRow) {
        newCurrentRow.id = "currentRow"
        const newCurrentBox = newCurrentRow.firstElementChild
        newCurrentBox.id = "currentBox"
    } else {
        setTimeout(() => {
            alert(`Game Over. Correct answer: ${TARGET.toUpperCase()}`)
            location.reload()
        }, 100)
    }
}

const checkWord = () => {
    if (INPUT == TARGET) {
        setTimeout(() => {
            alert("You won! Reload to play again.")
            location.reload()
        }, 100)
    } else {
        INPUT = ''
        INDEX = 0
        goToNextRow()
    }
}


const goToNextBox = () => {
    const currentBox = document.getElementById("currentBox")
    const newCurrentBox = currentBox.nextElementSibling
    currentBox.removeAttribute("id")
    if (newCurrentBox) {
        newCurrentBox.id = "currentBox"
    } else {
        checkWord()
    }
}

const checkLetter = (letter) => {
    const currentBox = document.getElementById("currentBox")
    if (letter == TARGET[INDEX]) {
        // console.log('green')
        currentBox.classList.add('green')
    } else if (TARGET.includes(letter)) {
        // console.log('yellow')
        currentBox.classList.add('yellow')
    } else (
        // console.log('gray')
        currentBox.classList.add('grey')
    )
    INPUT += letter.toLowerCase()
    INDEX++
    goToNextBox()
}

const addLetter = (letter) => {
    const currentBox = document.getElementById("currentBox")
    const newPTag = document.createElement("p") // <p></p>
    newPTag.classList.add("letter")
    const text = document.createTextNode(letter)
    newPTag.appendChild(text)
    currentBox.appendChild(newPTag)
    checkLetter(letter)
}

document.addEventListener("keypress", (e) => {
    // console.log(e.key)
    addLetter(e.key)
})