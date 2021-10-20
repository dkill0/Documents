-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 11-10-2021 a las 14:06:04
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
-- Base de datos: `videoclub`
--
CREATE DATABASE IF NOT EXISTS `videoclub` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `videoclub`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
  `idComentario` int(15) NOT NULL AUTO_INCREMENT,
  `comComentario` text NOT NULL,
  `valorComentario` int(1) NOT NULL,
  `fechaComentario` date NOT NULL,
  `idUsuario` int(10) NOT NULL,
  `idVideo` int(10) NOT NULL,
  PRIMARY KEY (`idComentario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `episodios`
--

DROP TABLE IF EXISTS `episodios`;
CREATE TABLE IF NOT EXISTS `episodios` (
  `idEpisodio` int(20) NOT NULL AUTO_INCREMENT,
  `nomEpisodio` varchar(100) NOT NULL,
  `CapEpisodio` int(5) NOT NULL,
  `TemEpisodio` int(5) NOT NULL,
  `idVideo` int(20) NOT NULL,
  `idSerie` int(10) NOT NULL,
  PRIMARY KEY (`idEpisodio`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `episodios`
--

INSERT INTO `episodios` (`idEpisodio`, `nomEpisodio`, `CapEpisodio`, `TemEpisodio`, `idVideo`, `idSerie`) VALUES
(3, 'Video Promocional de Perdidos', 1, 1, 1, 1),
(4, 'Tomas falsas de Perdidos', 2, 1, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingresos`
--

DROP TABLE IF EXISTS `ingresos`;
CREATE TABLE IF NOT EXISTS `ingresos` (
  `idIngreso` int(15) NOT NULL AUTO_INCREMENT,
  `cantidadIngreso` int(9) NOT NULL,
  `tipoIngreso` int(1) NOT NULL,
  `fechaIngreso` date NOT NULL,
  `idUsuario` int(10) NOT NULL,
  PRIMARY KEY (`idIngreso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

DROP TABLE IF EXISTS `pagos`;
CREATE TABLE IF NOT EXISTS `pagos` (
  `idPago` int(15) NOT NULL,
  `idPedido` int(15) NOT NULL,
  `idUsuario` int(10) NOT NULL,
  UNIQUE KEY `idPago` (`idPago`,`idPedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `idPedido` varchar(15) NOT NULL,
  `costePedido` varchar(6) NOT NULL,
  `fechaPedido` date NOT NULL,
  `tipoPedido` varchar(1) NOT NULL,
  `idVideo` varchar(10) NOT NULL,
  `idUsuario` varchar(10) NOT NULL,
  PRIMARY KEY (`idPedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

DROP TABLE IF EXISTS `peliculas`;
CREATE TABLE IF NOT EXISTS `peliculas` (
  `idPelicula` int(10) NOT NULL AUTO_INCREMENT,
  `nomPelicula` varchar(100) NOT NULL,
  `fichaPelicula` text NOT NULL,
  `sinopsisPelicula` text NOT NULL,
  `idVideo` int(20) NOT NULL,
  PRIMARY KEY (`idPelicula`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`idPelicula`, `nomPelicula`, `fichaPelicula`, `sinopsisPelicula`, `idVideo`) VALUES
(1, 'El SeÃ±or de Los Anillos - El Retorno del Rey', 'El Retorno del Rey', 'Pedazo de peli', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `series`
--

DROP TABLE IF EXISTS `series`;
CREATE TABLE IF NOT EXISTS `series` (
  `idSerie` int(10) NOT NULL AUTO_INCREMENT,
  `nomSerie` varchar(100) NOT NULL,
  `fichaSerie` text NOT NULL,
  `sinopsisSerie` text NOT NULL,
  PRIMARY KEY (`idSerie`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `series`
--

INSERT INTO `series` (`idSerie`, `nomSerie`, `fichaSerie`, `sinopsisSerie`) VALUES
(1, 'Perdidos', 'Ficha de perdidos', 'Serie de misterio'),
(2, 'Aida', 'Ficha de aida', 'Serie de humor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idUsuario` int(10) NOT NULL AUTO_INCREMENT,
  `nomUsuario` varchar(50) NOT NULL,
  `passUsuario` varchar(32) NOT NULL,
  `emailUsuario` varchar(150) NOT NULL,
  `nivelUsuario` varchar(1) NOT NULL,
  `saldoUsuario` int(9) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `emailUsuario` (`emailUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nomUsuario`, `passUsuario`, `emailUsuario`, `nivelUsuario`, `saldoUsuario`) VALUES
(5, 'Tony', 'tony', 'tony@videoclub.es', '1', 0),
(6, 'Alex', 'alex', 'alex@videoclub.es', '1', 0),
(7, 'Jesus', 'jesus', 'jesus@videoclub.es', '1', 0),
(8, 'Niko', 'niko', 'niko@videoclub.es', '1', 0),
(9, 'Carmen', 'carmen', 'carmen@videoclub.es', '1', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videos`
--

DROP TABLE IF EXISTS `videos`;
CREATE TABLE IF NOT EXISTS `videos` (
  `idVideo` int(20) NOT NULL AUTO_INCREMENT,
  `nomVideo` varchar(100) NOT NULL,
  `embedVideo` varchar(200) NOT NULL,
  `fichVideo` varchar(200) NOT NULL,
  PRIMARY KEY (`idVideo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `videos`
--

INSERT INTO `videos` (`idVideo`, `nomVideo`, `embedVideo`, `fichVideo`) VALUES
(1, 'Video Promocional de Perdidos', 'k1QC7PaAc8c', 'k1QC7PaAc8c'),
(2, 'Tomas Falsas de Perdidos', 'WdCCHDeFzEk', 'WdCCHDeFzEk'),
(3, 'El SeÃ±or de Los Anillos - El Retorno del Rey', 'at6AFBgxD2c', 'at6AFBgxD2c');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
