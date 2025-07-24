let question = document.querySelector(".question")
let answers = document.querySelectorAll(".answer")
let start = document.querySelector(".start-container")
let container = document.querySelector(".container")
let result = document.querySelector(".result")
let button = document.querySelector("button")

function randint(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {  // Цикл проходиться по всіх елементах з кінця до початку
    let j = Math.floor(Math.random() * (i + 1));  // Вибираємо індекс рандомного елемента
    [array[i], array[j]] = [array[j], array[i]] // Міняємо місцями з поточним елементом.
  } 
}


let signs = ["+", "-", "*", "/"]

function getRandomSign(){
return signs [randint(0,3)]
}sdfsdf
class Question {
  constructor(){
    let a = randint(1,30)
    let b = randint(1,30)
    let sign = getRandomSign()
    this.question = `${a} ${sign} ${b}`

    if (sign == '+') { this.correct = a + b }
        else if (sign == '-') { this.correct = a - b }
        else if (sign == '*') { this.correct = a * b }
        else if (sign == '/') { this.correct =Math.round(a/b) }


    this.answers = [
            randint(this.correct - 15, this.correct - 1),
            randint(this.correct - 15, this.correct - 1),
            this.correct,
            randint(this.correct + 1, this.correct + 15),
            randint(this.correct + 1, this.correct + 15),
  
    ]
    shuffle (this.answers)
  }


        
  display(){
  question.innerHTML = this.question
  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = this.answers[i]
  }
}
}

let correct_counter= 0
let counter = 0
let current_question = new Question()
current_question.display()

for(let i = 0; i < answers.length; i++){
  answers[i].addEventListener("click", () => {
    if (parseInt(answers[i].innerHTML) === current_question.correct){correct_counter++
      answers[i].style.background = "#4dff4d"
        anime({
                targets: answers[i],
                background:  '#b3b3ff',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })
     }else{

answers[i].style.background = "#ff9999"
        anime({
                targets: answers[i],
                background:  '#b3b3ff',
                duration: 500,
                delay: 100,
                easing: 'linear'
        })
       
     }
    counter++
  current_question = new Question()
  current_question.display()
  })
}
button.addEventListener("click", ()=>{
container.style.display="flex" 
start.style.display="none"
setTimeout(() =>{
  let accuray= Math.round(correct_counter*100/counter)
result.innerHTML=`Правильно: ${correct_counter}
Усього:${counter}
Точність: ${accuray}%`

container.style.display="none" 
start.style.display="flex"
},10000)
correct_counter=0
counter=0
})

