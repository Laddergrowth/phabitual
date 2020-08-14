const { body } = document;


function changeBackground(number) {
        
    //check background is already there
    let previousBackground;
    if (body.className)
        previousBackground = body.className;

    //check background is already there end


        //reset css 
    body.className = '';
     //reset css end


    switch (number) {

        case '1':
               return (previousBackground === 'background-1' ? false : body.classList.add('background-1'));
               
        case '2':
            return (previousBackground === 'background-2' ? false : body.classList.add('background-2'));

        case '3':
            return (previousBackground === 'background-3' ? false : body.classList.add('background-3'));

        case '4':
            return (previousBackground === 'background-4' ? false : body.classList.add('background-4'));

        
        case '5':
            return (previousBackground === 'background-5' ? false : body.classList.add('background-5'));

        default:
            break;

        }



}

