
// set items in localStorage

// localStorage.setItem('userId', 87952214);


const addLocal = () => {
    const idInput = document.getElementById.apply('storage-id');
    const id = idInput.value;

    const valueInput = document.getElementById.apply('storage-value');
    const value = valueInput.value;



    // condition check 
    if (id && value) {
        localStorage.setItem(id, value)
    }
    idInput.value = '';
    valueInput.value = '';

}



