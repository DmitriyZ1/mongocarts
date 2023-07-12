

async function cartbase(){
    const res = await fetch('/carts');
    const carts = await res.json();
    cartsrend(carts);
}    



function cartsrend(arr) {
    arr.forEach(element => {
        const li = document.createElement("li");
        li.dataset.id = element._id;
        
        const divCart = document.createElement("div");
        divCart.classList.add("cart");
       
        const divDate = document.createElement("div");
        divDate.classList.add("date");
        divDate.innerHTML = "<span>Дата :</span>" + element.date;
        
        const divTitle = document.createElement("div");
        divTitle.classList.add("title");
        divTitle.innerHTML = "<span>Название :</span>" + element.title;
        
        const divText = document.createElement("div");
        divText.classList.add("text");
        divText.innerHTML = "<span>Текст :</span>" + element.text;

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');

        const butDel = document.createElement('button');
        const butEdit = document.createElement('button');
        const butComments = document.createElement('button');
        butDel.textContent = 'Удалить';
        butEdit.textContent = 'Изменить';
        butComments.textContent = 'Коментарии';
        butEdit.classList.add('ed');
        butDel.classList.add('del');
        
        buttons.append(butDel);
        buttons.append(butEdit);
        buttons.append(butComments);
        
        divCart.append(divDate);
        divCart.append(divTitle);
        divCart.append(divText);
        divCart.append(buttons);
        
        li.append(divCart);

        document.querySelector(".carts ul").append(li);
    });
}

document.querySelector('.carts').addEventListener('click', (e) => {
    if(e.target.classList.contains('ed')) {
        const id = e.target.closest('li').getAttribute('data-id');
        window.location.href = `/edit/${id}`;
    }
    if(e.target.classList.contains('del')) {
        const id = e.target.closest('li').getAttribute('data-id');
        window.location.href = `/del/${id}`;
    }
})

document.querySelector('.push').addEventListener('click', (e) => {
    window.location.href = '/new';
})

cartbase();



