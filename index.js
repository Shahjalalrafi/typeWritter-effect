const displayText = document.getElementById('text')
const phrases = ['i am shahjalal rafi', 'i love to code', 'i love to learn new thing']

let i = 0
let j = 0

let currentPhrases = []
let isDeleting = false
let isEnd = false

function loop() {
    isEnd = false
    displayText.innerHTML = currentPhrases.join('')

    if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length) {
            currentPhrases.push(phrases[i][j])
            j++
            displayText.innerHTML = currentPhrases.join('')
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrases.pop(phrases[i][j])
            j--
            displayText.innerHTML = currentPhrases.join('')
        }

        if (j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j == 0) {
            currentPhrases = []
            isDeleting = false
            i++
        }

        if (i == phrases.length) {
            i = 0
        }

    }

    const speedUp = Math.random() * (80 - 50) + 50
    const normalSpeed = Math.random() * (300 - 200) + 200
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed

    setTimeout(loop, time)
}

loop()

