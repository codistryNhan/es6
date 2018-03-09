const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

//Function that returns an object
function createBookShop(inventory){
  return {
    inventory: inventory,

    inventoryValue: function(){
      return this.inventory.reduce(function(total, book){
        return total += book.price
      }, 0);
    },

    priceForTitle: function(title){
      return this.inventory.find(function(book){
        return book.title === title;
      })
    }
  }
}

//Enhanced object version
function createBookShop(inventory){
  return{
    //If key and value are same name, no need semicolon and inventory at value
    inventory,

    //Remove function and colon
    inventoryValue(){
      return this.inventory.reduce((total,book) => total += book.price, 0);
    },

    priceForTitle(title){
      return this.inventory.find(book => book.title === title).price;
    }
  }
}
