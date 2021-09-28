const number = document.querySelectorAll(".number")

numbers.forEach( (number) => {
   number.addEventListener("click", (event) => {
     console. log (event.target.value)
   })
    
})

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
   calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach( (number) => {
   number.addEventListener("click", (event) => {
      updateScreen(event.target.value)
   })
})

let preNumber = ''
let calculatorionOperator =''
let currentNumber = '0'

const inputNumber = (number) => {
   if (currentNumber === '0') {
      currentNumber = number
   } else {
      currentNumber += number
   }
}

const operators = document.querySelectorAll(".operator")

operators.forEach( (operator) => {
   operator.addEventListener("click", (event) => {
      console.log(event.target.value)
   })
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click',() => {
   console.log('equal button is pressed')
   
})

const calculate = () => {
   let result =''
   switch(calculationOperator) {
      case '+':
         result = parseInt (prevNumber) + parseInt (currentNumber)
         break
      case '-':
         result = parseInt (preNumber) - parseInt (currentNumber)
         break
      case '*':
         result = parseInt (preNumber) * parseInt (currentNumbe)
         break
      case '/':
         result = parseInt (preNumber) / parseInt (currentNumber)
         break
      default:
         return
   }
   currentNumber = result
   calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click',() => {
   calculate()
   updateScreen(currentNumber)
})

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click',() => {
   console.log ('AC button is Pressed')
})

const clearAll = () => {
   prevnumber = ''
   calculationOperator = ''
   currentNumber = '0'
}
 
clearBtn.addEventListener('click',() => {
   clearAll()
   updateScreen(currentNumber)
})

inputdecimal = (dot) => {
   if(currentNumber. includes('.')) {
      return
   }
   currentNumber += dot
}
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click'), (event) => {
   inputDecimal (event.target.value)
   updateScreen(currentNumber)
}

const inputOperator =  (operator) => {
   if (calculationOperator ==='') {
      prevNumber = currentNumber
   }
   calculationOperator = operator
   currentNumber = '0'
}