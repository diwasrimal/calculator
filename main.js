document.addEventListener('DOMContentLoaded', () => {
    console.log("content loaded");

    var buttons = document.querySelectorAll('button');
    var screen = document.getElementById('screen');
    var result, operationString;

    // Looping over every button
    for (let i = 0; i < buttons.length; i++) {
        
        let button = buttons[i];
        console.log(button.dataset.value)

        // Adding a event listener for each button
        button.addEventListener('click', () => {

            let buttonType = button.dataset.type;
            if (buttonType == 'ac') {
                screen.innerHTML = null
            }
            else if (buttonType == "del") {
                screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1)
            }
            console.log(button.dataset.type);
            screen.innerHTML = screen.innerHTML.concat(button.value);
            console.log(screen.innerHTML);
            
        });
    }

});
