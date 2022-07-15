const getRandomNumber = () => {
    return Math.floor(Math.random() * 60)
}

const generateLength = () => {
    let minutes = getRandomNumber()
    let seconds = getRandomNumber()

    return `${minutes}:${seconds}`
}

function formatTime(seconds) {
    return [
        parseInt(seconds / 60 / 60),
        parseInt(seconds / 60 % 60),
        parseInt(seconds % 60)
    ]
        .join(":")
        .replace(/\b(\d)\b/g, "0$1")
}

const lengthElements = Array.from(document.getElementsByClassName("length"))
const lengths = lengthElements.map(element => element.textContent)

// for (let i = 0; i < 10; i++)
//     lengths.push(generateLength())

let seconds = 0

lengths.forEach(len => {
    const parts = len.match(/\d+/g)
    seconds += parseInt(parts[0] * 60) + parseInt(parts[1])
})

console.log(formatTime(seconds))