const form = document.querySelector('.bank-card-form');

if (form) {
    const button = form.querySelector('button');
    const cardMember = form.querySelector('#card-member');
    const cardNumber = form.querySelector('#card-number');
    const cvc = form.querySelector('#cvc');
    const dateMonth = form.querySelector('#dateMonth');
    const dateYear = form.querySelector('#dateYear');

    if (button && cvc && cardMember && cardNumber && dateMonth && dateYear) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let isValid = true;

            if (cardNumber.value.length !== 16) {
                console.error('Номер карты заполнен некорректно');
                isValid = false;
            }

            if (!cardMember.value) {
                console.error('Укажите владельца карты');
                isValid = false;
            }

            if (dateMonth.value.length !== 2) {
                console.error('Месяц заполнен некорректно');
                isValid = false;
            }

            if (dateYear.value.length !== 4) {
                console.error('Год заполнен некорректно');
                isValid = false;
            }

            if (cvc.value.length !== 3) {
                console.error('CVC код заполнен некорректно');
                isValid = false;
            }

            if (isValid) {
                console.log(`Номер карты: ${cardNumber.value}`);
                console.log(`Владелец карты: ${cardMember.value}`);
                console.log(`Дата: ${dateMonth.value} / ${dateYear.value}`);
                console.log(`CVC: ${cvc.value}`);
            }
        });
    }

    cardMember.addEventListener('blur', () => {
        if (!cardMember.value) {
            console.error('Укажите владельца карты');
        }
    });

    cardNumber.addEventListener('blur', () => {
        if (cardNumber.value.length !== 16) {
            console.error('Номер карты заполнен некорректно');
        }
    });

    cvc.addEventListener('blur', () => {
        if (cvc.value.length !== 3) {
            console.error('cvc код заполнен некорректно');
        }
    });

    dateMonth.addEventListener('blur', () => {
        if (dateMonth.value.length !== 2) {
            console.error('Месяц заполнен некорректно');
        }
    });

    dateYear.addEventListener('blur', () => {
        if (dateYear.value.length !== 4) {
            console.error('Год заполнен некорректно');
        }
    });
}