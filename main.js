document.addEventListener('DOMContentLoaded', () => {
    let operations = document.getElementsByClassName("btns")
    let operands = document.getElementsByClassName('box')
    let operand1 = Number(operands[0].value)
    let operand2 = Number(operands[1].value)

    for (let i = 0; i < operations.length; i++) {
        let operation = operations[i]

        // Adding a 'click' listener for each operation
        operation.addEventListener('click', () => {
            switch (operation) {
                case "+":
                    console.log(operand1 + operand2)
                    break
                case "-":
                    console.log(operand1 - operand2)
                    break
                case "*":
                    console.log(operand1 * operand2)
                    break
                case "÷":
                    console.log(operand1 / operand2)
                    break
                default:
                    return
            }
        })
    }
})