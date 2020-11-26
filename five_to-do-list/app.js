

const input = document.querySelector('.add-items')
const itemsList = document.querySelector('.itemList')
const items = JSON.parse(localStorage.getItem('item')) || []



function addingItem(e) {
    e.preventDefault();

    const text = (this.querySelector('[type=text]')).value
    const item = {
        text
        }
    items.push(item)

    showList(items, itemsList)
    localStorage.setItem('item', JSON.stringify(items))//Localstorage
   // console.log(item);
    this.reset();

}


function showList(i = [], iL) {
    iL.innerHTML = i.map((it,j) => {
        return `<form class="new">
        <input type="checkbox">
        <li type="text">${it.text}</li>
        <input type="submit" class="done" value="Delete">
        </form>`

    }).join('')
}

input.addEventListener('submit', addingItem)

showList(items, itemsList)

const buton = document.querySelectorAll('.new')


buton.forEach(e => e.addEventListener('change', workdDoneCheck))

function workdDoneCheck(e) {
    e.preventDefault();
    const html = this.querySelector('[type=text]')
    // const bu=document.querySelector('[type=text]')

    if (e.target.checked) { html.className = "st" } else if (!e.target.checked) { html.className = "st_" }
    //console.log(html);

    // localStorage.setItem('items',JSON.stringify(items))
    // showList(items, itemsList)
}



function deleteWork(e) {
    e.preventDefault();
    //console.log(localStorage.getItem('item'));

    const two = this.querySelector('[type=text]')
    // console.log(two.value);

    const one = this.querySelector('[type=checkbox]')
    const three = this.querySelector('[type=submit]')
    one.remove();
    two.remove();
    three.remove();
    //console.log(localStorage.getItem('item'));

    //localStorage.removeItem('item')
    //console.log(items);


}


buton.forEach(e => e.addEventListener('submit', deleteWork))


function removeLocalStore() {
    localStorage.clear()
    location.reload()
}