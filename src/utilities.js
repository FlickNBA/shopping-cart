export class Basket {
  constructor() {
    this.total = 0;
    this.items = {};
    this.shipping = 10;
  }

  getTotal() {
    if (Object.keys(this.items).length > 0) {
      let t = 0;
      Object.keys(this.items).forEach((key) => {
        // console.log(this.items[key]);
        t += this.items[key]['amount'] * this.items[key]['item']['price'];
      });
      this.total = t;
    } else {
      this.total = 0;
    }

    this.shipping = this.total < 50 ? 10 : 0;

    return this.total;
  }

  addToBasket(item) {
    if (this.items[item.name]) {
      this.items[item.name]['amount'] += 1;
    } else {
      this.items[item.name] = { item, amount: 1 };
    }
    this.getTotal();
  }
}

export class Item {
  constructor(type, name, description, picture, amount, price, key) {
    this.type = type;
    this.name = name;
    this.description = description;
    this.picture = picture;
    this.amount = amount;
    this.price = price;
    this.key = key;
  }
}

export const getProducts = async () => {
  return fetch('./products.json').then((res) => res.json());
};
