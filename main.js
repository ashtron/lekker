// ==UserScript==
// @name        Invidious playlist length checker
// @description Display total length for playlists on Invidious
// @namespace   ashtron
// @include     /http.+invidious.+\/playlist.*/
// @version     1
// @author      ashtron
// @license MIT
// ==/UserScript==

const formatTime = (seconds) => {
    return [
        parseInt(seconds / 60 / 60),
        parseInt(seconds / 60 % 60),
        parseInt(seconds % 60)
    ]
        .join(":")
        .replace(/\b(\d)\b/g, "0$1")
        .replace(/^0/, "")
}

const lengthElements = Array.from(document.getElementsByClassName("length"))
const lengths = lengthElements.map(element => element.textContent)

let seconds = 0

lengths.forEach(len => {
    const parts = len.match(/\d+/g)
    seconds += parseInt(parts[0] * 60) + parseInt(parts[1])
})

const total = formatTime(seconds)

const infoBox = document.getElementsByClassName("pure-g h-box")[1]

infoBox
    .children[0]
    .children[1]
    .innerText
    += `| ${total}`