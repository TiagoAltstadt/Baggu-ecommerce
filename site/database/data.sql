-- 

  USE `baggu`;  
-- Insert de Categoria de usuarios --

INSERT INTO category_users (name) VALUES ("user");
INSERT INTO category_users (name) VALUES ("admin");

-- Insert de usuarios --

INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('Lorenzo.jpg', 'lolo03', 'Lorenzo', 'Marchese', 'lomarchese@gmail.com', 'ABuh8s', 1);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('Maria.jpg', 'maripo84', 'Maria', 'Impellizzieri', 'mimellizzieri@hotmail.com', 'ymuaMtV', 1);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('Lauraine.jpg', 'ljoa2020', 'Lauraine', 'Joannidi', 'ljoannidi2@gmail.com', 'N6GR931wS', 1);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('Elyn.jpg', 'eheather3', 'Elyn', 'Heather', 'eheather3@hotmail.com', 'HwBY6ObVYAX', 1);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('Tiago.jpg', 'Goia', 'Tiago', 'Altstadt', 'tiagoaltstadt@gmail.com', '$2a$10$2.PFWUUCjM6c.QtM0ByTAOu84wVrw.SLGPtGy/VikStpzRApgDGgu', 2);
INSERT INTO users (avatar, username, name, surname, email, password, category_user_id) VALUES ('Marcelo.jpg', 'marceg', 'Marcelo', 'Giaccaglia', 'marcelogiaccaglia@hotmail.com', '$2a$10$2.PFWUUCjM6c.QtM0ByTAOu84wVrw.SLGPtGy/VikStpzRApgDGgu', 2);


-- Insert de marcas --

INSERT INTO brands (name) VALUES ("Cotnyl");
INSERT INTO brands (name) VALUES ("Bagplast");
INSERT INTO brands (name) VALUES ("Elite");
INSERT INTO brands (name) VALUES ("Alumax");
INSERT INTO brands (name) VALUES ("Rolan");
INSERT INTO brands (name) VALUES ("Propel");
INSERT INTO brands (name) VALUES ("Work");
INSERT INTO brands (name) VALUES ("Rolopack");
INSERT INTO brands (name) VALUES ("Aticol");

-- Insert de categoria --

INSERT INTO categories (name) VALUES ("Descartables");
INSERT INTO categories (name) VALUES ("Papeleria");
INSERT INTO categories (name) VALUES ("Higiene");

-- Insert de productos --

INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Bandeja PET 102 para frio-ensalada", "Bandeja con medida 102 en color negro para comidas frias, no apto microondas - x100 unid.", "Bandeja_PET_102_Negra_1.jpg", 290, 1, 1);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Bolsa de Arranque 20x30", "Bolsas de Arranque alta densidad con fuelle, medida 20x30, x1 und.", "Arranque_Rolan_20x30_1.jpg", 170, 5, 1);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Bandeja de Aluminio F200", "Bandeja de Aluminio rectangular modelo F200 x1 und.", "Bandeja_Aluminio_F200_1.jpg", 60, 4, 1);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Bolsa Camiseta alta densidad 40x50", "Bolsa Camiseta Alta densidad medida 40x50, blanca, paquete por 80 bolsas", "Bolsa_Camiseta_Rolan_40x50_1.jpg", 110, 5, 1);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Copa Champagne - Calidad acrilico", "Copa Champagne de Acrilico con bases de diferentes colores x1 und.", "Copa_plastica_champagne_1.jpg", 30, 2, 1);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Copa Venecia para postres", "Copa Venecia para presentacion de postres, con base desmontable x1 und.", "Copa_plastica_postre_1.jpg", 40, 2, 1);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Cuchara Sundae, color blanco", "Cuchara Sundae, tamaño chico, color blanco, paquete x50 unid.", "Cucharas_plasticas_1.jpg", 40, 4, 1);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Film PVC 1400 mts, apto alimentos", "Film PVC rollo de 1400 mts, apto para alimentos", "Film_PVC_1400mts_1.jpg", 1300, 8, 1);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Plato plastico - colores varios", "Plato plastico, presentacion en varios colores, tamaño 17 cm diametro, paquete x50 und.", "Plato_plastico_chico_1.jpg", 120, 7, 1);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Sorbete Polipapel - motivos varios", "Sorbete Polipapel, colores y motivos varios, paquete x10 und.", "Sorbetes_polipapel_motivos_1.jpg", 30, 2, 1);

INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Blonda Rectangular Blanca 31x38 cm", "Blonda Rectangular Blanca 31 X 38 cm Paquete x 100 (unid)", "Blonda_Rectangular_de_Papel.jpg", 150, 6, 2);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Bobina Papel Sulfito 60cm", "Papel Blanco Sulfito Cristal Bobina 60cm x 1 (Kg)", "Bobina_Papel_Sulfito.jpg", 240, 6, 2);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Molde de Papel - Budinera", "Molde *Budin* 280gr (185x50x50)mm x 100 (Und)", "Molde_Rectangular_Budinera.jpg", 800, 6, 2);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Bolsa de Papel Kraft N°6", "Bolsa Papel Kraft De Primera *Nro 6* x 100 (unid)", "Bolsa_Papel.jpg", 340, 6, 2);

INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Guantes Nitrilo Azul", "Caja de Guantes calidad Nitrilo color Azul x100 und.", "Guantes_Nitrilo.jpg", 1400, 4, 3);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Alcohol en Gel x 5 lts.", "Bidon por 5 litros Alcohol en gel con glicerina", "Alcohol_Gel.jpg", 1800, 8, 3);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Papel Higienico x300 mts", "Papel higienico x 300 mts doble hoja excelente calidad", "Papel_Higienico.jpg", 200, 3, 3);
INSERT INTO products (name, description, image, price, brand_id, category_id) VALUES ("Bobina Papel Multiuso x 300 mts", "Bobina de papel multiuso, pack x 600 mts, calidad Elite", "Bobina_Papel_Multiuso.jpg", 1200, 3, 3);