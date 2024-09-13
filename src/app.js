import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Skriv en valfri mening: ', (sentence) => {
  console.log('Antal ord: ' + wordCounter(sentence))
  console.log('Antal bokstäver: ' + letterCounter(sentence))
  console.log('Meningen baklänges: ' + sentenceInReverse(sentence))
  console.log('Längsta ordet är: ' + longestWordInSentence(sentence))
  rl.close()
})

function wordCounter(sentence) {
  let wordArray = sentence.split(' ')
  let wordCount

  wordArray.forEach((element) => {
    if( element !== '')
  })


  return wordCount
}

function letterCounter(sentence) {
  let letterArray = sentence.split('')
  let letterCounter = 0
  let regEx = /^[a-zA-ZåäöÅÄÖ]+$/

  letterArray.forEach((element) => {
    if (regEx.test(element)) {
      letterCounter++
    }
  })

  return letterCounter
}

function sentenceInReverse(sentence) {
    let letterArray = sentence.split('')

    let emptyArray = []

    letterArray.forEach((element) => {
        emptyArray.unshift(element)

    })

    return emptyArray.join('')

}

function longestWordInSentence(sentence) {
    let wordArray = sentence.split(' ')
    let longestWord = wordArray[0]

    wordArray.forEach((element) => {
        if(longestWord.length < element.length) {
            longestWord = element
        }
    })

    return longestWord


}
