-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: proyecto
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_email` varchar(45) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `user_pass` varchar(150) NOT NULL,
  `user_bornDate` date DEFAULT NULL,
  `generos_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `id_usuarios_UNIQUE` (`user_id`),
  UNIQUE KEY `email_usuario_UNIQUE` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'mate@gmail.com','el mate','$2a$10$vfCYPyK/o90/d5Wofl1y0e6MptwNfqunqC0eWp1vc8OY3NVU4.EOW','2020-04-29',NULL),(2,'jonibrener@gmail.com','Joni','$2a$10$WnWUKCuWL4.1RSaEWYIF4edNgPdj7i6IOF6b3H13lGZ7t7L1uVsrW','2020-05-22',NULL),(3,'toto@gmail.com','toto','$2a$10$gVJkfGJpomm/ecFLibAjteQ6GTPMf050EAE9j1JGK8OzB42Le3g6m','2020-05-06',NULL),(4,'eslaprueba@gmail.com','Es la prueba','$2a$10$U7AVzWqtLVVIG8KqSWjt1euohIQAkQyMxd5Zi7OX4.J1XhGz5zLPW','2020-05-08',NULL),(5,'iphone8@gmail.com','iphone 8 max pro','$2a$10$tuOgnHO76fV.4t6aDshHtOmxYKXOovhDZDcHCQ3Ajqcs47G6Y7VkW','2020-05-08',NULL),(6,'coca@gmail.com','coca zero','$2a$10$I8XcqER.mSXoHSbX86.df.ClVZt5Kmo5IAqlehtqL5Esr2loxVsQy','2020-05-14',NULL),(7,'hola@gmail.com','hola','$2a$10$AqNkq/2Jlp8axgB.sLBk7.Z6hXUI9oGxiGuZAOcB7IC00pr/xOtv.','2020-05-16',NULL),(8,'tele@gmail.com','tele smart','$2a$10$znTKvPUpAAUQGCO98cs9hOowfuR10qXtPm.I1aYnKISzJNhQXmCD6','2020-05-23',NULL),(9,'ketchup@gmail.com','ketchup','$2a$10$mtqa5J/wk0eKD7WukpVtEOZVDtbhB53NORVa39ZCxWQlCdZdJjo4K','2020-05-13',NULL),(10,'pomelo@gmail.com','pomelo','$2a$10$.AkNO5NpyobOQLbSXo05fuxPTbbwi17qGaklG/5nEVA1GCymE6B.u','2020-05-08',NULL),(11,'papelhigienico@gmail.com','Papel','$2a$10$I77T683AgQeDekc0O2ScF.397K9ABiRXYCWKu.V3Uhm7IOKWphGvG','2020-05-07',NULL),(12,'compu@gmail.com','compu','$2a$10$uRgccj45LUIcdJOHORDF5.q3hG.RrmJxPI88Xy2h.ohIvr5p52Z5S','2020-05-08',NULL),(13,'parlante@gmail.com','parlante','$2a$10$GvwsxGC8wZzvNTIuB0OMw./tcfZ3nwa.WbaDdLTAspon.osOz6Ol2','2020-06-19',NULL),(14,'julia@gmail.com','Juli the cover store','$2a$10$/0Rq8b6WazpErizLevXWguNLXjxeVMLwHRWdJE2DTgwj7HZdhebJ2','2020-06-11',NULL),(15,'cocacola@gmail.com','coca cola','$2a$10$TdU7rn5L/PozC/j.QnJgfedvGvXbj1SEaPwuUtT0EUuhBEPDoZHuq','2020-06-12',NULL),(16,'cerealitas@gmail.com','cerealitas galletitas','$2a$10$G22jbK3bcWX1A0UEcIcDG.uDOmkRDJ7ptsQv6GfSYrJnJumZh1qWy','2020-06-26',NULL),(17,'dado@gmail.com','Dado ','$2a$10$3SyJdp8xsJo4b1zifQLH8OFELGCd2X7QgbhUKi0CLjLjXA5Do55K2','2020-06-17',NULL),(18,'yerba@gmail.com','yerba buena','$2a$10$5zpEmxfBVroZ86CVXJG96.wQlTcZu9BSp6F8DZqWvQ9eWHPWuHQH.','2020-06-11',NULL),(19,'heladera@gmail.com','heladera llena','$2a$10$Idtis3cqjzdpkQYP9rEyuurjZ4gvcqjwMnymUy3rUpT7sWX2hbanq','2020-06-13',NULL),(20,'holakeace@gmail.com','hola ke ace','$2a$10$se2L6j5g1PwauULGNZSk/.wb7wFjRaqva9Qh2qNxq.H.6IIiUe/Ze',NULL,NULL),(21,'telefono@gmail.com','Telefono nuevo','$2a$10$o4IoBGv0na0j38/dNhUoCekSbuaDMn67Dpeuto7pAKpMy1HqGdXPa','2020-06-09',NULL),(22,'cuadro@gmail.com','Cuadro nuevo','$2a$10$qr.QwPO7X83LLmMBsDXKWuXQ.WQIdr/FA1/46e84SDuMbpP8RjGaW','2020-06-12',NULL),(23,'auriculares@gmail.com','Auricualares','$2a$10$6Nrrm7zJj.opFNsZPF6jfOErblTmsDXxVmt8E7CwwqItevyvexhJa','2020-06-19',NULL),(24,'parlantes@gmail.com','Parlantes','$2a$10$3sGQIeegW1JS/OBHe1a4eudSilG09gKdMzis.nBTBrTT4zt80t8ty','2020-06-20',NULL),(26,'mayonesa@gmail.com','mayonesa','$2a$10$DanC.raU3FUzNzrXA9Ay.OcE2tut.Z.drSnScUkHwYn8gst19tQk6','2020-06-27',NULL),(27,'soymayada@gmail.com','Camilo mayada','$2a$10$H2NCQDuqkAWgSev5jGCSSuLSQNSNBJS9mCJ9/SNT3Nc3QcIvTXe2W','2020-06-20','8'),(28,'soylaprofe@gmail.com','Maria Silvi','$2a$10$N1MotIwHJABp8UjBseQneeD.3HfPZQN51jwL9/cUg/XWtejJVfkVK','2020-06-26','35'),(29,'television@gmail.com','television','$2a$10$/ZeMMjN7ccLpyFZpJDbu9uk6d6av2OhaGL6XhPzMjXnjL8TA5AHxK','2020-06-18','0'),(30,'cargador@gmail.com','cargador','$2a$10$qYaFog.tTI79w5nStuiBJejWIk6z6oXqurBfZ6KAWTAePgJ3BFwDG','2020-06-20','0'),(31,'acolchado@gmail.com','acolchado','$2a$10$5.IhviqUnDJmSgzYVK.eTug2acaMYTGd4bneUcGqmMyYZI9jn9CQe','2020-06-19','12'),(32,'enchufe@gmail.com','enchufe','$2a$10$gkj7OHa0.8TqoPR96g609.5Owadks5vQiV.g9SAa9qLS.GNwtxPWy','2020-06-19','16'),(33,'pamelasus@gmail.com','pamela sus','$2a$10$8XGMtvz/vio8ZoG3IgsENulk3I0Bii0GbIDdGI5RODMc8aAqomnLu','2020-06-11','Adventure'),(34,'salsadesoja@gmail.com','Salsa de soja','$2a$10$lTDAW7MMe5RYCCnoLClcTuHs5EqPEGF73YJW7k.2egOZff42f3hue','2020-06-03','Animation'),(35,'almohada@gmail.com','almohada','$2a$10$LG/UEnvtX1yjYP09RDtSKu.FmGLnxzOkvXY2ABhM2m1GdWQdthsOK','2020-06-19','Comedy'),(36,'camara@gmail.com','Camara de fotos','$2a$10$9GEF2F1YU1Cv8Tyb1p.J1eUTc6fsDW9A7YLeN.0rhpAzePhEzvl/2','2020-06-20','Animation'),(38,'totovolberg@gmail.com','Toto Volberg','$2a$10$Dy7yT0p4A.0Lh6IonFeqDepvApjCn5UvSbsPCEUYhblwaUnhHasyC','2020-06-19','Animation'),(39,'julitaba@gmail.com','Juli taba','$2a$10$xUxl.5W1MbBRod2vvoFv6ueCdfCsj7x4feb72t7/bkOFK9qUHbPAi','2020-06-21','History'),(40,'thecoverstore@gmail.com','The cover Store','$2a$10$xIHk6OmjyA3W7aj/ASOZTuUunk0seN/8Pm1LzilJq6Tq4wi5Edn02','2020-06-13','Mystery'),(41,'goma@gmail.com','Goma de borrar','$2a$10$uzjO.NDNXKHHr8Ttvu0GLOMxKyXk.Aiqa9JfH/KvPjSaBX/dWjOJK','2020-06-21','TV Movie'),(42,'ruterwifi@gmail.com','Ruter de wifi','$2a$10$aRz6JTe7EbjJHBYf/cVG1eotNagyzW0Y18KGJGMmnVOZmEDwdVJGG','2020-06-19','Family'),(43,'microfono@gmail.com','Microfono','$2a$10$taZfYugGy7gD1Hu.NxWspOw91KjzX7PLkNO4BdBgY/a8JtYVNJWwq','2020-06-20','Comedy'),(44,'microfono2@gmail.com','microfono 2','$2a$10$Monb8G9mwpbnCA9mrOrg7uWWqPC0Ml93QzFX5OKlse/zIJYppu3di','2020-06-06','Documentary');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-07 16:27:32
