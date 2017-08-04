let inventory = [
  {name: 'Ice Cream', price: 10000, stock: 2, quantity: 0},
  {name: 'Wallet', price: 2000, stock: 3, quantity: 0},
  {name: 'Koyo', price: 300, stock: 4, quantity: 0},
  {name: 'Mint', price: 50, stock: 5, quantity: 0}
];

let app = new Vue({
  el: '#app',
  data: {
    inventory: [],
    search: "",
    name: "",
    price: "",
    stock: "",
    editInventoryId: "",
    editInventoryIndex: "",
    showEdit: true,
    showAdd: true
  },
  methods: {
    addInventory: function() {
      let self = this;
      axios.post('http://localhost:3000/item', {
        name: self.name,
        price: self.price,
        stock: self.stock
      })
      .then(result => self.inventory.push(result.data))
      .catch(err => console.log(err))
    },
    deleteInventory: function(idx, id) {
      let self = this;
      axios.delete(`http://localhost:3000/item/${id}`)
      .then(result => {
        console.log("hay");
        let varr = self.inventory.filter(i => {
          return i._id != id;
        })
        self.inventory = varr;
      })
      .catch(err => console.log(err))
    },
    updateInventory: function(idx, id) {
      let self = this;
      axios.put(`http://localhost:3000/item/${id}`, {
        name: self.name,
        price: self.price,
        stock: self.stock
      })
      .then(result => {
        self.inventory[idx].name = self.name;
        self.inventory[idx].price = self.price;
        self.inventory[idx].stock = self.stock;
      })
      .catch(err => console.log(err))
      console.log(idx);
      console.log(id);
    }
  },
  computed: {
    filteredInventory () {
      let search = new RegExp(this.search, 'i');
      return this.inventory.filter(i => i.name.match(search));
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
      self.inventory = result.data
    })
    .catch(err => console.log(err))
  }
})
