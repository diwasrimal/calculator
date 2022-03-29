document.addEventListener('DOMContentLoaded', () => {
    console.log("content loaded")

    let buttons = document.getElementsByTagName('button')

    console.log(buttons[3].value)
    console.log(buttons.length)

    for (let i = 0; i < buttons.length; i++) {
        console.log(buttons[i].value)
    }

})