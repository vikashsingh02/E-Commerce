let bagitem ;
function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagitem = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    DisplayElement();
    displaybagicon();

    
}
function addToBag(itemID){
  bagitem.push(itemID);
  localStorage.setItem('bagItems', JSON.stringify(bagitem));
  displaybagicon();
bagitem.localStorage.clear();
} 


 const items = [
        {
            id: '001',
            image: 'item-images/1.jpg',
            company: 'Carlton London',
            item_name: 'Rhodium-Plated CZ Floral Studs',
            original_price: 1045,
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
            image: 'item-images/2.jpg',
            company: 'CUKOO',
            item_name: 'Women Padded Halter Neck Swimming Dress',
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
            image: 'item-images/3.jpg',
            company: 'NUEVOSDAMAS',
            item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
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
            image: 'item-images/4.jpg',
            company: 'ADIDAS',
            item_name: 'Indian Cricket ODI Jersey',
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
            image: 'item-images/5.jpg',
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
            image: 'item-images/6.jpg',
            company: 'Nike',
            item_name: 'Men ReactX Running Shoes',
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
            image: 'item-images/7.jpg',
            company: 'The Indian Garage Co',
            item_name: 'Men Slim Fit Regular Shorts',
            original_price: 1599,
            current_price: 639,
            discount_percentage: 60,
            rating: {
                stars: 4.2,
                count: 388,
            },
        },
        {
            id: '008',
            image: 'item-images/8.jpg',
            company: 'Nivea',
            item_name: 'Men Fresh Deodrant 150ml',
            original_price: 285,
            current_price: 142,
            discount_percentage: 50,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.2,
                count: 5200,
            },
        }
    ];

    const CONVENIENCE_FEES = 99;
    let bagItemObjects;
    onLoad();
    
    function onLoad() {
      loadBagItemObjects();
      displayBagItems();
      displayBagSummary();
    }
    
    function displayBagSummary() {
      let bagSummaryElement = document.querySelector('.bag-summary');
      let totalItem = bagItemObjects.length;
      let totalMRP = 0;
      let totalDiscount = 0;
    
      bagItemObjects.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
      });
    
      let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
      
    
      bagSummaryElement.innerHTML = `
        <div class="bag-details-container">
        <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
        <div class="price-item">
          <span class="price-item-tag">Total MRP</span>
          <span class="price-item-value">₹${totalMRP}</span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Discount on MRP</span>
          <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Convenience Fee</span>
          <span class="price-item-value">₹99</span>
        </div>
        <hr>
        <div class="price-footer">
          <span class="price-item-tag">Total Amount</span>
          <span class="price-item-value">₹${finalPayment}</span>
        </div>
      </div>
      <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
      </button>
      `;
    }
    let bagItems;
    function loadBagItemObjects() {
      console.log(bagItems);
      bagItemObjects = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
          if (itemId == items[i].id) {
            return items[i];
          }
        }
      });
      console.log(bagItemObjects);
    }
    
    function displayBagItems() {
      let containerElement = document.querySelector('.bag-items-container');
      let innerHTML = '';
      bagItemObjects.forEach(bagItem => {
        innerHTML += generateItemHTML(bagItem);
      });
      containerElement.innerHTML = innerHTML;
    }
    
    function removeFromBag(itemId) {
      bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
      localStorage.setItem('bagItems', JSON.stringify(bagItems));
      loadBagItemObjects();
      displayBagIcon();
      displayBagItems();
      displayBagSummary();
    }
    
    function generateItemHTML(item) {
      return `<div class="bag-item-container">
        <div class="item-left-part">
          <img class="bag-item-img" src="../${item.image}">
        </div>
        <div class="item-right-part">
          <div class="company">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price-container">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
          </div>
          <div class="return-period">
            <span class="return-period-days">${item.return_period} days</span> return available
          </div>
          <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">${item.delivery_date}</span>
          </div>
        </div>
    
        <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
      </div>`;
    }
    
    
 