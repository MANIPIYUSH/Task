function handelAddCart() {
    const selectedSize = JSON.parse(window.localStorage.getItem("size"));
    console.log(selectedSize);
    if (selectedSize) {
        const e = document.createElement('div');
        e.innerHTML = `Priming with a hydrating size ${selectedSize} added to cart`;
        const el = document.getElementsByClassName('success-message');
        el[0].appendChild(e);
    } else {
        const e = document.createElement('div');
        e.innerHTML = 'Please Select Size';
        const el = document.getElementsByClassName('size-select-error-message');
        el[0].appendChild(e);
        console.log(el);
    }
}

function handleSize(size) {
    window.localStorage.setItem("size", JSON.stringify(size));
}

window.onload = function () {
    localStorage.clear();
}

function handleSize(size) {
    window.localStorage.setItem("size", JSON.stringify(size));
}

window.onload = function () {
    localStorage.clear();
}