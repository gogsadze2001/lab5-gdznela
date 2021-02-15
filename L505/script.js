let input = prompt('რისი ყიდვა გსურს?', '');
let color = input == 'laptop' ? 'green' : input == 'desktop' ? 'blue' : '';
document.querySelectorAll('.' + input + '-item').forEach(el => el.style.backgroundColor = color);