document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.registration-form');
    const usersList = document.querySelector('.users-list');

    function validateInput(event) {
        const inputValue = event.target.value;
        const cur = event.target;
        event.target.value = inputValue.replace(/[^А-яА-ЯёЁ -]/g, '');
    }

    form.querySelectorAll('input[type="text"]').forEach(input => {
        input.addEventListener('input', validateInput)
        input.addEventListener('blur', event => {
            if(!event.target.value) return;

            cur.value = cur.value.trim().replace(/[-\s]+/g, '');
            cur.value = cur.value[0].toUpperCase() + cur.value.slice(1).toLowerCase();
        })
    });

    form.addEventListener('submit', event => {
        event.preventDefault();
        const newElement = document.createElement('li');

        event.target.querySelectorAll('input[type="text"]').forEach(input => {
            const newElementParagr = document.createElement('p');
            
            newElementParagr.textContent = `${input.name}: ${input.value}`;
            newElement.appendChild(newElementParagr);

            input.value = '';
        })

        usersList.appendChild(newElement); 
    })
});