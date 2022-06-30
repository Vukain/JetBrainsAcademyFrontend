const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const company = document.getElementById('company');
const address = document.getElementById('address');
const form = document.getElementById('form');

const formInputs = ['first-name', 'last-name', 'email', 'phone', 'company', 'address'];
let data = [];

form.addEventListener('submit', storeData);

function saveData(input) {
    const inputId = input.id;
    const inputValue = input.value;
    localStorage.setItem(inputId, inputValue);
}

function getData(id) {
    if (!localStorage.getItem(id)) {
        return '';
    }
    return localStorage.getItem(id);
}

function fillInputs() {
    for (let id of formInputs) {
        document.getElementById(id).value = getData(id);
    }
}

fillInputs();

function storeData(e) {
    e.preventDefault();

    let cardData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        address: address.value
    };

    addCard(cardData);
}

if (localStorage.getItem('data')) {
    data = JSON.parse(localStorage.getItem('data'));
}

function addCard(item) {
    if (Object.values(item) !== "") {
        data.push(item);
        localStorage.setItem('data', JSON.stringify(data));
        form.reset();
    }
}

function clearInputs() {
    window.localStorage.clear();
}