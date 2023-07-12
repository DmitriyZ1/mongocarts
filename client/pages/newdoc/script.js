

const nodedate = document.querySelector('.date');
const nodetitle = document.querySelector('.title');
const nodetext = document.querySelector('.text');


async function savecart(){
    const obj = {date: nodedate.value, title: nodetitle.value, text: nodetext.value};
    const post = await fetch('/new' , {
        method: "POST",
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




