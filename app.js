const menu = [
    {
        url: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://progatix.com/app/uploads/2023/05/ref-list-item.png",
        name: "website",
        price: '$100',
        category: "Website",
    },
    {
        url: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://progatix.com/app/uploads/2023/05/steve-hatch-list-item.png",
        name: "website",
        price: '$100',
        category: "Website",
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqlGL6GvBE89LUbxtx88XvH5S0WNbFzMo_kw&s",
        name: "Logo",
        price: '$20',
        discription: `Halwa Puri is a popular breakfast dish in South Asia, featuring deep-fried bread (puri) served with sweet semolina pudding (halwa) and spicy chickpea curry. It's a festive, indulgent meal.`,
        category: "Logo",
    },
    {
        url: "https://stock.adobe.com/pages/artisthub/media_1945c199bfbdf33852a0124369fdc0d6eea319d72.jpeg?width=750&format=jpeg&optimize=medium",
        name: "Logo",
        price: '$20',
        discription: `Chai Paratha is a comforting meal pairing spiced Indian tea (chai) with flaky, layered flatbread (paratha). This popular breakfast or snack offers a delightful blend of flavors and textures.`,
        category: "Logo",
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXhzz3MjTbhhLWzLWLa-uIVEeHV2-wW0CGA&s",
        name: "MobileApp",
        price: '$500',
        discription: `Mango shake is a refreshing, creamy beverage made from ripe mangoes, milk, and sugar. Often blended with ice, it's a popular summer drink that offers a sweet, tropical flavor.`,
        category: "MobileApp",
    },
    {
        url: "https://cdn.dribbble.com/userupload/12087677/file/original-77ed16c2778a841a48596b004549bae2.png?crop=0x0-1600x1200&resize=400x300&vertical=center",
        name: "MobileApp",
        price: '$300',
        discription: `Oreo shake is a delicious, creamy treat made by blending crushed Oreo cookies with milk, vanilla ice cream, and sometimes chocolate syrup. It's a popular dessert drink, perfect for cookie lovers.`,
        category: "MobileApp",
    },
];

function categoryHandler(category) {
    console.log('hn bhia set hai');
    foodCantainer.innerHTML = '';
    if(category == "All"){
        menu.forEach((menu) => {
            const foodcard = document.createElement('div');
            foodcard.setAttribute('class', 'foodCard');
            foodcard.innerHTML = `
        <div class="imgdiv">
                <img src=${menu.url} alt="">
            </div>
            <div>
                <div class="inner-area">
                    <div class="first-column">
                        <div class="name">${menu.name}</div>
                        <div class="price">${menu.price}</div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>`
            foodCantainer.appendChild(foodcard);
        })
    }
    else{
    menu.filter((menu) => menu.category == category)
        .forEach((menu) => {
            const foodcard = document.createElement('div');
            foodcard.setAttribute('class', 'foodCard');
            foodcard.innerHTML = `
        <div class="imgdiv">
                <img src=${menu.url} alt="">
            </div>
            <div>
                <div class="inner-area">
                    <div class="first-column">
                        <div class="name">${menu.name}</div>
                        <div class="price">${menu.price}</div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>`
            foodCantainer.appendChild(foodcard);
        })
}
}

const foodCantainer = document.querySelector('.foodCantainer')
menu.forEach((menu) => {
    const foodcard = document.createElement('div');
    foodcard.className = 'foodCard';
    foodcard.innerHTML = `<div class="imgdiv">
                <img src=${menu.url} alt="">
            </div>
            <div>
                <div class="inner-area">
                    <div class="first-column">
                        <div class="name">${menu.name}</div>
                        <div class="price">${menu.price}</div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>`
    foodCantainer.appendChild(foodcard)
})

