// Iteration 1: Names and Input

const hacker1 = 'Eliher'
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Alejandro'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}else if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else{
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

//3.1.1
newStr = ''
arr = hacker1.split('')

arr.forEach(e => newStr += `${e.toUpperCase()} `)

console.log(newStr)
//3.1.2
console.log(hacker1.split('').join(' ').toUpperCase())

//3.2
console.log(hacker2.split('').reverse().join(''))

//3.3
resu = hacker1.localeCompare(hacker2)

if(resu === 1){
  console.log(`Yo, the navigator goes first definitely.`)
}else if(resu === -1){
  console.log(`The driver's name goes first.`)
}else{
  console.log('What?! You both have the same name?')
}

//BONUS 1

const paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac tempor nisl, eget rutrum nisl. Vivamus sed lectus ut ipsum porttitor faucibus. Aenean tincidunt vel dui quis varius. Vivamus nec efficitur purus, sed ultricies nunc. Aenean luctus pharetra lacus at imperdiet. Donec tortor nisi, euismod a blandit vel, volutpat vel sapien. Sed mollis tellus at suscipit fermentum. Proin aliquet lorem nec nulla fermentum sodales. Vestibulum ipsum est, aliquam ut facilisis quis, dictum et tortor. Ut consectetur, neque a vestibulum efficitur, sapien magna tempor magna, non dignissim leo felis sed nibh Praesent hendrerit quam ipsum, id scelerisque mauris ultricies eget. Vestibulum lorem nulla, cursus vitae neque ac, finibus auctor odio. Sed nec leo sagittis, consectetur nisi vitae, cursus dui. Curabitur et diam arcu. In accumsan ultricies mattis. Donec in quam enim. Phasellus aliquam eros et varius elementum. Vivamus varius ut velit in tempor. Suspendisse nisi nisi, vulputate et erat vel, pharetra accumsan tortor. Proin at felis quis lectus interdum accumsan. Curabitur id aliquam lacus, non semper nulla. Mauris bibendum nunc felis, sit amet imperdiet lorem malesuada sit amet. Phasellus malesuada nibh enim, et finibus tortor elementum sed. Ut sagittis ac nibh placerat suscipit. Curabitur posuere elementum justo, sit amet laoreet leo. Integer ullamcorper nisl non odio congue dapibus. Aliquam nunc quam, tempus vel pellentesque ac, luctus id leo. Aliquam iaculis, elit at viverra efficitur, metus erat maximus velit, sit amet blandit dolor sem ac ipsum. In mattis quam augue, et semper quam varius eget. Duis consectetur odio vel lacus pellentesque, vel ultricies diam sagittis.`

const wrds = paragraphs.split(' ')
let countWrds = 0
let specificCount = 0

wrds.forEach(e => {
    countWrds += 1
    if(e === 'et'){
        specificCount += 1
    }
})

console.log(countWrds, specificCount)

//BONUS 2

const phraseToCheck = 'A man, a plan, a canal, Panama!'
const convert = phraseToCheck.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g, '').split(' ')
console.log(convert)

if(convert === phraseToCheck.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g, '').replace(' ', '').split('').reverse().join('')){
    console.log('yes')
}