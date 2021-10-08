-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 08-10-2021 a las 09:42:24
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
-- Base de datos: `empresa`
--
CREATE DATABASE IF NOT EXISTS `empresa` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;
USE `empresa`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

DROP TABLE IF EXISTS `facturas`;
CREATE TABLE IF NOT EXISTS `facturas` (
  `numero_factura` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha_factura` date NOT NULL,
  `cliente` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `iva` double NOT NULL,
  PRIMARY KEY (`numero_factura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineas_facturas`
--

DROP TABLE IF EXISTS `lineas_facturas`;
CREATE TABLE IF NOT EXISTS `lineas_facturas` (
  `numero_linea` int(11) NOT NULL AUTO_INCREMENT,
  `cantidad` int(11) NOT NULL,
  `producto` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descuento` double NOT NULL,
  `precio_unitario` double NOT NULL,
  `numero_facturas` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`numero_linea`),
  KEY `numero_facturas` (`numero_facturas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `codigo` varchar(6) COLLATE utf8mb4_spanish_ci NOT NULL,
  `producto` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `detalle` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio` double NOT NULL,
  `descuento` double NOT NULL,
  `imagen` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `lineas_facturas`
--
ALTER TABLE `lineas_facturas`
  ADD CONSTRAINT `lineas_facturas_ibfk_1` FOREIGN KEY (`numero_facturas`) REFERENCES `facturas` (`numero_factura`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
