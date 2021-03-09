﻿# Host: localhost  (Version: 5.5.47)
# Date: 2020-10-27 16:00:38
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "student"
#

DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` double DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` double DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `class` double DEFAULT NULL,
  `score` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "student"
#

INSERT INTO `student` VALUES (1,'孙九二',20,'男',1920,89),(2,'将七十',20,'男',1912,83),(3,'郑三九',25,'男',1912,74),(4,'王九七',21,'男',1918,79),(5,'钱五三',27,'女',1910,88),(6,'施五十',22,'女',1910,72),(7,'王九六',25,'女',1912,94),(8,'楚一三',19,'男',1913,60),(9,'钱六九',27,'女',1910,82),(10,'施三七',22,'男',1915,62),(11,'琴八三',24,'男',1911,89),(12,'许二七',28,'女',1916,73),(13,'沈一七',22,'女',1912,88),(14,'李六十',18,'女',1917,79),(15,'尤七四',19,'男',1920,63),(16,'尤三八',29,'男',1913,68),(17,'朱四十',21,'女',1915,91),(18,'琴三三',25,'女',1910,54),(19,'周六十',30,'男',1915,47),(20,'郑二六',22,'男',1920,85),(21,'吕五五',26,'男',1914,48),(22,'冯一四',30,'男',1917,75),(23,'王二五',29,'男',1919,43),(24,'琴三八',27,'女',1911,71),(25,'吴六七',19,'女',1918,68),(26,'周十九',21,'女',1911,75),(27,'吕七十',22,'女',1917,83),(28,'章二六',18,'女',1912,67),(29,'吴七一',28,'女',1920,46),(30,'何五六',22,'男',1914,77),(31,'吴七一',20,'女',1911,49),(32,'魏四七',29,'男',1920,82),(33,'施三二',24,'女',1920,91),(34,'将六八',24,'女',1910,77),(35,'钱四八',28,'男',1919,93),(36,'孙五一',20,'女',1916,96),(37,'吕二七',20,'女',1911,97),(38,'何九七',24,'女',1910,100),(39,'琴五五',19,'女',1910,96),(40,'王八五',25,'男',1910,57),(41,'孙九九',25,'女',1914,52),(42,'赵四四',25,'女',1920,78),(43,'赵一五',25,'女',1913,91),(44,'章二一',18,'男',1914,66),(45,'李二五',29,'女',1911,94),(46,'杨六十',26,'男',1919,97),(47,'李九十',18,'男',1919,79),(48,'魏九六',18,'男',1916,71),(49,'章六九',27,'女',1912,89),(50,'施六八',28,'男',1912,91),(51,'施九三',29,'女',1913,92),(52,'尤七一',27,'女',1918,52),(53,'李九八',22,'女',1911,53),(54,'魏九七',18,'男',1911,84),(55,'杨十八',19,'男',1919,72),(56,'郑九三',25,'女',1919,79),(57,'琴五六',20,'男',1918,95),(58,'魏五二',23,'女',1910,71),(59,'孙一六',19,'男',1910,51),(60,'许二二',26,'女',1910,70),(61,'吴五九',25,'女',1916,49),(62,'沈十二',29,'男',1910,77),(63,'沈一二',27,'男',1912,91),(64,'何十七',24,'女',1911,96),(65,'朱一一',20,'女',1913,85),(66,'施四一',26,'男',1917,95),(67,'尤十六',23,'女',1919,43),(68,'王九八',18,'女',1914,75),(69,'韩三十',18,'女',1916,98),(70,'周二七',24,'女',1920,90),(71,'钱五三',18,'女',1912,91),(72,'沈四一',29,'男',1916,77),(73,'钱五七',29,'女',1911,75),(74,'将四四',27,'女',1913,55),(75,'周七五',18,'男',1920,85),(76,'将二九',18,'男',1911,81),(77,'沈六二',29,'女',1914,93),(78,'沈六三',19,'男',1920,77),(79,'陈四五',21,'女',1911,87),(80,'沈五九',19,'男',1916,97),(81,'李十七',26,'男',1913,79),(82,'将八七',30,'女',1913,89),(83,'沈六五',20,'女',1915,69),(84,'朱一十',18,'女',1914,42),(85,'王七十',22,'男',1913,50),(86,'章六四',30,'女',1914,55),(87,'吕一十',27,'女',1912,93),(88,'周四一',22,'男',1913,49),(89,'孙九四',26,'男',1912,53),(90,'李十十',24,'女',1919,91),(91,'周十十',21,'女',1919,71),(92,'赵一二',19,'女',1917,97),(93,'孙六六',27,'男',1915,44),(94,'杨四三',22,'男',1916,99),(95,'琴八一',26,'男',1917,65),(96,'杨五一',30,'女',1911,72),(97,'郑三九',20,'女',1911,72),(98,'朱十六',27,'男',1912,74),(99,'王九二',22,'女',1912,47),(100,'何三八',27,'男',1920,76),(101,'周八一',21,'男',1913,92),(102,'何三十',23,'男',1917,41),(103,'吴八十',21,'男',1918,78),(104,'李九一',18,'男',1910,58),(105,'吕六五',25,'男',1912,90),(106,'冯二九',27,'女',1916,55),(107,'周八四',28,'女',1919,71),(108,'楚十一',30,'男',1917,58),(109,'何五八',20,'女',1910,85),(110,'何四十',24,'女',1920,80),(111,'沈三九',29,'女',1918,87),(112,'赵九四',30,'女',1916,84),(113,'李九五',29,'女',1918,62),(114,'楚九九',30,'女',1913,50),(115,'钱八六',29,'男',1910,99),(116,'施四三',19,'女',1920,55),(117,'王八一',28,'男',1918,40),(118,'何二五',28,'男',1917,49),(119,'赵六一',27,'男',1920,46),(120,'魏八三',30,'男',1918,42),(121,'陈六十',24,'女',1910,64),(122,'周二一',24,'男',1916,72),(123,'周二四',28,'女',1910,84),(124,'杨八六',24,'男',1911,85),(125,'何一一',21,'男',1919,93),(126,'李七七',26,'女',1910,83),(127,'许十九',30,'男',1915,92),(128,'尤八九',21,'女',1920,71),(129,'尤九五',26,'女',1912,51),(130,'许五六',26,'男',1916,76),(131,'尤二八',27,'男',1920,42),(132,'许五三',21,'男',1915,40),(133,'杨七一',29,'女',1915,77),(134,'施三八',20,'女',1913,77),(135,'郑五五',30,'女',1917,58),(136,'李二五',19,'男',1914,63),(137,'沈十一',25,'女',1917,98),(138,'韩十七',26,'女',1917,79),(139,'孙一一',18,'女',1912,50),(140,'朱七七',27,'女',1911,57),(141,'钱七三',29,'女',1910,69),(142,'将二一',27,'女',1918,45),(143,'沈七一',29,'女',1918,80),(144,'何二四',27,'女',1914,94),(145,'钱一十',24,'女',1916,99),(146,'尤八六',28,'女',1911,94),(147,'楚二六',30,'男',1910,60),(148,'沈六九',19,'男',1914,91),(149,'吴四十',25,'男',1916,83),(150,'孙六九',25,'男',1917,65),(151,'章五一',18,'女',1910,52),(152,'李一八',24,'女',1910,59),(153,'将七六',27,'女',1911,68),(154,'韩四六',21,'男',1911,76),(155,'赵七六',26,'男',1916,89),(156,'韩五三',27,'女',1916,96),(157,'魏十五',19,'女',1916,73),(158,'章八五',28,'男',1913,90),(159,'尤四六',26,'男',1917,51),(160,'王一十',24,'女',1917,93),(161,'孙八十',23,'男',1918,83),(162,'王九九',23,'女',1919,40),(163,'钱九二',24,'男',1911,91),(164,'李六一',27,'男',1919,88),(165,'赵九十',29,'男',1910,55),(166,'冯一九',29,'女',1919,74),(167,'周六九',18,'男',1920,91),(168,'将四三',18,'女',1917,90),(169,'李七六',30,'男',1915,98),(170,'周六九',23,'女',1917,64),(171,'吕九七',26,'女',1920,82),(172,'冯二六',23,'女',1915,80),(173,'孙二七',30,'男',1914,45),(174,'将七六',29,'女',1915,94),(175,'魏三三',21,'女',1911,65),(176,'钱四七',23,'男',1910,66),(177,'何八五',24,'男',1918,66),(178,'魏七六',24,'男',1919,100),(179,'朱一五',22,'男',1913,75),(180,'沈六九',18,'女',1917,89),(181,'赵三八',27,'男',1919,57),(182,'琴九八',19,'男',1917,43),(183,'何八九',28,'男',1915,51),(184,'吴二八',28,'男',1912,97),(185,'将一十',22,'男',1917,65),(186,'陈五五',18,'男',1915,42),(187,'琴七六',30,'男',1914,87),(188,'章十四',28,'男',1919,70),(189,'施三八',23,'女',1917,45),(190,'周九六',29,'男',1915,59),(191,'韩三一',27,'男',1912,63),(192,'周二六',25,'女',1913,76),(193,'冯一四',26,'女',1916,47),(194,'吴二六',19,'男',1910,88),(195,'郑九五',25,'男',1916,72),(196,'许六三',18,'女',1910,97),(197,'吴五七',20,'女',1910,87),(198,'周九四',23,'男',1912,95),(199,'章一二',23,'女',1917,55),(200,'郑五四',28,'男',1918,80),(201,'韩九九',27,'女',1918,90),(202,'周十四',18,'男',1916,72),(203,'沈十三',25,'女',1910,45),(204,'陈七九',30,'男',1917,65),(205,'赵二九',23,'男',1912,75),(206,'施二五',29,'女',1911,44),(207,'吴四三',18,'女',1920,43),(208,'杨四五',30,'女',1916,62),(209,'将八八',29,'男',1913,87),(210,'沈四十',19,'男',1914,68),(211,'许三二',20,'男',1920,82),(212,'施五三',28,'男',1919,49),(213,'杨六五',21,'女',1915,85),(214,'琴一十',26,'男',1915,45),(215,'韩五六',29,'女',1914,42),(216,'杨二一',18,'男',1912,98),(217,'陈十三',21,'男',1916,53),(218,'沈四七',25,'女',1919,92),(219,'王十六',25,'女',1918,77),(220,'朱三九',28,'男',1920,66),(221,'王九九',18,'女',1911,71),(222,'尤八二',28,'男',1915,50),(223,'王六六',20,'女',1912,67),(224,'魏二五',24,'女',1919,83),(225,'楚八七',20,'男',1919,64),(226,'魏三七',26,'女',1910,98),(227,'王三六',19,'女',1915,45),(228,'吕四九',21,'女',1911,68),(229,'王五三',30,'女',1913,50),(230,'冯五三',28,'男',1915,77),(231,'杨九三',20,'女',1917,73),(232,'冯四九',24,'女',1917,92),(233,'施四二',29,'女',1913,75),(234,'沈四三',25,'女',1913,41),(235,'钱六六',30,'女',1915,62),(236,'许十五',22,'男',1918,72),(237,'何五十',21,'男',1913,97),(238,'琴五七',27,'女',1916,78),(239,'何八一',20,'男',1910,74),(240,'韩三六',22,'女',1910,79),(241,'钱一十',26,'男',1912,40),(242,'赵九八',26,'女',1919,58),(243,'许九八',22,'男',1910,82),(244,'朱三一',23,'女',1920,93),(245,'周二一',20,'女',1915,44),(246,'孙一五',30,'男',1912,69),(247,'周五二',22,'女',1916,86),(248,'楚一八',20,'女',1911,61),(249,'李二五',26,'女',1919,95),(250,'孙二三',18,'女',1910,42),(251,'许七四',25,'女',1914,60),(252,'尤六八',26,'女',1920,84),(253,'沈九十',18,'女',1920,89),(254,'琴五一',26,'男',1914,65),(255,'吕二九',18,'女',1915,64),(256,'孙十七',22,'女',1912,51),(257,'楚八八',19,'女',1915,74),(258,'孙三二',18,'男',1920,70),(259,'郑一七',30,'女',1918,71),(260,'冯一八',22,'女',1911,62),(261,'郑八八',18,'男',1920,66),(262,'吕十六',19,'女',1916,82),(263,'周二三',22,'女',1911,83),(264,'何三七',19,'男',1916,66),(265,'孙三三',23,'男',1913,52),(266,'郑六六',30,'男',1920,95),(267,'魏四九',26,'男',1913,71),(268,'韩二六',26,'男',1917,41),(269,'将二九',23,'女',1919,50),(270,'何七三',24,'女',1920,73),(271,'陈六九',26,'女',1916,98),(272,'施一十',25,'男',1914,59),(273,'魏九一',27,'女',1916,45),(274,'许四九',30,'女',1912,72),(275,'朱九三',29,'女',1915,74),(276,'许十二',30,'女',1919,98),(277,'沈二五',24,'男',1919,56),(278,'何一五',20,'女',1918,55),(279,'朱九七',20,'女',1912,62),(280,'韩九八',20,'男',1920,46),(281,'许八五',22,'男',1916,69),(282,'赵八三',22,'男',1910,77),(283,'李八一',18,'男',1914,95),(284,'郑七十',23,'女',1919,65),(285,'朱三九',23,'女',1911,100),(286,'钱二三',22,'女',1912,42),(287,'冯二一',20,'女',1912,53),(288,'李七四',18,'女',1915,43),(289,'郑二八',23,'男',1915,76),(290,'李二十',22,'男',1917,65),(291,'孙三六',20,'男',1913,90),(292,'李七二',21,'女',1910,79),(293,'孙五二',24,'男',1910,75),(294,'何四二',21,'男',1916,49),(295,'杨七二',29,'女',1920,85),(296,'琴十十',24,'男',1912,63),(297,'周六三',22,'男',1917,83),(298,'陈七三',21,'女',1914,50),(299,'尤七十',27,'女',1916,72),(300,'尤二十',28,'女',1915,95),(301,'钱二八',18,'女',1918,57),(302,'陈八三',19,'女',1912,92),(303,'尤八五',25,'男',1915,52),(304,'杨八九',27,'女',1916,62),(305,'尤十一',21,'女',1912,44),(306,'赵七四',20,'女',1914,48),(307,'楚三六',28,'男',1913,58),(308,'王五七',22,'女',1917,66),(309,'何七八',20,'女',1916,61),(310,'施九八',21,'男',1912,64),(311,'钱七十',23,'女',1912,91),(312,'周五三',18,'男',1916,55),(313,'王七五',23,'女',1916,95),(314,'王四七',25,'男',1910,74),(315,'冯二七',28,'女',1918,63),(316,'孙七六',30,'女',1917,69),(317,'朱十七',20,'男',1918,42),(318,'许七十',29,'女',1919,41),(319,'朱六一',27,'男',1913,96),(320,'将四四',26,'男',1916,57),(321,'赵十七',19,'男',1919,70),(322,'将九二',25,'女',1914,82),(323,'尤八四',28,'女',1913,40),(324,'冯二九',19,'女',1918,58),(325,'许六五',23,'女',1915,76),(326,'李六二',21,'男',1915,100),(327,'施七十',28,'女',1910,80),(328,'章六六',28,'男',1919,83),(329,'李二一',25,'女',1914,45),(330,'何七四',22,'女',1918,88),(331,'施三十',20,'男',1911,66),(332,'王二八',29,'女',1912,49),(333,'将七五',30,'男',1910,56),(334,'王八六',26,'女',1913,72),(335,'钱四十',28,'男',1918,61),(336,'琴四一',28,'男',1916,88),(337,'施五九',19,'男',1913,95),(338,'韩九三',22,'男',1915,46),(339,'钱十九',19,'女',1915,96),(340,'周九六',25,'女',1913,56),(341,'章四十',20,'女',1917,58),(342,'楚六五',21,'女',1915,95),(343,'郑八二',18,'男',1916,52),(344,'孙十一',28,'女',1911,86),(345,'朱十三',29,'男',1910,53),(346,'章八四',26,'男',1918,93),(347,'楚一一',29,'男',1916,83),(348,'王六六',24,'男',1913,95),(349,'沈二三',22,'女',1917,98),(350,'吕一十',22,'男',1914,63),(351,'吕三十',27,'女',1918,69),(352,'王八八',19,'男',1916,94),(353,'韩二五',20,'男',1917,57),(354,'郑六八',25,'男',1919,61),(355,'冯八一',28,'女',1917,43),(356,'吕六九',28,'男',1913,60),(357,'陈一六',26,'女',1912,69),(358,'何七六',20,'女',1912,51),(359,'孙一七',19,'男',1916,67),(360,'沈十六',30,'男',1913,65),(361,'施二九',21,'女',1915,60),(362,'琴六八',23,'女',1910,88),(363,'施四九',18,'男',1911,52),(364,'周十十',28,'女',1918,87),(365,'许五一',21,'男',1917,47),(366,'沈六三',18,'男',1913,75),(367,'周三三',23,'女',1914,61),(368,'周八七',26,'女',1916,75),(369,'章三六',22,'男',1918,78),(370,'沈十六',22,'男',1915,67),(371,'沈一十',28,'女',1910,65),(372,'魏二九',27,'女',1919,69),(373,'赵六一',26,'男',1912,48),(374,'王一五',19,'男',1917,89),(375,'陈四三',18,'女',1913,66),(376,'陈四二',23,'女',1915,79),(377,'施八九',27,'男',1918,65),(378,'赵一五',25,'女',1915,74),(379,'楚三四',23,'男',1918,96),(380,'施四九',28,'男',1918,84),(381,'郑七八',29,'男',1910,86),(382,'冯四五',26,'女',1919,47),(383,'章四九',18,'女',1916,97),(384,'楚二六',23,'男',1915,92),(385,'孙八一',26,'男',1918,97),(386,'楚一八',24,'男',1913,64),(387,'尤十六',20,'男',1915,100),(388,'何八四',22,'女',1919,84),(389,'何十六',20,'男',1914,55),(390,'吕七三',30,'男',1919,87),(391,'李八二',27,'女',1915,47),(392,'沈三十',18,'男',1917,69),(393,'杨六五',21,'男',1920,68),(394,'施三六',21,'女',1911,50),(395,'何七七',20,'女',1915,92),(396,'魏七五',25,'男',1912,87),(397,'章七六',30,'女',1917,92),(398,'吴三四',21,'男',1911,40),(399,'周六六',23,'女',1914,54),(400,'赵一六',23,'女',1914,85),(401,'吕六二',30,'女',1916,53),(402,'吕九三',20,'女',1913,50),(403,'施六九',29,'女',1920,87),(404,'孙三五',27,'男',1913,44),(405,'施一十',23,'男',1910,91),(406,'沈五十',28,'男',1918,45),(407,'陈三三',22,'女',1914,72),(408,'钱七八',29,'男',1918,95),(409,'钱八五',30,'男',1920,69),(410,'魏二十',23,'女',1910,78),(411,'郑八六',22,'男',1913,40),(412,'吕十七',18,'女',1912,95),(413,'吕六三',27,'男',1918,66),(414,'周五二',29,'女',1911,54),(415,'吕九五',27,'女',1918,55),(416,'章四八',26,'女',1912,53),(417,'楚七七',23,'女',1912,69),(418,'施五一',22,'女',1916,89),(419,'孙七十',29,'男',1916,88),(420,'周九二',28,'女',1912,71),(421,'周二五',20,'女',1920,94),(422,'冯六五',26,'女',1914,84),(423,'钱九六',28,'男',1919,80),(424,'施五七',30,'男',1919,97),(425,'吴四十',27,'女',1918,68),(426,'沈九八',18,'女',1911,97),(427,'杨五三',28,'女',1911,63),(428,'李二四',21,'男',1916,48),(429,'钱三九',18,'女',1911,68),(430,'郑九九',23,'男',1919,89),(431,'孙三七',28,'女',1918,100),(432,'吴三十',19,'女',1910,57),(433,'朱二六',30,'女',1918,82),(434,'沈七三',29,'男',1910,56),(435,'周四八',21,'男',1913,41),(436,'孙四五',25,'男',1916,42),(437,'朱一九',25,'男',1913,65),(438,'周八八',23,'男',1918,84),(439,'吴五一',18,'女',1919,71),(440,'李八七',21,'女',1920,73),(441,'孙三九',25,'男',1915,65),(442,'郑三九',19,'女',1915,44),(443,'章八七',25,'男',1911,99),(444,'郑五八',19,'男',1915,68),(445,'陈八五',30,'男',1918,99),(446,'陈六四',29,'男',1913,84),(447,'琴八一',28,'男',1914,67),(448,'何五三',27,'女',1919,98),(449,'杨十十',26,'男',1911,93),(450,'许七八',30,'女',1917,76),(451,'郑八三',18,'男',1910,69),(452,'何八四',19,'男',1914,80),(453,'陈八二',25,'男',1920,65),(454,'李三十',20,'男',1918,44),(455,'何三九',20,'女',1915,44),(456,'朱六九',28,'男',1920,86),(457,'朱五三',24,'女',1910,60),(458,'将四三',27,'男',1910,43),(459,'王六八',27,'女',1912,87),(460,'周七七',28,'女',1918,94),(461,'章二一',24,'男',1919,98),(462,'杨四七',23,'女',1915,100),(463,'何四七',25,'男',1915,78),(464,'许三七',26,'女',1916,52),(465,'冯二九',22,'男',1913,42),(466,'杨四七',24,'男',1916,85),(467,'王七五',19,'女',1920,48),(468,'魏三九',22,'男',1918,63),(469,'冯三五',19,'女',1919,93),(470,'周十十',29,'男',1916,85),(471,'章二八',20,'男',1918,62),(472,'沈九一',24,'女',1920,74),(473,'章一二',24,'女',1914,54),(474,'楚二一',27,'男',1918,94),(475,'韩一七',21,'男',1915,89),(476,'章九三',19,'男',1916,64),(477,'尤四七',26,'男',1912,64),(478,'赵五九',29,'男',1913,76),(479,'楚十五',20,'男',1913,72),(480,'李五二',27,'男',1913,43),(481,'尤七三',20,'女',1914,50),(482,'孙九九',24,'女',1918,85),(483,'冯二五',24,'男',1920,42),(484,'施七十',22,'男',1916,51),(485,'魏七八',21,'男',1912,88),(486,'王九九',25,'女',1910,87),(487,'沈二十',30,'女',1916,62),(488,'尤六三',24,'男',1920,98),(489,'章一五',26,'男',1916,45),(490,'吕七二',20,'女',1918,74),(491,'何二二',19,'男',1918,43),(492,'韩十四',20,'男',1919,40),(493,'尤五二',22,'女',1910,59),(494,'楚七十',21,'女',1920,73),(495,'将八六',27,'女',1917,48),(496,'尤二八',18,'女',1910,70),(497,'吕五二',19,'女',1913,55),(498,'孙十四',18,'女',1910,76),(499,'王三一',21,'女',1910,48),(500,'吴一七',30,'女',1918,46),(501,'何十一',18,'男',1919,52),(502,'沈一六',20,'男',1912,48),(503,'沈二四',26,'男',1920,45),(504,'冯八七',26,'男',1919,98),(505,'琴三四',29,'女',1917,96),(506,'章十七',20,'男',1920,45),(507,'钱八五',21,'男',1911,71),(508,'钱一一',30,'女',1916,83),(509,'赵四七',26,'男',1911,82),(510,'章二九',26,'男',1912,90),(511,'赵七八',18,'女',1917,68),(512,'尤四五',25,'女',1918,73),(513,'琴七五',19,'男',1910,59),(514,'琴九三',30,'男',1917,57),(515,'郑十五',22,'女',1912,68),(516,'冯四十',23,'女',1915,46),(517,'魏一三',23,'男',1919,44),(518,'吕四一',28,'男',1911,92),(519,'孙四十',19,'女',1920,72),(520,'郑四二',18,'男',1918,72),(521,'周十七',20,'男',1916,83),(522,'杨九五',25,'男',1914,67),(523,'吴十五',28,'男',1916,52),(524,'陈二四',24,'女',1919,71),(525,'魏二二',25,'女',1915,73),(526,'韩九六',18,'男',1913,68),(527,'赵六三',20,'女',1912,71),(528,'孙十二',21,'男',1914,50),(529,'王三二',20,'女',1916,61),(530,'施五六',22,'男',1914,90),(531,'周三六',28,'男',1915,40),(532,'冯七八',24,'女',1918,51),(533,'郑十五',22,'男',1912,64),(534,'王十五',23,'女',1919,95),(535,'钱六九',24,'男',1916,82),(536,'将五八',26,'女',1917,83),(537,'冯九四',25,'男',1913,69),(538,'吕六七',24,'女',1910,79),(539,'陈九二',26,'女',1911,46),(540,'沈二三',27,'女',1915,64),(541,'李八六',18,'男',1913,93),(542,'王九一',22,'女',1910,67),(543,'魏七十',21,'男',1913,57),(544,'许一一',21,'女',1920,64),(545,'韩二五',23,'女',1910,61),(546,'琴八二',21,'男',1914,52),(547,'孙一四',25,'男',1919,86),(548,'周十三',22,'男',1914,63),(549,'王八七',29,'男',1920,52),(550,'许八七',18,'女',1912,59),(551,'将十九',26,'女',1918,74),(552,'李一五',23,'女',1915,69),(553,'郑二六',18,'男',1920,53),(554,'琴一二',29,'女',1919,82),(555,'将三六',29,'女',1918,54),(556,'沈二九',26,'男',1917,63),(557,'赵三十',19,'男',1914,80),(558,'孙十五',26,'女',1915,86),(559,'陈八九',19,'女',1910,87),(560,'许七一',23,'女',1916,53),(561,'韩四二',27,'男',1913,59),(562,'李八一',25,'女',1917,65),(563,'施六十',27,'女',1913,85),(564,'何二三',29,'男',1915,80),(565,'沈四九',18,'男',1920,69),(566,'楚八八',24,'女',1912,43),(567,'楚四二',27,'男',1916,50),(568,'孙二二',24,'男',1913,91),(569,'何九三',26,'女',1914,96),(570,'周二一',27,'女',1920,76),(571,'韩三七',23,'男',1915,74),(572,'陈二十',22,'女',1913,67),(573,'孙六四',28,'女',1919,96),(574,'赵四八',29,'女',1917,66),(575,'许十一',28,'女',1914,100),(576,'周七一',29,'男',1911,78),(577,'王十四',19,'女',1914,56),(578,'孙五四',23,'女',1910,69),(579,'尤七二',20,'女',1919,97),(580,'陈五十',20,'男',1911,41),(581,'赵九十',27,'男',1914,53),(582,'李十七',18,'女',1910,49),(583,'许九七',25,'女',1920,69),(584,'陈七一',27,'男',1911,89),(585,'周九五',22,'男',1917,76),(586,'吴十三',18,'女',1912,60),(587,'朱九六',22,'男',1914,48),(588,'孙二六',26,'女',1913,78),(589,'楚七八',18,'男',1917,79),(590,'赵十九',19,'男',1916,67),(591,'朱四四',22,'男',1913,95),(592,'吕二三',24,'女',1916,78),(593,'尤九十',25,'男',1914,50),(594,'朱十十',27,'男',1917,64),(595,'沈四二',18,'男',1915,62),(596,'琴七二',19,'女',1912,70),(597,'朱二十',18,'女',1911,66),(598,'施五五',24,'女',1916,75),(599,'杨六四',22,'女',1919,71),(600,'赵七十',21,'女',1919,62),(601,'郑二一',19,'女',1918,54),(602,'何六八',28,'女',1918,95),(603,'琴二二',25,'男',1913,95),(604,'韩一九',28,'男',1920,94),(605,'章七一',30,'男',1919,91),(606,'孙八八',22,'男',1912,88),(607,'赵八十',27,'女',1919,74),(608,'章二六',22,'男',1911,54),(609,'施一一',20,'女',1911,42),(610,'吕一十',24,'男',1916,48),(611,'冯六九',20,'男',1912,40),(612,'施八一',29,'女',1918,43),(613,'韩四一',30,'女',1911,47),(614,'许二一',30,'男',1919,61),(615,'章三四',29,'男',1915,56),(616,'章一一',30,'女',1916,71),(617,'赵九二',30,'女',1918,91),(618,'钱九七',18,'女',1915,60),(619,'琴十五',20,'男',1913,95),(620,'章十八',25,'男',1920,55),(621,'尤五四',23,'男',1913,71),(622,'王八六',24,'女',1916,70),(623,'许三八',30,'男',1920,96),(624,'冯七九',22,'男',1916,66),(625,'许七七',28,'男',1919,94),(626,'杨十三',27,'女',1917,85),(627,'钱五三',27,'男',1910,92),(628,'赵九五',21,'女',1918,83),(629,'琴四一',24,'女',1916,56),(630,'许一六',22,'男',1918,69),(631,'尤一五',21,'女',1916,85),(632,'王一二',29,'男',1913,55),(633,'将九八',30,'女',1916,65),(634,'吕九九',27,'男',1914,77),(635,'朱四五',19,'女',1915,47),(636,'吴九三',19,'男',1914,82),(637,'琴二六',23,'女',1912,79),(638,'沈一二',26,'女',1917,72),(639,'孙九八',18,'女',1917,40),(640,'孙六三',26,'女',1920,53),(641,'陈七八',25,'男',1913,82),(642,'赵七九',23,'女',1920,51),(643,'尤九四',25,'男',1920,97),(644,'吕十五',23,'男',1912,68),(645,'钱二一',25,'女',1913,93),(646,'吕二九',27,'女',1915,97),(647,'赵十九',25,'女',1914,97),(648,'章五五',30,'男',1920,75),(649,'琴三九',18,'男',1912,99),(650,'王六五',29,'女',1916,83),(651,'韩三二',22,'女',1917,73),(652,'郑七四',23,'女',1914,55),(653,'施七八',19,'女',1914,54),(654,'施五七',28,'男',1914,96),(655,'何六十',30,'男',1920,89),(656,'周十九',19,'男',1914,76),(657,'琴十三',23,'女',1917,69),(658,'章十九',25,'男',1915,68),(659,'楚九三',28,'女',1920,54),(660,'杨一一',21,'男',1911,58),(661,'韩九十',21,'女',1915,99),(662,'钱五十',18,'男',1919,85),(663,'尤十五',26,'男',1918,92),(664,'章三八',22,'女',1916,71),(665,'杨十四',20,'女',1918,69),(666,'王一四',25,'男',1920,81),(667,'将九七',18,'女',1910,52),(668,'周五十',22,'女',1919,94),(669,'冯一十',22,'女',1919,59),(670,'楚二十',29,'女',1920,79),(671,'钱四五',27,'女',1919,59),(672,'杨八五',29,'男',1918,75),(673,'尤六三',23,'男',1918,54),(674,'将十三',20,'男',1912,76),(675,'孙六八',22,'男',1910,85),(676,'吴一三',29,'女',1916,54),(677,'陈五十',25,'男',1919,72),(678,'王十十',22,'男',1920,94),(679,'施一三',25,'男',1917,69),(680,'冯七二',30,'男',1911,42),(681,'王一三',23,'女',1910,99),(682,'吕二七',26,'女',1916,68),(683,'陈一九',30,'女',1914,44),(684,'施三三',18,'女',1917,77),(685,'章三二',20,'女',1918,92),(686,'章一二',29,'女',1911,84),(687,'琴三一',22,'男',1914,74),(688,'陈一二',28,'女',1910,48),(689,'将六七',23,'女',1919,98),(690,'朱八九',21,'女',1912,74),(691,'朱八一',20,'女',1912,68),(692,'杨一一',20,'男',1915,56),(693,'陈八九',23,'女',1917,73),(694,'朱八八',26,'女',1918,63),(695,'韩三三',22,'男',1912,90),(696,'钱五七',27,'男',1917,49),(697,'杨五八',27,'女',1913,66),(698,'孙一三',21,'男',1914,47),(699,'吴九八',21,'女',1919,50),(700,'将十一',24,'男',1911,67),(701,'何三三',25,'男',1920,92),(702,'杨三二',29,'男',1911,48),(703,'吕三十',28,'女',1915,71),(704,'将九十',30,'男',1914,58),(705,'章九七',25,'女',1917,79),(706,'楚三十',29,'女',1914,63),(707,'郑六一',23,'男',1916,65),(708,'吕一五',20,'男',1919,64),(709,'韩一七',29,'男',1919,42),(710,'孙八五',29,'女',1913,54),(711,'尤六六',30,'女',1913,94),(712,'孙八三',27,'男',1912,92),(713,'琴二七',20,'男',1913,91),(714,'吕七二',22,'男',1915,76),(715,'钱二四',29,'女',1915,69),(716,'章七六',25,'男',1920,62),(717,'施二四',26,'男',1915,60),(718,'陈六十',29,'男',1918,95),(719,'魏四一',19,'男',1911,52),(720,'章二九',22,'男',1916,43),(721,'周六一',28,'女',1914,58),(722,'尤五三',29,'女',1919,42),(723,'许十八',18,'女',1920,76),(724,'赵十五',30,'男',1917,77),(725,'赵一五',30,'女',1913,40),(726,'朱十十',19,'男',1916,65),(727,'冯九十',24,'女',1910,81),(728,'魏五十',30,'男',1918,50),(729,'沈三一',27,'女',1912,54),(730,'郑十五',29,'女',1918,96),(731,'何二七',29,'女',1912,40),(732,'郑四六',23,'男',1912,63),(733,'吴十五',21,'男',1914,57),(734,'吴二七',29,'女',1911,40),(735,'沈五五',21,'男',1914,76),(736,'许九九',29,'男',1919,65),(737,'孙六九',20,'男',1920,96),(738,'朱四十',23,'男',1914,73),(739,'冯十三',29,'男',1914,99),(740,'章九一',23,'男',1920,96),(741,'朱十三',26,'女',1911,66),(742,'王四四',22,'女',1916,97),(743,'楚四七',28,'女',1914,51),(744,'周七八',23,'男',1912,43),(745,'钱七九',22,'男',1920,76),(746,'吴十二',29,'女',1912,46),(747,'韩八八',21,'男',1920,85),(748,'陈十二',18,'女',1910,69),(749,'琴六五',23,'女',1917,82),(750,'李九三',28,'男',1912,67),(751,'李八十',21,'女',1913,83),(752,'施一十',27,'男',1910,61),(753,'琴九三',25,'女',1913,71),(754,'吴一一',23,'男',1913,94),(755,'许六四',20,'男',1910,75),(756,'尤八三',25,'男',1917,59),(757,'沈八一',29,'男',1913,60),(758,'赵十六',24,'男',1913,89),(759,'章十六',30,'女',1913,65),(760,'郑四七',19,'女',1917,73),(761,'王五三',18,'男',1915,96),(762,'许八一',22,'女',1920,47),(763,'王九五',30,'男',1919,83),(764,'冯六五',21,'女',1912,82),(765,'楚十五',21,'女',1912,75),(766,'周九六',26,'男',1910,55),(767,'李一八',19,'男',1918,73),(768,'楚八二',27,'男',1912,94),(769,'钱六一',19,'女',1916,44),(770,'王四五',28,'女',1913,44),(771,'郑八三',28,'女',1917,64),(772,'陈七一',24,'男',1920,90),(773,'杨四八',27,'女',1918,82),(774,'何九六',25,'女',1918,41),(775,'章六七',30,'女',1919,61),(776,'朱五七',30,'男',1910,78),(777,'郑六十',29,'男',1919,53),(778,'章三五',21,'男',1919,100),(779,'赵六十',30,'女',1918,95),(780,'周二三',21,'女',1920,100),(781,'陈三五',26,'女',1912,97),(782,'王一九',24,'女',1916,63),(783,'杨六八',27,'男',1918,45),(784,'郑九五',30,'女',1914,41),(785,'李七四',27,'女',1917,77),(786,'赵五三',27,'男',1916,46),(787,'朱六九',27,'女',1914,67),(788,'吕五四',18,'女',1916,65),(789,'章八六',20,'女',1917,72),(790,'尤十五',27,'女',1919,75),(791,'楚四一',28,'女',1920,40),(792,'楚二八',18,'男',1914,59),(793,'施一三',28,'女',1911,70),(794,'琴五一',26,'男',1920,82),(795,'杨十二',22,'男',1919,58),(796,'何七七',18,'女',1911,62),(797,'沈四四',26,'女',1915,86),(798,'将六九',22,'女',1919,92),(799,'韩一十',21,'男',1914,62),(800,'魏五八',23,'男',1915,85),(801,'施一一',23,'女',1916,46),(802,'冯三三',19,'女',1911,100),(803,'孙十二',18,'男',1913,83),(804,'吴三四',23,'女',1918,46),(805,'魏一二',21,'女',1919,91),(806,'许二三',27,'男',1918,69),(807,'陈二六',24,'女',1916,63),(808,'沈二九',23,'女',1918,75),(809,'王九十',28,'男',1912,84),(810,'孙四一',24,'女',1913,54),(811,'郑九二',18,'女',1910,96),(812,'冯三七',24,'男',1918,92),(813,'章三三',20,'男',1911,42),(814,'何二八',20,'男',1919,81),(815,'钱八四',26,'女',1917,61),(816,'章六三',19,'女',1916,44),(817,'楚八三',20,'男',1913,75),(818,'吴八八',30,'男',1919,83),(819,'魏十三',26,'男',1912,51),(820,'陈十九',23,'男',1914,93),(821,'吴二九',29,'男',1914,77),(822,'吕八九',28,'女',1913,84),(823,'许一四',18,'女',1919,69),(824,'赵八二',30,'女',1911,67),(825,'楚十二',29,'男',1911,96),(826,'赵十五',28,'女',1919,78),(827,'吕四八',19,'女',1912,86),(828,'朱七三',26,'女',1919,66),(829,'沈一二',23,'男',1910,89),(830,'吴一六',29,'女',1915,91),(831,'施五十',28,'女',1915,43),(832,'何一九',18,'女',1916,100),(833,'杨九十',19,'男',1920,41),(834,'琴一五',22,'女',1918,56),(835,'尤五十',26,'女',1913,94),(836,'楚七一',20,'女',1915,86),(837,'周二五',19,'女',1913,92),(838,'孙五三',28,'男',1917,59),(839,'朱二四',23,'女',1918,58),(840,'许八六',27,'男',1914,95),(841,'郑五九',18,'男',1920,46),(842,'沈三二',26,'女',1917,93),(843,'楚五二',24,'女',1916,90),(844,'何二五',24,'男',1915,46),(845,'陈八十',20,'男',1914,41),(846,'琴二二',26,'男',1920,62),(847,'王三九',29,'女',1920,69),(848,'钱一五',20,'女',1917,69),(849,'韩三一',18,'女',1914,66),(850,'许十七',19,'女',1920,81),(851,'孙七五',30,'女',1914,89),(852,'郑四八',27,'男',1910,84),(853,'陈十一',29,'女',1915,74),(854,'陈四五',27,'女',1917,54),(855,'钱三六',25,'男',1912,91),(856,'施三十',26,'男',1916,98),(857,'许四十',22,'男',1916,54),(858,'朱四二',29,'男',1917,98),(859,'章三三',21,'女',1910,46),(860,'吕六三',19,'男',1916,93),(861,'楚二八',25,'女',1910,84),(862,'冯五六',22,'女',1910,53),(863,'李三九',28,'男',1920,78),(864,'杨六三',24,'女',1916,76),(865,'吴十八',19,'男',1917,88),(866,'魏七一',22,'女',1913,97),(867,'冯五七',26,'男',1917,98),(868,'章一二',30,'男',1911,87),(869,'尤七六',22,'男',1911,85),(870,'许六七',27,'女',1914,71),(871,'何五一',26,'男',1913,45),(872,'陈三六',29,'女',1919,77),(873,'孙六六',27,'女',1910,61),(874,'楚二六',26,'女',1920,93),(875,'魏六一',22,'男',1916,76),(876,'尤十七',23,'女',1910,84),(877,'朱六六',24,'男',1910,94),(878,'赵十九',18,'女',1920,65),(879,'楚三二',24,'男',1916,70),(880,'将六一',18,'男',1916,57),(881,'杨二八',22,'男',1919,48),(882,'尤一九',19,'女',1919,41),(883,'韩八六',26,'男',1910,58),(884,'将七一',29,'男',1917,97),(885,'陈二一',22,'女',1910,64),(886,'郑十六',25,'男',1919,48),(887,'李八七',25,'男',1920,44),(888,'吴七二',21,'女',1910,92),(889,'孙一七',20,'女',1914,66),(890,'琴七三',29,'女',1914,79),(891,'施五六',27,'男',1912,59),(892,'将四六',23,'男',1910,81),(893,'周八四',18,'男',1913,72),(894,'许八十',26,'女',1915,98),(895,'吴四七',19,'男',1918,44),(896,'尤十一',29,'女',1915,74),(897,'琴六四',25,'女',1919,68),(898,'杨二一',21,'女',1917,99),(899,'尤八二',30,'男',1914,93),(900,'施三六',24,'男',1916,51),(901,'郑五六',30,'女',1912,71),(902,'何六四',24,'女',1910,46),(903,'吕二六',22,'女',1912,86),(904,'陈六九',30,'男',1912,81),(905,'许十二',27,'女',1915,69),(906,'杨九四',25,'女',1910,55),(907,'陈九八',25,'男',1920,55),(908,'钱七二',20,'男',1915,84),(909,'吕八一',20,'女',1910,78),(910,'朱七十',21,'女',1918,91),(911,'魏六五',24,'男',1916,63),(912,'冯九一',28,'男',1914,67),(913,'沈四四',30,'女',1917,85),(914,'孙一六',30,'女',1917,86),(915,'章三六',26,'男',1920,81),(916,'周八七',29,'女',1910,72),(917,'王七一',19,'女',1919,46),(918,'将四一',22,'男',1920,65),(919,'李七七',30,'女',1911,50),(920,'吕十八',28,'男',1913,47),(921,'吴二二',23,'女',1915,70),(922,'李九八',27,'男',1920,83),(923,'尤十八',26,'男',1918,64),(924,'魏十四',26,'女',1915,92),(925,'许六八',30,'男',1910,52),(926,'杨九八',29,'女',1918,44),(927,'周九四',28,'男',1920,64),(928,'王二二',18,'男',1912,96),(929,'钱五九',23,'女',1913,100),(930,'李六四',19,'男',1920,63),(931,'孙四七',27,'女',1915,81),(932,'郑四四',30,'男',1920,99),(933,'韩八五',29,'男',1919,49),(934,'郑五五',19,'女',1915,43),(935,'何三十',22,'男',1915,58),(936,'尤八七',29,'男',1914,48),(937,'冯七七',19,'女',1914,69),(938,'郑五六',22,'女',1910,40),(939,'李七五',19,'男',1916,87),(940,'琴三一',29,'男',1919,45),(941,'施三四',21,'女',1914,54),(942,'朱三五',23,'女',1915,79),(943,'冯三六',29,'男',1920,48),(944,'沈十四',24,'男',1910,100),(945,'王十九',30,'女',1919,52),(946,'尤九六',26,'女',1914,92),(947,'吴一四',19,'男',1912,96),(948,'周九七',27,'男',1913,70),(949,'孙六九',21,'女',1911,81),(950,'李七九',29,'女',1919,43),(951,'赵十五',26,'女',1916,49),(952,'章一七',20,'女',1915,85),(953,'吴六七',30,'女',1910,66),(954,'施九七',23,'女',1914,49),(955,'将十八',30,'男',1916,62),(956,'许五五',28,'男',1917,65),(957,'郑九一',20,'女',1911,85),(958,'何九十',30,'女',1920,74),(959,'赵八十',29,'女',1916,76),(960,'周三七',19,'男',1919,80),(961,'王八三',25,'男',1912,64),(962,'赵九一',27,'男',1911,50),(963,'王五九',28,'男',1910,62),(964,'施四六',21,'女',1912,47),(965,'许四二',21,'女',1918,81),(966,'孙二十',26,'男',1920,64),(967,'杨八三',28,'女',1912,83),(968,'将九八',26,'男',1915,98),(969,'许九一',30,'男',1916,61),(970,'吴十一',30,'男',1920,48),(971,'许八十',19,'男',1917,50),(972,'尤七四',23,'女',1910,91),(973,'何三六',27,'男',1912,84),(974,'孙八三',23,'女',1911,89),(975,'李三六',26,'女',1918,87),(976,'李一一',18,'男',1917,95),(977,'章十二',21,'女',1914,73),(978,'何六十',21,'女',1910,59),(979,'冯四二',29,'男',1920,42),(980,'沈八一',24,'女',1915,91),(981,'琴九六',28,'男',1918,48),(982,'李九一',23,'男',1917,44),(983,'琴七二',27,'男',1914,40),(984,'陈一十',23,'女',1915,86),(985,'孙五十',30,'男',1920,55),(986,'孙八九',30,'男',1917,99),(987,'孙三八',25,'男',1920,52),(988,'沈九十',27,'男',1919,61),(989,'杨五二',28,'女',1916,50),(990,'楚八五',29,'女',1920,65),(991,'琴十四',21,'女',1915,80),(992,'楚三六',19,'女',1914,86),(993,'陈五六',19,'女',1915,81),(994,'郑十二',21,'男',1911,60),(995,'冯九一',22,'男',1920,96),(996,'赵二二',24,'女',1913,79),(997,'吕三九',30,'女',1910,44),(998,'郑八九',19,'男',1912,46),(999,'王六四',25,'女',1912,40),(1000,'韩八三',22,'男',1915,49),(1001,'李四三',19,'女',1912,46),(1002,'韩四一',24,'女',1917,79),(1003,'冯四三',23,'男',1912,67),(1004,'周十一',28,'男',1911,98),(1005,'朱六七',25,'女',1913,45),(1006,'吕一六',21,'女',1916,62),(1007,'尤八五',28,'男',1919,57),(1008,'孙十二',23,'男',1910,52),(1009,'将四四',18,'女',1914,87),(1010,'王一八',28,'男',1915,50),(1011,'冯十八',19,'女',1920,41),(1012,'王六九',19,'男',1916,73),(1013,'郑六一',27,'男',1917,68),(1014,'将十六',27,'男',1914,68),(1015,'冯七八',20,'男',1917,84),(1016,'周十七',24,'男',1914,49),(1017,'何七一',21,'女',1912,97),(1018,'朱六六',23,'男',1919,50),(1019,'沈十六',25,'女',1916,95),(1020,'杨一八',26,'女',1919,80),(1021,'吕五二',29,'男',1914,68),(1022,'楚六四',26,'女',1919,80),(1023,'王六七',19,'男',1919,77),(1024,'孙二九',30,'男',1918,55);
