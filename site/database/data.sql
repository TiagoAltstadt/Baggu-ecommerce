  
-- Insert de Categoria de usuarios --

INSERT INTO category_users (name) VALUES ("user");
INSERT INTO category_users (name) VALUES ("admin");

-- Insert de usuarios --

INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('https://robohash.org/aliquidnobisaspernatur.bmp?size=500x500&set=set1', 'bdaid0', 'Beilul', 'Daid', 'bdaid0@alibaba.com', 'ABuh8s', 2);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('https://robohash.org/magnamatanimi.bmp?size=500x500&set=set1', 'amadgett1', 'Ann', 'Madgett', 'amadgett1@cafepress.com', 'ymuaMtV', 1);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('https://robohash.org/cumqueinquae.png?size=500x500&set=set1', 'ljoannidi2', 'Lauraine', 'Joannidi', 'ljoannidi2@weather.com', 'N6GR931wS', 2);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('https://robohash.org/utnonipsum.jpg?size=500x500&set=set1', 'eheather3', 'Elyn', 'Heather', 'eheather3@hud.gov', 'HwBY6ObVYAX', 1);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('https://robohash.org/eaetid.jpg?size=500x500&set=set1', 'rmcclinton4', 'Randie', 'McClinton', 'rmcclinton4@fotki.com', 'YtwJvye', 2);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('https://robohash.org/cupiditateassumendaaut.jpg?size=500x500&set=set1', 'mjedrys5', 'Melisande', 'Jedrys', 'mjedrys5@multiply.com', 'jwAszN', 1);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('https://robohash.org/quiaataliquam.png?size=500x500&set=set1', 'mvalasek6', 'Mattie', 'Valasek', 'mvalasek6@photobucket.com', 'JbvTAM52J', 2);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('https://robohash.org/veniambeataequas.bmp?size=500x500&set=set1', 'mbyne7', 'Mano', 'Byne', 'mbyne7@census.gov', 'C01bcinTfYqB', 2);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('https://robohash.org/officiisfugiata.png?size=500x500&set=set1', 'caccomb8', 'Cris', 'Accomb', 'caccomb8@skyrock.com', 'UjoXxRQ34y', 2);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('https://robohash.org/indelenitiincidunt.png?size=500x500&set=set1', 'wlooker9', 'Westleigh', 'Looker', 'wlooker9@4shared.com', 'WxUwEEXfKLDF', 1);

-- Insert de marcas --

INSERT INTO brands (name) VALUES ("Cotnyl");
INSERT INTO brands (name) VALUES ("Bagplast");
INSERT INTO brands (name) VALUES ("Elite");
INSERT INTO brands (name) VALUES ("Alumax");
INSERT INTO brands (name) VALUES ("Rolan");
INSERT INTO brands (name) VALUES ("Propel");
INSERT INTO brands (name) VALUES ("Tecnofilm");

-- Insert de categoria --

INSERT INTO categories (name) VALUES ("Descartables");
INSERT INTO categories (name) VALUES ("Papeleria");
INSERT INTO categories (name) VALUES ("Higiene");

-- Insert de productos --

INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bandeja 102 frio ensalada", "Bandeja con medida 102 en color negro para comidas frias, no apto microondas - x100 unid.", 290, 1, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bandeja 102 frio ensalada", "Bandeja con medida 102 en color negro para comidas frias, no apto microondas - x100 unid.", 290, 1, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bandeja 102 frio ensalada", "Bandeja con medida 102 en color negro para comidas frias, no apto microondas - x100 unid.", 290, 1, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bandeja 102 frio ensalada", "Bandeja con medida 102 en color negro para comidas frias, no apto microondas - x100 unid.", 290, 1, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bandeja 102 frio ensalada", "Bandeja con medida 102 en color negro para comidas frias, no apto microondas - x100 unid.", 290, 1, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bandeja 102 frio ensalada", "Bandeja con medida 102 en color negro para comidas frias, no apto microondas - x100 unid.", 290, 1, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bandeja 102 frio ensalada", "Bandeja con medida 102 en color negro para comidas frias, no apto microondas - x100 unid.", 290, 1, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bandeja 102 frio ensalada", "Bandeja con medida 102 en color negro para comidas frias, no apto microondas - x100 unid.", 290, 1, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bandeja 102 frio ensalada", "Bandeja con medida 102 en color negro para comidas frias, no apto microondas - x100 unid.", 290, 1, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bandeja 102 frio ensalada", "Bandeja con medida 102 en color negro para comidas frias, no apto microondas - x100 unid.", 290, 1, 1);

-- Insert de imagenes --

INSERT INTO images (name, product_id) VALUES ("#", 1);