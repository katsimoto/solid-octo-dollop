const form = document.querySelector('.bank-card-form');
if (form) {
    const button = form.querySelector('button');
    const cardMember = form.querySelector('#card-member');
    const cardNumber = form.querySelector('#card-number');
    const scv = form.querySelector('#csv');
    const date = form.querySelector('#date');
    if (button && scv && cardMember && cardNumber && date) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`Номер карты: ${cardNumber.value}`);
            console.log(`Владелец карты: ${cardMember.value}`);
            console.log(`Дата: ${date.value}`);
            console.log(`CSV: ${scv.value}`);
        })
    }
}