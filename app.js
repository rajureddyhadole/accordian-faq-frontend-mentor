const buttons = document.querySelectorAll('.accordion-title button');
const contents = document.querySelectorAll('.accordion-content');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const content = contents[index];

        content.classList.toggle('active');
        
        if (content.classList.contains('active')) {
            button.innerHTML = '<img src="assets/images/icon-minus.svg">'
        } else {
            button.innerHTML = '<img src="assets/images/icon-plus.svg">'
        }

        contents.forEach((otherContent, otherIndex) => {
            if (otherIndex !== index) {
                otherContent.classList.remove('active');
                buttons[otherIndex].innerHTML = '<img src="assets/images/icon-plus.svg">';
            }
        })

    })
})