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
-- Table structure for table `resenias`
--

DROP TABLE IF EXISTS `resenias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resenias` (
  `resenias_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `movie_id` int(11) NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `resenia_text` varchar(140) NOT NULL,
  `resenia_date` date DEFAULT NULL,
  `resenia_updateDate` date DEFAULT NULL,
  `movie_score` float NOT NULL,
  PRIMARY KEY (`resenias_id`),
  UNIQUE KEY `resenias_id_UNIQUE` (`resenias_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resenias`
--

LOCK TABLES `resenias` WRITE;
/*!40000 ALTER TABLE `resenias` DISABLE KEYS */;
INSERT INTO `resenias` VALUES (24,38700,12,'Juli, te recomendo que mires esta peli que est abuenisiaaaaa','2020-05-31','2020-06-01',4.2),(25,385103,12,'Muy muy buenaaaaaa','2020-05-31',NULL,5),(26,338762,8,'AAAA~!!@!DFSD','2020-05-31',NULL,3.9),(27,338762,8,'Holaaaa ke ace','2020-06-01',NULL,7),(28,338762,8,'tfaskdahsdsa','2020-06-01',NULL,3.6),(29,338762,8,'Buenisima!!!! Probando editar jajaja jaja jaja jaaj','2020-06-01','2020-06-01',2),(30,545609,14,'Peliculonnnnnnnnnn','2020-06-01',NULL,0.1),(33,338762,15,'Que buena peli!','2020-06-04',NULL,6.3),(34,338762,15,'Que buena peli!','2020-06-04',NULL,6.3),(35,514847,21,'Muy buenaaa','2020-06-04',NULL,6.5),(36,514847,21,'Que buena estuvo la peli','2020-06-04',NULL,4),(37,496243,23,'telefono','2020-06-04','2020-06-04',4.5),(38,620883,34,'Muy buena la corazonada, recoendable a full.','2020-06-04',NULL,5.3),(39,496243,34,'mUY BUENA PARASITO','2020-06-04',NULL,3.8),(40,640344,34,'Q cracktopa lo re banco','2020-06-04',NULL,5.9),(41,537061,36,'La verdad que me confundi y estaba muy buena','2020-06-07','2020-06-07',4.3),(42,620883,38,'Blodshot tiene 48','2020-06-07',NULL,3.3),(43,620883,39,'Esta reseña es para ver si funciona bien el carrusel','2020-06-07',NULL,4),(44,574982,36,'Y aca tmb me confu y es malardaaaaaaa','2020-06-07','2020-06-07',4.2),(45,574982,36,'malardaaa','2020-06-07',NULL,3.9),(46,574982,36,'Ta buena','2020-06-07',NULL,4.5),(47,574982,18,'iofdsfs','2020-06-07',NULL,3.6),(48,574982,34,'udhsfodsihfosdf','2020-06-07',NULL,5.2),(49,574982,40,'Vayan a mi instagram! @thecoverstore','2020-06-07',NULL,3),(50,686245,35,'ofihesrpgerg','2020-06-07',NULL,3.4);
/*!40000 ALTER TABLE `resenias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-07 16:26:41
