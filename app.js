let button = document.getElementById('btn');
button.addEventListener('click',(e)=>{
    e.preventDefault();
    let price=document.getElementById('price').value;
    let food=document.getElementById('food').value;
    let category=document.getElementById('category').value;
    let myobj={
        price:price,
        food:food,
        category:category

    }
    console.log(`${price} : ${food} : ${category}` )

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${food}`));
    if(value===Table-1){
        tableone.appendChild(li);
    }
    if(tabletwo){
        tabletwo.appendChild(li);
    }
    if(tablethree){
        tablethree.appendChild(li);
    }
     

})