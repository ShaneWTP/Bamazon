# Bamazon

## Objective

In this application, we are creating the Bamazon webstore with node using the MySQL database to hold our product information. The customer must be able to use the node application to make purchases in the Bamazon webstore.

### Steps of Functionality

* In our node application we first call our application using "node bamazonCustomer.js".

* Once called, our full product inventory is displayed with the:

	* Item ID #

	* Product Name

	* Price

* The application then asks the customer to enter the ID # of the product that they wish to purchase.

* After a product ID # is selected, the customer is then asked how many of that product they would like to purchase.

* Once the quantity the customer wishes to purchase is entered, the customer will have 1 of 3 displays based on their input.

	1. The display shows that we have enough of that item in 	stock, that the order is being processed, that the order is 	then placed, and how much it will cost total.

	1. The display shows that we currently do not have enough of 	that item that they wish to purchase. They can either modify 	the quantity of the item or purchase a different item. Then, 	the full product list is re-displayed.

	1. The display shows that the customer has input an invalid 	ID # and asked to enter a valid ID #. Then, full product 	list is re-displayed.

### Database

In addition to the node application functionality. Based on the customer input, the MySQL Bamazon database is used to show the customer if we are in or out of stock on a specific item. If the item(s) is purchased, then the dtatabase will update with the new quantities available.