function avg(data){
    let products = data.products;
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      let price = data.products[i].price;
      sum += price;
  }
  return (sum / products.length )
  }


  avg({size:3,products:[
    {
      name:"Product 1",
      price:100
    },
    {
      name:"Product 2",
      price:700
    },
    {
      name:"Product 3",
      price:250
    }
 ]
});//350