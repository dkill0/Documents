-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 12-11-2021 a las 12:26:02
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
  PRIMARY KEY (`idPedido`,`idProducto`),
  KEY `idProducto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

DROP TABLE IF EXISTS `pedido`;
CREATE TABLE IF NOT EXISTS `pedido` (
  `cliente` int(11) NOT NULL,
  `camarero` int(11) NOT NULL,
  `mesa` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `idPedido` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idPedido`),
  KEY `cliente` (`cliente`,`camarero`,`mesa`),
  KEY `camarero` (`camarero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `idProducto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `precio` double NOT NULL,
  PRIMARY KEY (`idProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombre`, `descripcion`, `precio`) VALUES
(1, 'Lentejas', 'Lentejas ricas', 10),
(2, 'Pipas', 'pipas', 0),
(3, 'Jamon', 'plato jamon con keso', 15),
(4, 'Patatas olivas', 'patatas con olivas', 2),
(5, 'torta de chicharron', 'una torta de chicharron', 3),
(6, 'Caminito', 'Cerveza IPA', 4),
(7, 'Zazu', 'Cerveza Artesana', 4),
(8, 'Costa Azul', 'Cerveza Artesana', 4),
(9, 'Almendras', 'Almendras', 3),
(10, 'Tabla quesos', 'quesos', 8);

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
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUser`, `email`, `nombre`, `contrasena`, `tipo`) VALUES
(1, 'admin', 'carlos', '123', 1),
(2, 'camarero', 'Martin', '123', 2),
(3, 'cliente1', 'Alberto', '123', 3),
(4, 'cliente2@hotmail.com', 'Maria', '123', 3),
(5, 'cliente3@hotmail.com', 'Nuria', '123', 3),
(6, 'camarero2', 'Juani', '123', 2),
(7, 'cliente4', 'Juan', '123', 3),
(9, 'cliente5', 'Pepe', '123', 3),
(10, 'cliente6', 'Ana', '123', 3),
(11, 'cliente7', 'Rocio', '123', 3);

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
