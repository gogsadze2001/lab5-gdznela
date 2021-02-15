let li2 = document.querySelectorAll('li')[1];

function isEmpty(element) {
    return element.innerHTML == '' ? true : false;
}

console.log(isEmpty(li2));