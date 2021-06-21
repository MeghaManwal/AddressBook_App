let addressBookList;

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Called Event");
    addressBookList = getDataFromLocalStorage();
    document.querySelector('.per-count').textContent = addressBookList.length;
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml ="<tr><th>Full Name</th> <th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th></tr>"
    let innerHtml = `${headerHtml}`;
    for(let addressData of addressBookList) {
        innerHtml =`${innerHtml}
    
        <tr>
        <td>${addressData._name}</td>
        <td>${addressData._address}</td>
        <td>${addressData._city}</td>
        <td>${addressData._state}</td>
        <td>${addressData._zipcode}</td>
        <td>${addressData._phonenumber}</td>
        <td>
            <img name="${addressData._id}" src="../assets/icon/delete-black-18dp.svg" alt="Delete" onclick="remove(this)">
            <img name="${addressData._id}" src="../assets/icon/create-black-18dp.svg" alt="Edit" onclick="update(this)">
        </td>
    </tr>`;
    document.querySelector('#display').innerHTML=innerHtml;
    }    
}

const getDataFromLocalStorage= () => {
    return localStorage.getItem('AddressBookList')? 
           JSON.parse(localStorage.getItem('AddressBookList')) : [];
}