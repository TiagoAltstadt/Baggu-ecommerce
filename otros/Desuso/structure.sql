CREATE SCHEMA `baggu` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci ;





CREATE TABLE `baggu`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `avatar` VARCHAR(50) NULL,
  `username` VARCHAR(50) NULL,
  `name` VARCHAR(50) NULL,
  `surname` VARCHAR(50) NULL,
  `email` VARCHAR(250) NULL,
  `password` VARCHAR(250) NULL,
  `category` TINYINT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));


  ALTER TABLE `baggu`.`products` 
DROP FOREIGN KEY `image_foreign`;
ALTER TABLE `baggu`.`products` 
DROP COLUMN `image_id`,
DROP INDEX `image_foreign_idx` ;
;

ALTER TABLE `baggu`.`images` 
ADD COLUMN `product_id` INT NOT NULL AFTER `name`,
ADD INDEX `product_id_idx` (`product_id` ASC) VISIBLE;
;
ALTER TABLE `baggu`.`images` 
ADD CONSTRAINT `product_id`
  FOREIGN KEY (`product_id`) REFERENCES `baggu`.`products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;