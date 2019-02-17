console.clear();


// Task 1

class ItemBucket {
  constructor() {
  this.bucketItems = [];
  }
}

class ShopItem {
  constructor (name, price, availability) {
    this.name = name;
    this.price = price;
    this.availability = availability;
  }
  
}



// Task 2

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
      { title: 'Gloves', price: 400 },
      { title: 'Hat', price: 500},
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  counter () {
  let sumArr = [];
    for(let i=0; i<this.goods.length; i++) {
      sumArr.push(this.goods[i].price);
    }
    let allItemSum = sumArr.reduce(function(sum, current) {
  return sum + current;
}, 0);
    document.querySelector('#sum').innerHTML = allItemSum;
}

} 

const list = new GoodsList();
list.fetchGoods();
list.render();
list.counter();