<?php

/* Author: Giovonni Taylor
 * Date: 04/01/2019
 * Name: appointment_model.class.php
 * Description: The model class for Appointment objects
 */

class AppointmentModel {

    //private data members
    private $db;
    private $dbConnection;
    static private $_instance = NULL;
    private $tblAppointment;

    //To use singleton pattern, this constructor is made private. To get an instance of the class, the getAnimalModel method must be called.
    private function __construct() {
        $this->db = Database::getInstance();
        $this->dbConnection = $this->db->getConnection();
        $this->tblAppointment = $this->db->getAppointmentTable();


        //Escapes special characters in a string for use in an SQL statement. This stops SQL inject in POST vars. 
        foreach ($_POST as $key => $value) {
            $_POST[$key] = $this->dbConnection->real_escape_string($value);
        }

        //Escapes special characters in a string for use in an SQL statement. This stops SQL Injection in GET vars 
        foreach ($_GET as $key => $value) {
            $_GET[$key] = $this->dbConnection->real_escape_string($value);
        }
    }

    //static method to ensure there is just one AnimalModel instance
    public static function getAppointmentModel() {
        if (self::$_instance == NULL) {
            self::$_instance = new AppointmentModel();
        }
        return self::$_instance;
    }
    
    public function getAnimalName($animal){
                    $sql = "SELECT * FROM animals WHERE id =". $animal;

        //execute the query
        $query = $this->dbConnection->query($sql);
        
        if($query->num_rows) {
            $row = $query->fetch_assoc();
            
            
            return [$row['name'], $row['image']];
        }
    }
    
        public function getUserName($user){
                    $sql = "SELECT * FROM users WHERE id =". $user;

        //execute the query
        $query = $this->dbConnection->query($sql);
        
        if($query->num_rows) {
            $row = $query->fetch_assoc();
            
            
            return $row['firstname'] . " " . $row['lastname'];
        }
    }

    public function add_appointment() {
        //if the script did not received post data, display an error message and then terminite the script immediately
        if (!filter_has_var(INPUT_POST, 'animal') ||
                !filter_has_var(INPUT_POST, 'date') ||
                !filter_has_var(INPUT_POST, 'time' )) {
            return false;
        }

              
        $user = $_SESSION['id'];
        //retrieve data for the new appointment; data are sanitized and escaped for security.
//        $animal = filter_input(INPUT_POST, 'animal', FILTER_SANITIZE_NUMBER_INT);
//        $date = $_POST['date'];
//        $time = $_POST['time'];
        
        $animal = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'animal', FILTER_SANITIZE_STRING)));
        $date = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'date', FILTER_SANITIZE_STRING)));
        $time = $this->dbConnection->real_escape_string(filter_input(INPUT_POST, 'time', FILTER_SANITIZE_STRING));

    
            $sql = "INSERT INTO $this->tblAppointment VALUES (NULL, '$animal', '$user', '$date', '$time')";

        //execute the query
        $query = $this->dbConnection->query($sql);
        
        return $query;
    }
    
    public function list_appointmet() {
        /* construct the sql SELECT statement in this format
         * SELECT ...
         * FROM ...
         * WHERE ...
         */

        $sql = "SELECT * FROM " . $this->tblAppointment;

        //execute the query
        $query = $this->dbConnection->query($sql);

        // if the query failed, return false. 
        if (!$query) {
            return false;
        }

        //if the query succeeded, but no animal was found.
        if ($query->num_rows == 0) {
            return 0;
        }

        //handle the result
        //create an array to store all returned animals
        $appointmet = array();

    
        //loop through all rows in the returned recordsets
        while ($obj = $query->fetch_object()) {
            $appointmet = new Appointment(stripslashes($obj->id), $this->getAnimalName(stripslashes($obj->animal_id))[0], $this->getUserName(stripslashes($obj->user_id)), stripslashes($obj->date), stripslashes($obj->time));
            
            //set the id for the animal
            $appointmet->setId($obj->id);

            //add the animal into the array
            $appointmets[] = $appointmet;
            
        }
        
        return $appointmets;
    }
    
        public function list_your($id){
        /* construct the sql SELECT statement in this format
         * SELECT ...
         * FROM ...
         * WHERE ...
         */
            

        $sql = "SELECT * FROM $this->tblAppointment WHERE user_id=" . $id;

        //execute the query
        $query = $this->dbConnection->query($sql);

        // if the query failed, return false. 
        if (!$query) {
            echo "this is it";
            return false;
        }

        //if the query succeeded, but no animal was found.
        if ($query->num_rows == 0) {
            return 0;
        }

        //handle the result
        //create an array to store all returned animals
        $appointmet = array();

    
        //loop through all rows in the returned recordsets
        while ($obj = $query->fetch_object()) {
            $appointmet = new Appointment(stripslashes($obj->id), $this->getAnimalName(stripslashes($obj->animal_id))[0], $this->getUserName(stripslashes($obj->user_id)), stripslashes($obj->date), stripslashes($obj->time));
            
            //set the id for the animal
            $appointmet->setId($obj->id);

            //add the animal into the array
            $appointmets[] = $appointmet;
            
        }
        
        return $appointmets;
    }
    
    

}
