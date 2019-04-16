// Require the modules needed to run Node.js program
var mysql = require('mysql');
var inquirer = require('inquirer');

// Connect to the MySQL bamazon database
var connection = mysql.createConnection({
	host: "localhost",

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "1311Woodlock!",
	database: "bamazon"
});

// Check connection to ensure you have connected to the database
connection.connect(function (err) {
	if (err) throw err;
	displayInventory();
});

// Function that displays all of my Bamazon inventory, once displayed, it then calls the purchase function
function displayInventory() {
	connection.query("SELECT * FROM products", function (err, res) {
		if (err) throw err;
		for (let i = 0; i < res.length; i++) {
			console.log(" - - - - - - - - - - - - - - - ");
			console.log("\n");
			console.log("Item ID # " + res[i].item_id);
			console.log("Product: " + res[i].product_name);
			console.log("Price: $" + res[i].price);
			console.log("\n");
		}
		purchase();
	})
};

// Function that will start the process of the customer purchase
function purchase() {

	connection.query("SELECT * FROM products", function (err, res) {
		if (err) throw err;

		// Create a prompt with questions to see which product and how many
		// of that product the customer would like to purchase
		inquirer.prompt([
			{
				type: "input",
				name: "item_id",
				message: "Select the Item ID # of the product you would like to purchase.",
				filter: Number
			},
			{
				type: "input",
				name: "quantity",
				message: "How many of this item would you like to purchase?",
				filter: Number
			}
		])

			// Put customer responses into variables
			.then(function (purchase) {
				var item = purchase.item_id;
				var quantity = purchase.quantity;

				connection.query("SELECT * FROM products WHERE ?", { item_id: item }, function (err, res) {
					if (err) throw err;

					// Check to make sure a valid ID # was entered
					if (res.length <= 0 || res.length > 10) {
            console.log("\n");
						console.log("Invalid Item ID #. Please enter a valid ID #.");
						setTimeout(function() { displayInventory() }, 5000);
					} 
					
					else {

						// Store results to the variable productInfo
						var productInfo = res[0];

						// Check to make sure that the quantity of the desired purchase is in stock
						if (quantity <= productInfo.stock_quantity) {
							console.log("\n");
							console.log(productInfo.product_name + " is in stock! Your order is now being processed.");
							console.log("\n");

							// Putting new stock update query into variable
							var query = "UPDATE products SET stock_quantity = " + (productInfo.stock_quantity - quantity) + " WHERE item_id = " + item;

							// Update the stock inventory and confirm purchase and price
							connection.query(query, function (err) {
								if (err) throw err;

								console.log("Your order has been placed!");
								console.log("Your total is $" + productInfo.price * quantity);

								// Close the app
								connection.end();
							})

						}

            // Inform customer that there is not enough stock to fulfill their order and re-display 
            // the product list so they can restart the process
						else {
							console.log("\n");
							console.log("Sorry, there are not enough " + productInfo.product_name + " in stock.");
							console.log("Please modify the quantity of your order or select another item.");
              console.log("\n");
              

              setTimeout(function() { displayInventory() }, 5000);
						}
					}
				})
			})
	})
}
