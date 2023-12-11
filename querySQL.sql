SELECT users2.id, categories.name, categories.status
FROM users2
INNER JOIN categories ON users2.id=categories.id;