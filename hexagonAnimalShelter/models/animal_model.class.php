<?php

/* Author: Giovonni Taylor
 * Date: 04/01/2019
 * Name: animal_model.class.php
 * Description: The model class for Animal objects
 */

class AnimalModel {

    //private data members
    private $db;
    private $dbConnection;
    static private $_instance = NULL;
    private $tblAnimal;

    //To use singleton pattern, this constructor is made private. To get an instance of the class, the getAnimalModel method must be called.
    private function __construct() {
        $this->db = Database::getInstance();
        $this->dbConnection = $this->db->getConnection();
        $this->tblAnimal = $this->db->getAnimalTable();


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
    public static function getAnimalModel() {
        if (self::$_instance == NULL) {
            self::$_instance = new AnimalModel();
        }
        return self::$_instance;
    }

    /*
     * the list_animal method retrieves all animals from the database and
     * returns an array of Animal objects if successful or false if failed.
     */

    public function list_animal() {
        /* construct the sql SELECT statement in this format
         * SELECT ...
         * FROM ...
         * WHERE ...
         */

        $sql = "SELECT * FROM " . $this->tblAnimal;

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
        $animals = array();

    
        //loop through all rows in the returned recordsets
        while ($obj = $query->fetch_object()) {
            $animal = new Animal(stripslashes($obj->id), stripslashes($obj->name), stripslashes($obj->type), stripslashes($obj->breed), stripslashes($obj->sex), stripslashes($obj->age), stripslashes($obj->fee), stripslashes($obj->image), stripslashes($obj->description));
            
            //set the id for the animal
            $animal->setId($obj->id);

            //add the animal into the array
            $animals[] = $animal;
        }
        
        return $animals;
    }

    /*
     * the viewAnimal method retrieves the details of the animal specified by its id
     * and returns a animal object. Return false if failed.
     */

    public function view_animal($id) {
        //the select sql statement
        $sql = "SELECT * FROM " . $this->tblAnimal .
                " WHERE " . $this->tblAnimal . ".id='$id'";

        //execute the query
        $query = $this->dbConnection->query($sql);

        if ($query && $query->num_rows > 0) {
            $obj = $query->fetch_object();

            //create a animal object
            $animal = new Animal(stripslashes($obj->id), stripslashes($obj->name), stripslashes($obj->type), stripslashes($obj->breed), stripslashes($obj->sex), stripslashes($obj->age), stripslashes($obj->fee), stripslashes($obj->image), stripslashes($obj->description));

            //set the id for the animal
            $animal->setId($obj->id);

            return $animal;
        }

        return false;
    }

    public function update_animal($id) {
        //if the script did not received post data, display an error message and then terminite the script immediately
        if (!filter_has_var(INPUT_POST, 'name') ||
                !filter_has_var(INPUT_POST, 'type') ||
                !filter_has_var(INPUT_POST, 'breed') ||
                !filter_has_var(INPUT_POST, 'sex') ||
                !filter_has_var(INPUT_POST, 'age') ||
                !filter_has_var(INPUT_POST, 'fee') ||
                !filter_has_var(INPUT_POST, 'image') ||
                !filter_has_var(INPUT_POST, 'description')) {
            

            return false;
        }

        //retrieve data for the new animal; data are sanitized and escaped for security.
        $name = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING)));
        $type = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'type', FILTER_SANITIZE_STRING)));
        $breed = $this->dbConnection->real_escape_string(filter_input(INPUT_POST, 'breed', FILTER_DEFAULT));
        $sex = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'sex', FILTER_SANITIZE_STRING)));
        $age = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'age', FILTER_SANITIZE_STRING)));
        $fee = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'fee', FILTER_SANITIZE_STRING)));
        $image = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'image', FILTER_SANITIZE_STRING)));
        $description = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'description', FILTER_SANITIZE_STRING)));


        //query string for update 
        $sql = "UPDATE " . $this->tblAnimal .
                " SET name='$name', breed='$breed', type='$type', sex='$sex', "
                . "age='$age', fee='$fee', image='$image', description='$description' WHERE id='$id'";

        //execute the query
        return $this->dbConnection->query($sql);
    }

    //search the database for movies that match words in titles. Return an array of movies if succeed; false otherwise.
    public function search_animal($searchTerms) {
        $terms = explode(" ", $searchTerms); //explode multiple terms into an array
        //select statement for AND serach
        $sql = "SELECT * FROM " . $this->tblAnimal . " WHERE (";

        foreach ($terms as $term) {
            $sql .= " name LIKE '%$term%' OR type LIKE '%$term%' OR breed LIKE '%$term%')";
        }

        //execute the query
        $query = $this->dbConnection->query($sql);

        // the search failed, return false. 
        if (!$query) {
            return false;
        }

        //search succeeded, but no animal was found.
        if ($query->num_rows == 0) {
            return 0;
        }

        //search succeeded, and found at least 1 animal found.
        //create an array to store all the returned animals
        $animals = array();

        //loop through all rows in the returned recordsets
        while ($obj = $query->fetch_object()) {
            $animal = new Animal(stripslashes($obj->id), stripslashes($obj->name), stripslashes($obj->type), stripslashes($obj->breed), stripslashes($obj->sex), stripslashes($obj->age), stripslashes($obj->fee), stripslashes($obj->image), stripslashes($obj->description));

            //set the id for the animal
            $animal->setId($obj->id);

            //add the animal into the array
            $animals[] = $animal;
        }
        //print_r($animals);
        return $animals;
    }
    
    public function add_animal() {
        //if the script did not received post data, display an error message and then terminite the script immediately
        if (!filter_has_var(INPUT_POST, 'name') ||
                !filter_has_var(INPUT_POST, 'type') ||
                !filter_has_var(INPUT_POST, 'breed') ||
                !filter_has_var(INPUT_POST, 'sex') ||
                !filter_has_var(INPUT_POST, 'age') ||
                !filter_has_var(INPUT_POST, 'fee') ||
                !filter_has_var(INPUT_POST, 'image') ||
                !filter_has_var(INPUT_POST, 'description')) {

            return false;
        }

        //retrieve data for the new animal; data are sanitized and escaped for security.
        $name = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING)));
        $type = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'type', FILTER_SANITIZE_STRING)));
        $breed = $this->dbConnection->real_escape_string(filter_input(INPUT_POST, 'breed', FILTER_DEFAULT));
        $sex = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'sex', FILTER_SANITIZE_STRING)));
        $age = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'age', FILTER_SANITIZE_STRING)));
        $fee = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'fee', FILTER_SANITIZE_STRING)));
        $image = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'image', FILTER_SANITIZE_STRING)));
        $description = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'description', FILTER_SANITIZE_STRING)));
        
        $sql = "INSERT INTO $this->tblAnimal VALUES (NULL, '$name', '$type', '$breed', '$sex', '$age', '$fee', '$image', '$description' )";
        
//execute the query
        $query = $this->dbConnection->query($sql);
         
        
        return $query;
        
        
    }
    
        public function delete_animal($id) {
        //if the script did not received id, display an error message and then terminite the script immediately
        if (!$id) {

            return false;
        }
        
        $sql = "DELETE FROM $this->tblAnimal WHERE id = $id";
        
//execute the query
        $query = $this->dbConnection->query($sql);
         
        
        return $query;
        
        
    }
    

}
