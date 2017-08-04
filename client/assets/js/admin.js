let inventory = [
  {name: 'Ice Cream', price: 10000, stock: 2, quantity: 0},
  {name: 'Wallet', price: 2000, stock: 3, quantity: 0},
  {name: 'Koyo', price: 300, stock: 4, quantity: 0},
  {name: 'Mint', price: 50, stock: 5, quantity: 0}
];

let app = new Vue({
  el: '#app',
  data: {
    inventory: inventory,
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
      axios.post('', {
        name: self.name,
        price: self.price,
        stock: self.stock
      })
      .then(result => console.log(result))
      .catch(err => console.log(err))
    },
    deleteInventory: function(id) {
      axios.delete(`/${id}`)
      .then(result => console.log(result))
      .catch(err => console.log(err))
    },
    updateInventory: function(idx, id) {
      let self = this;
      axios.put(`/${id}`, {
        name: self.inventory[idx].name,
        price: self.inventory[idx].price,
        stock: self.inventory[idx].stock
      })
      .then(result => console.log(result))
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
  created () {
    let self = this;
    axios.get('')
    .then(result => {
      console.log(result.data);
      self.inventory = result.data
    })
    .catch(err => console.log(err))
  }
})
