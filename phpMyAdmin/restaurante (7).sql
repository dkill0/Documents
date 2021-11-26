-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 26-11-2021 a las 14:27:26
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurante`
--
CREATE DATABASE IF NOT EXISTS `restaurante` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `restaurante`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineapedido`
--

DROP TABLE IF EXISTS `lineapedido`;
CREATE TABLE IF NOT EXISTS `lineapedido` (
  `idPedido` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`idPedido`,`idProducto`,`fecha`),
  KEY `idProducto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `lineapedido`
--

INSERT INTO `lineapedido` (`idPedido`, `idProducto`, `cantidad`, `fecha`) VALUES
(8, 2, 2, '2021-11-19 10:55:41'),
(15, 1, 2, '2021-11-18 13:20:12'),
(15, 3, 2, '2021-11-18 13:24:14'),
(15, 5, 3, '2021-11-18 14:16:36'),
(15, 6, 3, '2021-11-18 13:09:30'),
(15, 6, 3, '2021-11-18 13:11:24'),
(15, 6, 3, '2021-11-18 13:11:49'),
(15, 6, 5, '2021-11-18 13:11:53'),
(15, 6, 4, '2021-11-18 13:12:40'),
(15, 6, 1, '2021-11-18 13:13:51'),
(15, 6, 1, '2021-11-18 13:14:13'),
(15, 6, 7, '2021-11-18 13:16:09'),
(15, 7, 2, '2021-11-18 13:04:28'),
(15, 7, 2, '2021-11-18 13:04:36'),
(15, 7, 3, '2021-11-18 13:13:03'),
(15, 7, 3, '2021-11-18 13:13:35'),
(15, 8, 2, '2021-11-18 00:00:00'),
(15, 8, 2, '2021-11-18 13:04:33'),
(15, 8, 2, '2021-11-18 13:21:58'),
(16, 5, 4, '2021-11-19 11:02:28'),
(16, 9, 4, '2021-11-19 11:02:24'),
(17, 1, 1, '2021-11-19 11:50:18'),
(18, 3, -8, '2021-11-23 10:49:10'),
(18, 5, 3, '2021-11-19 11:56:08'),
(18, 10, 4, '2021-11-23 10:48:46'),
(19, 3, 2, '2021-11-19 14:19:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesas`
--

DROP TABLE IF EXISTS `mesas`;
CREATE TABLE IF NOT EXISTS `mesas` (
  `idMesa` int(11) NOT NULL,
  `localizacion` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `ocupada` tinyint(1) NOT NULL,
  PRIMARY KEY (`idMesa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

DROP TABLE IF EXISTS `pedido`;
CREATE TABLE IF NOT EXISTS `pedido` (
  `cliente` int(11) NOT NULL,
  `camarero` int(11) DEFAULT NULL,
  `mesa` int(11) DEFAULT NULL,
  `fecha` datetime NOT NULL,
  `idPedido` int(11) NOT NULL AUTO_INCREMENT,
  `pagado` tinyint(1) NOT NULL,
  `enviado` tinyint(1) NOT NULL,
  PRIMARY KEY (`idPedido`),
  KEY `cliente` (`cliente`,`camarero`,`mesa`),
  KEY `camarero` (`camarero`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`cliente`, `camarero`, `mesa`, `fecha`, `idPedido`, `pagado`, `enviado`) VALUES
(3, NULL, NULL, '2021-11-16 00:00:00', 8, 1, 1),
(7, NULL, NULL, '2021-11-18 00:00:00', 15, 1, 1),
(3, NULL, NULL, '2021-11-19 11:00:10', 16, 1, 1),
(3, NULL, NULL, '2021-11-19 11:37:31', 17, 1, 1),
(3, NULL, NULL, '2021-11-19 11:53:22', 18, 0, 0),
(7, NULL, NULL, '2021-11-19 14:19:19', 19, 1, 1),
(7, NULL, NULL, '2021-11-22 14:06:07', 20, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `idProducto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(400) COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio` double NOT NULL,
  `tipo` int(1) DEFAULT NULL,
  `imagen` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`idProducto`),
  KEY `tipo` (`tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombre`, `descripcion`, `precio`, `tipo`, `imagen`) VALUES
(1, 'Lentejas', 'Guiso de lentejas con zanahoria y patata.', 10, 6, '/img/lentejas.jpg'),
(2, 'Pipas', 'Cuenco de pipas', 0, 5, '/img/pipas.jpg'),
(3, 'Jamon con queso', 'Plato de jamon de bellon con queso semicurado.', 15, 5, '/img/jamonkeso.jpg'),
(4, 'Patatas con olivas', 'Plato de patatas fritas de bolsa con olivas rellenas de anchoa.', 2, 5, '/img/patatasolivas.jpg'),
(5, 'Torta de chicharron', 'Torta de chicharrones tipica de granada', 3, 7, '/img/tortachicharron.jpg'),
(6, 'Caminito', 'Cerveza IPA', 4, 4, NULL),
(7, 'Zazu', 'Cerveza Artesana', 4, 4, NULL),
(8, 'Costa Azul', 'Cerveza Artesana', 4, 4, NULL),
(9, 'Almendras', 'Cuenco de almendras', 3, 5, '/img/almendras.jpg'),
(10, 'Tabla quesos', 'Tabla de diversos quesos acompañada de tostadas de pan.', 8, 5, '/img/tablaquesos.jpg'),
(11, 'Marinera', 'Mezcla de mayonesa, picadillo de pepinillo y zanahoria encurtidos, atun, patata cocida y huevo duro, con una anchoa encima, sobre una rosquilla.', 1.5, 5, '/img/marinera.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo`
--

DROP TABLE IF EXISTS `tipo`;
CREATE TABLE IF NOT EXISTS `tipo` (
  `idTipo` int(1) NOT NULL,
  `descripcion` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`idTipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipo`
--

INSERT INTO `tipo` (`idTipo`, `descripcion`) VALUES
(1, 'admin'),
(2, 'camarero'),
(3, 'cliente'),
(4, 'bebida'),
(5, 'entrante'),
(6, 'plato'),
(7, 'postre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `contrasena` varchar(8) CHARACTER SET ucs2 COLLATE ucs2_spanish_ci NOT NULL,
  `tipo` int(1) DEFAULT NULL COMMENT '1 equivale a admin\r\n2 equivale a camarero\r\n3 equivale a cliente',
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `email` (`email`),
  KEY `tipo` (`tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUser`, `email`, `nombre`, `contrasena`, `tipo`) VALUES
(1, 'admin', 'carlos', '123', 1),
(2, 'camarero', 'Martin', '123', 2),
(3, 'cliente1', ' daniel', '123', 3),
(4, 'cliente2@hotmail.com', 'Maria', '123', 3),
(5, 'cliente3@hotmail.com', 'Nuria', '123', 3),
(6, 'camarero2', 'Juani', '123', 2),
(7, 'cliente4', 'Juan', '123', 3),
(9, 'cliente5', 'Pepe', '123', 3),
(10, 'cliente6', 'Ana', '123', 3),
(11, 'cliente7', 'Rocio', '123', 3),
(12, 'cliente9', 'Alex', '123', 3);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `lineapedido`
--
ALTER TABLE `lineapedido`
  ADD CONSTRAINT `lineapedido_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lineapedido_ibfk_2` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPedido`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`cliente`) REFERENCES `usuario` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`camarero`) REFERENCES `usuario` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`tipo`) REFERENCES `tipo` (`idTipo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`tipo`) REFERENCES `tipo` (`idTipo`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
