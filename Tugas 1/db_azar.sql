-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2022 at 02:00 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_azar`
--

-- --------------------------------------------------------

--
-- Table structure for table `matakuliah`
--

CREATE TABLE `matakuliah` (
  `id_matkul` int(11) NOT NULL,
  `nama_matkul` varchar(255) NOT NULL,
  `semester` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `matakuliah`
--

INSERT INTO `matakuliah` (`id_matkul`, `nama_matkul`, `semester`) VALUES
(1, 'Desain dan Pemrograman Web', 4),
(2, 'Logika Informatika', 1),
(3, 'Jaringan Komputer', 3),
(4, 'Data Mining dan Data Warehouse', 3);

-- --------------------------------------------------------

--
-- Table structure for table `tugas`
--

CREATE TABLE `tugas` (
  `id_tugas` int(11) NOT NULL,
  `id_matkul` int(11) NOT NULL,
  `judul_tugas` varchar(255) NOT NULL,
  `status_tugas` varchar(255) NOT NULL,
  `deskripsi_tugas` varchar(255) NOT NULL,
  `link_tugas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tugas`
--

INSERT INTO `tugas` (`id_tugas`, `id_matkul`, `judul_tugas`, `status_tugas`, `deskripsi_tugas`, `link_tugas`) VALUES
(1, 4, 'Analisis Teknik Klasifikasi Data Menggunakan Algoritma Bagging (Ensemble \r\nLearning) Untuk Peramalan Cuaca ', 'Tugas Besar (Selesai)', 'Membuat aplikasi prakiraan cuaca menggunakan beberapa algoritma dan ', 'https://github.com/sekarmk03/weather-forecasting-bagging-classifier'),
(2, 3, 'PERANCANGAN JARINGAN PADA KANTOR CABANG BANK DAN\r\nKANTOR PUSAT BANK DIKI DI DAERAH JAKARTA', 'Tugas Besar (Selesai)', 'Membuat rancangan jaringan di cisco packet tracer ', '-'),
(3, 2, 'Aplikasi Algoritma dan Bilangan Bulat', 'Tugas Besar (Selesai)', 'Berisi mengenai program tugas yang didalamnya terdapat perhitungan menggunakan algoritma euclidean, aritmatika modulo, kriptografi caesar cipher, dan kriptografi subtitution cipher', 'https://github.com/azarnuzy/Logika-Informatika-Simple-App'),
(4, 4, 'Repository History Belajar Data Mining', 'Selesai', 'Berisi mengenai codingan selama belajar data mining', 'https://github.com/azarnuzy/Basic-Data-Mining');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `matakuliah`
--
ALTER TABLE `matakuliah`
  ADD PRIMARY KEY (`id_matkul`);

--
-- Indexes for table `tugas`
--
ALTER TABLE `tugas`
  ADD PRIMARY KEY (`id_tugas`),
  ADD KEY `id_matkul` (`id_matkul`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `matakuliah`
--
ALTER TABLE `matakuliah`
  MODIFY `id_matkul` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tugas`
--
ALTER TABLE `tugas`
  MODIFY `id_tugas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tugas`
--
ALTER TABLE `tugas`
  ADD CONSTRAINT `tugas_ibfk_1` FOREIGN KEY (`id_matkul`) REFERENCES `matakuliah` (`id_matkul`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
