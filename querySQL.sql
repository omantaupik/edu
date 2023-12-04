SELECT * FROM db_eduwork.products;
SELECT products.user_id, users2.name
FROM users2
LEFT JOIN products
ON users2.name = products.name;