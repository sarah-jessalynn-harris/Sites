-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2019 at 07:29 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `animals`
--

-- --------------------------------------------------------

--
-- Table structure for table `animals`
--

CREATE TABLE `animals` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `type` varchar(3) NOT NULL,
  `breed` varchar(60) NOT NULL,
  `sex` varchar(1) NOT NULL,
  `age` int(11) NOT NULL,
  `fee` int(11) NOT NULL,
  `image` varchar(60) NOT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `animals`
--

INSERT INTO `animals` (`id`, `name`, `type`, `breed`, `sex`, `age`, `fee`, `image`, `description`) VALUES
(1, 'Blue', 'Dog', 'Chocolate Lab', 'M', 15, 15, 'blue.jpg', 'Friendly old dog, not very energetic, but loyal.'),
(2, 'Fred', 'Dog', 'Chocolate Lab', 'M', 20, 15, 'fred.jpg', 'Very friendly, but aging. Good with kids and loves being with others.'),
(3, 'Jojo', 'Dog', 'Blue Heeler', 'F', 4, 30, 'jojo.jpg', 'Very energetic and friendly.'),
(4, 'Gabby', 'Dog', 'Blue Heeler', 'F', 3, 35, 'gabby.jpg', 'Somewhat energetic and shy.'),
(5, 'Dakota', 'Dog', 'Australian Shephard', 'F', 10, 40, 'dakota.jpg', 'Very energetic and friendly. Protective of trusted people.'),
(6, 'Jack', 'Dog', 'Boston Terroir', 'M', 3, 30, 'jack.jpg', 'Very hyperactive, but tires easily. Does not like being away from trusted people.'),
(7, 'Truman', 'Dog', 'Golden Retriever Doxin Mix', 'M', 5, 20, 'truman.jpg', 'Needs a lot of attention, but overall not too energetic. Friendly, but mischievous.'),
(8, 'Scooter', 'Dog', 'Australian Shephard Blue Heeler Mix', 'M', 4, 30, 'scooter.jpg', 'Very well behaved. Possibly trained to be a service animal in the past. Very sweet, but energetic at times. Great dog for families.\r\n'),
(9, 'Whiskers', 'Cat', 'Calico', 'M', 6, 20, 'whiskers.jpg', 'Friendly cat who loves to play.'),
(10, 'Lara', 'Cat', 'Siamese', 'F', 8, 15, 'lara.jpg', 'Older cat that doesn’t need much attention.'),
(11, 'Peaches', 'Cat', 'Siberian', 'F', 2, 40, 'peaches.jpg', 'Playful kitten who loves kids!'),
(12, 'Pan', 'Cat', 'American Shorthair', 'M', 1, 30, 'pan.jpg', 'This kitten is very energetic and playful. Very sweet and good with children.'),
(13, 'Benny', 'Cat', 'Bengal', 'M', 9, 15, 'benny.jpg', 'This cat is older and is not advised for homes with kids.'),
(14, 'Mana', 'Cat', 'Egyptian Mau', 'F', 5, 30, 'mana.jpg', 'Shy, reserved cat with normal energy levels. Perfect for owners who are busy.'),
(15, 'Fluffy', 'Cat', 'Ragdoll', 'F', 4, 35, 'fluffy.jpeg', 'Younger, energetic cat. Great for family homes.'),
(16, 'Kyle', 'Cat', 'Manx', 'M', 12, 15, 'kyle.png', 'Mischievous old cat. Very fun to play with.'),
(17, 'Rachel', 'Cat', 'Ocicat', 'F', 1, 25, 'rachel.jpg', 'Kitten who is feisty.'),
(18, 'Kitty', 'Cat', 'Calico', 'F', 1, 30, 'gwen.jpg', 'Kitten who is sweet.'),
(19, 'Dorothy', 'Cat', 'Havana', 'F', 2, 20, 'dorothy.jpg', 'Kitten with an attitude. Very fun personality.');

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `animal_id` int(30) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `animal_id`, `user_id`, `date`, `time`) VALUES
(1, 3, 1, '2019-05-06', '12:00'),
(2, 5, 4, '2019-05-22', '14:00'),
(3, 10, 2, '2019-05-29', '15:00'),
(4, 12, 1, '2019-05-29', '15:00'),
(5, 5, 1, '2019-04-10', '13:50'),
(6, 2, 1, '2019-04-21', '14:30'),
(7, 3, 4, '2019-04-26', '13:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `firstname` varchar(25) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(60) NOT NULL,
  `phone` varchar(7) NOT NULL,
  `birthday` date NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `firstname`, `lastname`, `email`, `phone`, `birthday`, `admin`) VALUES
(1, 'sh39', 'Sh39', 'Sarah', 'Harris', 'sh39@mail.com', '1231232', '1999-04-02', 1),
(2, 'giovonniT', 'Gt789', 'Giovonni', 'Taylor', 'gt@mail.com', '3213213', '1997-09-07', 1),
(3, 'ranChang', 'Php123', 'Ran', 'Chang', 'rc@mail.com', '7897890', '1979-09-02', 1),
(4, 'tubaGuy2', '123Tuba', 'Jacob', 'Kopis', 'jk@mail.com', '4564567', '1999-12-19', 0),
(5, 'mom123', 'mom123', 'Tiffany', 'Bailey', 'mom@yahoo.com', '1234567', '1977-06-27', 0),
(8, 'scot', 'scot', 'Scot', 'Bailey', 'sbailey@yahoo.com.sg', '1234569', '1977-10-14', 0),
(9, 'phpuser', 'phpuser', 'Mary', 'Kayn', 'mk@mail.com', '1234567', '1989-04-18', 0),
(10, 'JJ', 'jj', 'Janie', 'Johnstone', 'jj@emails.com', '1234506', '1991-12-13', 0),
(11, 'popdrana', 'asdfgh', 'Pop', 'Drana', 'popdrana@mail.co.uk', '0183745', '1983-10-17', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `animals`
--
ALTER TABLE `animals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `animals`
--
ALTER TABLE `animals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
