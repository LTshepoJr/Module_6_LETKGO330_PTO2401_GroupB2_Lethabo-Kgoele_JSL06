// Sample menu data
const menu = {
  Starters: ["Garlic Bread", "Bruschetta", "Stuffed Mushrooms"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Chicken Parmesan"],
  Desserts: ["Tiramisu", "Cheesecake", "Chocolate Lava Cake"],
};

// HINT: Function to display menu items by category
function displayMenuItems(menu) {
  // HINT: Get a reference to the menu container in your HTML
  const menuContainer = document.getElementById("menu");
  // HINT: Loop through each category and its items in the menu object
  for (const [category, items] of Object.entries(menu)) {
    // HINT: Create an h3 element for the category
    let h3Element = document.createElement("h2");
    // HINT: Append the category heading to the menu container
    h3Element.textContent = category;
    menuContainer.appendChild(h3Element);
    // HINT: Create a list element for the items in the category
    let udList = document.createElement("ul");
    // HINT: Loop through the items in the category and create list items
    for (let list of items) {
      let itemList = document.createElement("li");
      itemList.textContent = list;
      udList.appendChild(itemList);
      menuContainer.appendChild(udList);
    }

    // HINT: Attach a click event listener to the list item to add it to the order

    // HINT: Append the list item to the category's list
    Array.from(udList.children).forEach((listItem) => {
      listItem.addEventListener("click", addToOrder);
    });
  }
}

// HINT: Callback function for adding an item to the order
function addToOrder(itemName) {
  // HINT: Get references to the order items list and order total element in your HTML
  let orderTotalElem = document.getElementById("order-total");
  let orderList = document.getElementById("order-items");
  // HINT: Create a list item for the order
  const cloneItems = itemName.target.cloneNode(true);
  // HINT: Append the list item to the order items list
  orderList.appendChild(cloneItems);
  // HINT: Calculate and update the total price
  const currentTotal = 0;
  const itemPrice = 60; // Assuming each item costs R90 (you can customize this)
  const newTotal = currentTotal + itemPrice;
  orderTotalElem.textContent = newTotal.toFixed(2);
}

// HINT: Function to initialize the menu system
function initMenuSystem(menu) {
  // HINT: Call the displayMenuItems function to display the menu
  displayMenuItems(menu);
}

// HINT: Call the init function to start the menu system
initMenuSystem(menu);
