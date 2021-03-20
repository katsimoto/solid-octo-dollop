const form = document.querySelector('.bank-card-form');
if (form) {
    const button = form.querySelector('button');
    const formData = new FormData(form);
    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            for (let value of formData.values()) {
                console.log(value);
            }
        })
    }
}