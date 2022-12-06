-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Des 2022 pada 14.13
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `praktikum`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `notes`
--

CREATE TABLE `notes` (
  `id_note` int(10) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `isi` varchar(1000) NOT NULL,
  `tag` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `notes`
--

INSERT INTO `notes` (`id_note`, `judul`, `isi`, `tag`) VALUES
(3, 'Belanja baru', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 2),
(6, 'lorem ipum', 'lorem ipum lorem ipum lorem ipum lorem ipum lorem ipum lorem ipum lorem ipum \n\nlorem ipum lorem ipum lorem ipum lorem ipum lorem ipum', 1),
(7, 'coba lkagi', 'lorem ipum lorem ipum lorem ipum lorem ipum lorem ipum \n\nlorem ipum lorem ipum lorem ipum lorem ipum lorem ipum', 1),
(8, 'ini judul', 'kadkksdjkadlsk;ala', 1),
(9, 'daily needs', '*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"', 2),
(10, 'daily needs lagi', '*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"\n\n*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"*ngFor=\"let item of lists\"', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tags`
--

CREATE TABLE `tags` (
  `id_tag` int(10) NOT NULL,
  `nama_tag` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tags`
--

INSERT INTO `tags` (`id_tag`, `nama_tag`) VALUES
(1, 'Kuliah'),
(2, 'Daily');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nama` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`username`, `password`, `nama`) VALUES
('1', 'fc56f6574398180f9621703e92c9c785', 'Faizal Amri');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id_note`);

--
-- Indeks untuk tabel `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id_tag`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `notes`
--
ALTER TABLE `notes`
  MODIFY `id_note` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `tags`
--
ALTER TABLE `tags`
  MODIFY `id_tag` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
