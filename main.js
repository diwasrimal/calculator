document.addEventListener('DOMContentLoaded', () => {
    console.log("content loaded");

    var buttons = document.querySelectorAll('button');
    var resultScreen = document.getElementById('result');
    var result, operationString

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        console.log(button.dataset.value)

        // Add a event listener for each button
        button.addEventListener('click', () => {
            
            console.log(button.dataset.type)
            
            
        });
    }

    

})
            // let buttonType = button.dataset.type;
            // if (buttonType == 'ac') {
            //     resultScreen.innerHTML = null
            // }
            





            // console.log(button.dataset.type)
            // resultScreen.innerHTML += button.value