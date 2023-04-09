const addBtn = document.getElementById('add-item-btn');
const container = document.getElementById('container');


function onClick(event) {
    event.preventDefault();
    const div = document.createElement('div')
    div.style.display = 'flex';
    div.style.justifyContent = 'space-around'
    div.style.margin = '10px'
    const p = document.createElement('p')
    p.innerText = `Контейнер создан`
    div.append(p)
    const input = document.createElement('input')
    input.type = 'button'
    input.value = 'Закрыть'
    input.style.height = '25px'
    div.append(input)  
    addBtn.parentNode.insertBefore(div, addBtn);
    setTimeout(() => {
        div.remove();
    }, 5000)
    input.addEventListener('click', () => {
        div.remove();
    });
}

addBtn.addEventListener('click', onClick)
