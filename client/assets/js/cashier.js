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
    shop: [],
    items: [],
    search: "",
    showCart: false,
    userOnline: ""
  },
  methods: {
    addToCart(item) {
      let duplicateCount = 0;
      let stockEmpty = false;


      // Decrease stock in item to be pushed to items to be pushed to database.
      if(item.stock > 0) {
        item.stock -= 1;
      } else {
        console.log("hay");
        stockEmpty = true;
        // ITEM HABISSSSSSSSSSSSSSSSSSSSSSSSSss
      }

      // Decrease stock in shop (initial data that is shown in the cashier.html)
      for(let j = 0; j < this.shop.length; j++) {
        if(this.shop[j].name == item.name) {
          if(this.shop[j].stock > 0) {
            this.shop[j].stock -= 1;
          } else {
            console.log("hay");
            stockEmpty = true;
            // ITEM HABISSSSSSSSSSSSSSSSSSSSSSSSSss
          }
        }
      }


      for(i = 0; i < this.items.length; i++) {
        if(this.items[i].name == item.name){
          duplicateCount++;
        }
      }

      if(stockEmpty == false)
        item.quantity += 1;

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
    },
    checkout() {
      this.items.forEach(z => {
        axios.put('', {
          transactionobjid = trnsctionobjid,
          itemobjid = z._id
        });
      })
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
      // return (totalPrice/1000).toFixed(3);
      return totalPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
  },
  mounted () {
    let self = this;
    axios.get('http://localhost:3000/item')
    .then(result => {
      console.log(result.data);
      result.data.forEach(d => {
        d.quantity = 0;
      });
      self.shop = result.data;
      
      // axios.get()
    })
    .catch(err => console.log(err))
  }
})
