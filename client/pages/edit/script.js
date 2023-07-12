

const url = window.location.pathname;
const id = url.split('/').at(-1);

const nodedate = document.querySelector('.date');
const nodetitle = document.querySelector('.title');
const nodetext = document.querySelector('.text');

async function renderedit(){
    const data = await fetch(`ed/${id}`);
    const obj = await data.json();
    complect(obj);
}

function complect(obj){
    nodedate.value = obj.date;
    nodetitle.value = obj.title;
    nodetext.value = obj.text;
}


async function savecart(){
    const obj = {date: nodedate.value, title: nodetitle.value, text: nodetext.value, id};
    const post = await fetch('/edit/' , {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(obj)
    })
    const result = await post.json();
    return result;
}


document.querySelector('.save').addEventListener('click', () => { 
    savecart()
        .then(e => {window.location.href = '/'} ) 
});
document.querySelector('.no').addEventListener('click', () => { 
    window.location.href = '/'; 
});

renderedit();


