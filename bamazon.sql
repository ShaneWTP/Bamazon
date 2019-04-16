DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

create table products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name varchar(100) not null,
department_name varchar (100) not null,
price decimal(10,2) not null,
stock_quantity int not null,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation 4", "Electronics", 299.99, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Xbox One X", "Electronics", 349.99, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Electronics", 279.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("3 Piece Leather Sectional", "Furniture", 1299.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("5 Pice Wood Dining Room Set", "Furniture", 899.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wood Coffee Table", "Furniture", 449.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("6 Person Tent", "Sports/Outdoors", 199.99, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Portable Basketball Hoop", "Sports/Outdoors", 224.99, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Offroad Tire", "Auto", 99.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Car Battery", "Auto", 49.99, 60);

SELECT 
    *
FROM
    products;