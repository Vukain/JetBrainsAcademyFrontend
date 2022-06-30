const cards = document.getElementById('cards');

function renderCard(data) {
    data.forEach((item) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'submit-history-card');
        card.innerHTML = `
            First Name
            <p class="card-first-name">${item.firstName}</p>
            Last name
            <p class="card-last-name">${item.lastName}</p>
            Email
            <p class="card-email">${item.email}</p>
            Phone
            <p class="card-phone">${item.phone}</p>
            Company
            <p class="card-company">${item.company}</p>
            Address
            <p class="card-address">${item.address}</p>
            <button class="delete-button">Delete</button>`;
        cards.append(card);
    })
}

if (localStorage.getItem('data')) {
    data = JSON.parse(localStorage.getItem('data'));
    renderCard(data);
}