let shop = [
  {name: 'Ice Cream', price: 10000, stock: 2, quantity: 0},
  {name: 'Wallet', price: 2000, stock: 3, quantity: 0},
  {name: 'Koyo', price: 300, stock: 4, quantity: 0},
  {name: 'Mint', price: 50, stock: 5, quantity: 0}
];

let app = new Vue({
  el: '#app',
  data: {
    msg: 'hay',
    shop: shop,
    items: [],
    search: "",
    showCart: false
  },
  methods: {
    addToCart(item) {
      item.quantity += 1;
      let duplicateCount = 0;
      for(i = 0; i < this.items.length; i++) {
        if(this.items[i].name == item.name){
          duplicateCount++;
        }
      }
      if(duplicateCount == 0)
        this.items.push(item);
    },
    removeFromCart(item) {
      for(i = 0; i < this.items.length; i++) {
        if(this.items[i].name == item.name) {
          this.items[i].quantity -= 1;
          if(this.items[i].quantity == 0)
            this.items.splice(this.items.indexOf(item), 1);
        }
      }
    }
  },
  computed: {
    itemsInCart () {
      let qty = 0;
      this.items.forEach(i => {
        qty += i.quantity;
      })
      return qty;
    },
    filteredShop () {
      let search = new RegExp(this.search, "i");
      return this.shop.filter(s => s.name.match(search));
    },
    totalPrice () {
      let totalPrice = 0;
      this.items.forEach(item => {
        totalPrice += (item.price * item.quantity);
      });
      return (totalPrice/1000).toFixed(3);
    }
  },
  mounted () {
    let self = this;
    axios.get('')
    .then(result => {
      //console.log(result)
      // axios.get()
    })
    .catch(err => console.log(err))
  }
})
