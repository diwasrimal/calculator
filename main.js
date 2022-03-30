document.addEventListener('DOMContentLoaded', () => {

    let buttons = document.querySelectorAll('button');
    let inputScreen = document.getElementById('input');
    let result = document.getElementById('result');
    let equaledBefore = false;

    // Looping over every button
    for (let i = 0; i < buttons.length; i++) {
        
        let button = buttons[i];
   
        // Adding a event listener for each button
        button.addEventListener('click', () => {
            
            let buttonType = button.dataset.type;
            
            switch (buttonType) {
                case 'ac':
                    clear(inputScreen);
                    clear(result);
                    break;

                case 'del':
                    clear(result);
                    inputScreen.innerHTML = inputScreen.innerHTML.slice(0, inputScreen.innerHTML.length - 1);    
                    break;

                case 'equals':
                    result.innerHTML = eval(inputScreen.innerHTML);
                    // equaledBefore = true;
                    break;
                
                case 'ans':
                    inputScreen.innerHTML = result.innerHTML;
                    clear(result);

            }
            

            console.log("You clicked a num")

            // if (equaledBefore && button.dataset.type == 'num') {
            //     console.log("yes ")
            //     clear(result);
            //     clear(inputScreen);
            //     equaledBefore = false;
            // }
            
            
            inputScreen.innerHTML = inputScreen.innerHTML.concat(button.value);
        });
    }

});

function clear (screen) {
    screen.innerHTML = null;
} 
