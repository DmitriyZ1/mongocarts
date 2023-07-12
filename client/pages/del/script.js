

const path = window.location.pathname;
const id = path.split('/').at(-1);

async function namedoc(){
    const data = await fetch(`/name/${id}`);
    return await data.json();
}

async function deldoc(){
    const d = await fetch(`/del/${id}`, {
        method: "DELETE",
    })
    return await d.json();
}

namedoc()
    .then((name) => {
        document.querySelector('h3').textContent = `Удалить ${name} ?`   
    })



document.querySelector('.no').addEventListener('click', () => {
    window.location.href = '/';
})
document.querySelector('.yes').addEventListener('click', () => {
    deldoc()
        .then(() => window.location.href = '/');
})