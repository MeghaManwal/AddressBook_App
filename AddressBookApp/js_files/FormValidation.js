window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    validateAddress();
    validatePhoneNumber();
});

function validateName() {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            console.log(e);
            textError.textContent = e;
        }
    });
}

function validateAddress() {
    const address = document.querySelector('#address');
    const textError = document.querySelector('.address-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).address = address.value;
            textError.textContent = "";
        } catch (e) {
            console.log(e);
            textError.textContent = e;
        }
    });
}

function validatePhoneNumber() {
    const number = document.querySelector('#number');
    const numbererror = document.querySelector('.number-error');
    number.addEventListener('input', function () {
        if (number.value.length == 0) {
            numbererror.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).phonenumber = number.value;
            numbererror.textContent = "";
        } catch (e) {
            console.log(e);
            numbererror.textContent = e;
        }
    });
}