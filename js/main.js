// My ShoppingList
const shoppingList = [
    "Pane",
    "Uova",
    "Maionese",
    "Cereali",
    "Verdure",
    "Coca cola",
    "Pasta",
    "Pollo",
    "Fagiolini",
    "Insalata",
    "Banane",
    "Fragole"
  ];
  console.log(shoppingList);
  
  // Defining output
  const myCart = document.getElementById("shopping-list");
  
  // While Loop
  let i = 0;
  
  while (i < shoppingList.length) {
    console.log(shoppingList[i]);
    const newItem = document.createElement("li");
    newItem.innerHTML = shoppingList[i];
    myCart.append(newItem);
    i++;
  }
  