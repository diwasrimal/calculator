document.addEventListener('DOMContentLoaded', () => {
    console.log("content loaded");

    var buttons = document.querySelectorAll('button');
    var screen= document.getElementById('result');
    var screenContent = screen.innerHTML;
    var result, operationString

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        console.log(button.dataset.value)

        // Add a event listener for each button
        button.addEventListener('click', () => {

            let buttonType = button.dataset.type;
            if (buttonType == 'ac') {
                screenContent = null
            }
            // else if (buttonType = 'del') {
            //     let contentLength = screenContent.length - 1;
            //     screenContent = screenContent.slice(0, contentLength);
            // }
            

            console.log(button.dataset.type)
            screenContent += button.value
            
            
        });
    }

    

})