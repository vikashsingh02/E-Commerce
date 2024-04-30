let bagitem =[];
function addToBag(itemID){
  bagitem.push(itemID)
  displaybagicon();
} 

function displaybagicon(){
    let bagitemCount = document.querySelector('.bag-item-count');
    console.log(bagitem.length);
    if(bagitem.length >0){
        bagitemCount.innerText = bagitem.length
    }
    else{
        bagitemCount.style.visibility = 'hidden';
    }

}
const items = [
    {
        id: '001',
        image: 'images/male/men1.jpg',
        company: 'BULLMER',
        item_name: 'Printed Cotton T-Shirt',
        original_price: 389,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '002',
        image: 'images/male/men2.jpg',
        company: 'CUKOO',
        item_name: 'printed t-shirt',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '003',
        image: 'images/male/men3.jpg',
        company: 'NUEVOSDAMAS',
        item_name: 'cotton tshirt',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: 'images/male/men4.jpg',
        company: 'ADIDAS',
        item_name: ' Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '005',
        image: 'images/male/men5.jpg',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '006',
        image: 'images/male/men6.jpg',
        company: 'Nike',
        item_name: 'Men ReactX ',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '007',
        image: 'images/male/men7.jpg',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular ',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    
];
let itemsContainer = document.querySelector(".items-Container");
items.forEach(item => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    itemContainer.innerHTML = `
        <img class="itemimg" src="${item.image}" alt="">
        <div class="rating">
            ${item.rating.stars}⭐| ${item.rating.count}
        </div>
        <div class="item-company">
            ${item.company}
        </div> 
        <div class="item-name">
            ${item.item_name}
        </div>
        <div class="price">
            <span class="currentprice">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% Off)</span>
        </div>
        <button class="btn-add-bag" onclick='addToBag(${item.id})'>Add to Bag</button>
    `;

    itemsContainer.appendChild(itemContainer);
});
