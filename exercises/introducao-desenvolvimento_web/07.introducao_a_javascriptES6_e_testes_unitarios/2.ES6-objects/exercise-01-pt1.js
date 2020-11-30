const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const pizzas = Object.keys(order.order.pizza);
  
  const drinks = (drinkOrder) => {
    const listOfDrinks = Object.keys(drinkOrder);
    let drinkNames = [];
    let valueOfDrinks = 0;
    let drinksAndValues = [];

    for (drink of listOfDrinks) {
      drinkNames.push(drinkOrder[drink].type);
      valueOfDrinks += drinkOrder[drink].price * drinkOrder[drink].amount;
    }

    drinksAndValues.push(drinkNames);
    drinksAndValues.push(valueOfDrinks);
    return drinksAndValues;
  };

  let value = 0;
  //let pedido = pizzas.concat(drink);

  console.log(drinks(order.order.drinks));

  for (food of pizzas) {
    value += order.order.pizza[food].price;
  }

  console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas} é R$ ${value}.`);
  //console.log(pedido);

}

orderModifier(order);
