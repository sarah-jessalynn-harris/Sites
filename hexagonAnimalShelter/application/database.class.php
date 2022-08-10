<?php

/* Author: Giovonni Taylor
 * Date: 04/01/2019
 * Name: database.class.php
 * Description: Connects to the database
 */

class Database {

    //define database parameters
    private $param = array(
        'host' => 'localhost',
        'login' => 'u993789868_sh39', //prev sh39
        'password' => 'Sh39_db2', //prev sh39_db
        'database' => 'u993789868_animals', //animals
        'tblAnimal' => 'animals',
        'tblUser' => 'users',
        'tblAppointment' => 'appointments'
    );
    //define the database connection object
    private $objDBConnection = NULL;
    static private $_instance = NULL;

    //constructor
    public function __construct() {

        $this->objDBConnection = @new mysqli(
                $this->param['host'], $this->param['login'], $this->param['password'], $this->param['database']
        );
        if (mysqli_connect_errno() != 0) {
            echo "Connecting to database failed: " . mysqli_connect_error();
            exit();
        }
    }

    //static method to ensure there is just one Database instance
    static public function getInstance() {
        if (self::$_instance == NULL)
            self::$_instance = new Database();
        return self::$_instance;
    }

    //this function returns the database connection object
    public function getConnection() {
        return $this->objDBConnection;
    }

    //returns the name of the table storing animals
    public function getAnimalTable() {
        return $this->param['tblAnimal'];
    }

    //returns the name of the table storing users
    public function getUserTable() {
        return $this->param['tblUser'];
    }

    //returns the name of the table storing appointments
    public function getAppointmentTable() {
        return $this->param['tblAppointment'];
    }

}
