document.addEventListener('DOMContentLoaded', () => {
    let operations = document.getElementsByClassName("btns")
    var result
    
    for (let i = 0; i < operations.length; i++) {
        let button = operations[i]

        // Adding a 'click' listener for each operation
        button.addEventListener('click', () => {
            
            // Reading value of operands
            var operands = document.getElementsByClassName('box')
            var operand1 = Number(operands[0].value)
            var operand2 = Number(operands[1].value)

            // button.value could be (+, - , *, /)
            switch (button.value) {
                case "+":
                    result = operand1 + operand2
                    break
                case "-":
                    result = operand1 - operand2
                    break
                case "*":
                    result = operand1 * operand2
                    break
                case "÷":
                    result = operand1 / operand2
                    break
                default:
                    alert("No operation selected!")
            }
        })

    }
        let acAndEqualButtons = document.getElementsByClassName("ac-and-equal")
        let acBtn = acAndEqualButtons[0]
        let equalBtn = acAndEqualButtons[1]

        equalBtn.addEventListener('click', () => {
            document.querySelector("#result").innerHTML = result
        })
        
        acBtn.addEventListener('click', () => {
            document.querySelector("#result").innerHTML = ''
            document.getElementsByClassName('box')[0].innerHTML = ''
            document.getElementsByClassName('box')[1].innerHTML = ''
        })
    
})