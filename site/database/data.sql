-- 

  USE `baggu`;  
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
INSERT INTO brands (name) VALUES ("Work");
INSERT INTO brands (name) VALUES ("Rolopack");

-- Insert de categoria --

INSERT INTO categories (name) VALUES ("Descartables");
INSERT INTO categories (name) VALUES ("Papeleria");
INSERT INTO categories (name) VALUES ("Higiene");

-- Insert de productos --

INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bandeja PET 102 para frio-ensalada", "Bandeja con medida 102 en color negro para comidas frias, no apto microondas - x100 unid.", 290, 1, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bolsa de Arranque 20x30", "Bolsas de Arranque alta densidad con fuelle, medida 20x30, x1 und.", 170, 5, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bandeja de Aluminio F200", "Bandeja de Aluminio rectangular modelo F200 x1 und.", 60, 4, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Bolsa Camiseta alta densidad 40x50", "Bolsa Camiseta Alta densidad medida 40x50, blanca, paquete por 80 bolsas", 110, 5, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Copa Champagne - Calidad acrilico", "Copa Champagne de Acrilico con bases de diferentes colores x1 und.", 30, 2, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Copa Venecia para postres", "Copa Venecia para presentacion de postres, con base desmontable x1 und.", 40, 2, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Cuchara Sundae, color blanco", "Cuchara Sundae, tamaño chico, color blanco, paquete x50 unid.", 40, 4, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Film PVC 1400 mts, apto alimentos", "Film PVC rollo de 1400 mts, apto para alimentos", 1300, 8, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Plato plastico - colores varios", "Plato plastico, presentacion en varios colores, tamaño 17 cm diametro, paquete x50 und.", 120, 7, 1);
INSERT INTO products (name, description, price, brand_id, category_id) VALUES ("Sorbete Polipapel - motivos varios", "Sorbete Polipapel, colores y motivos varios, paquete x10 und.", 30, 2, 1);

-- Insert de imagenes --

INSERT INTO images (name, product_id) VALUES ("Arranque_Rolan_20x30_1.jpg", 2);
INSERT INTO images (name, product_id) VALUES ("Arranque_Rolan_20x30_2.jpg", 2);
INSERT INTO images (name, product_id) VALUES ("Arranque_Rolan_20x30_3.jpg", 2);
INSERT INTO images (name, product_id) VALUES ("Bandeja_Aluminio_F200_1.jpg", 3);
INSERT INTO images (name, product_id) VALUES ("Bandeja_Aluminio_F200_2.jpg", 3);
INSERT INTO images (name, product_id) VALUES ("Bandeja_Aluminio_F200_3.jpg", 3);
INSERT INTO images (name, product_id) VALUES ("Bandeja_PET_102_Negra_1.jpg", 1);
INSERT INTO images (name, product_id) VALUES ("Bandeja_PET_102_Negra_2.jpg", 1);
INSERT INTO images (name, product_id) VALUES ("Bandeja_PET_102_Negra_3.jpg", 1);
INSERT INTO images (name, product_id) VALUES ("Bolsa_Camiseta_Rolan_40x50_1.jpg", 4);
INSERT INTO images (name, product_id) VALUES ("Bolsa_Camiseta_Rolan_40x50_2.jpg", 4);
INSERT INTO images (name, product_id) VALUES ("Bolsa_Camiseta_Rolan_40x50_3.jpg", 4);
INSERT INTO images (name, product_id) VALUES ("Copa_plastica_champagne_1.jpg", 5);
INSERT INTO images (name, product_id) VALUES ("Copa_plastica_champagne_2.jpg", 5);
INSERT INTO images (name, product_id) VALUES ("Copa_plastica_champagne_3.jpg", 5);
INSERT INTO images (name, product_id) VALUES ("Copa_plastica_postre_1.jpg", 6);
INSERT INTO images (name, product_id) VALUES ("Copa_plastica_postre_2.jpg", 6);
INSERT INTO images (name, product_id) VALUES ("Copa_plastica_postre_3.jpg", 6);
INSERT INTO images (name, product_id) VALUES ("Cucharas_plasticas_1.jpg", 7);
INSERT INTO images (name, product_id) VALUES ("Cucharas_plasticas_2.jpg", 7);
INSERT INTO images (name, product_id) VALUES ("Cucharas_plasticas_3.jpg", 7);
INSERT INTO images (name, product_id) VALUES ("Film_PVC_1400mts_1.jpg", 8);
INSERT INTO images (name, product_id) VALUES ("Film_PVC_1400mts_2.jpg", 8);
INSERT INTO images (name, product_id) VALUES ("Film_PVC_1400mts_3.jpg", 8);
INSERT INTO images (name, product_id) VALUES ("Plato_plastico_chico_1.jpg", 9);
INSERT INTO images (name, product_id) VALUES ("Plato_plastico_chico_2.jpg", 9);
INSERT INTO images (name, product_id) VALUES ("Plato_plastico_chico_3.jpg", 9);
INSERT INTO images (name, product_id) VALUES ("Sorbetes_polipapel_motivos_1.jpg", 10);
INSERT INTO images (name, product_id) VALUES ("Sorbetes_polipapel_motivos_2.jpg", 10);
INSERT INTO images (name, product_id) VALUES ("Sorbetes_polipapel_motivos_3.jpg", 10);

