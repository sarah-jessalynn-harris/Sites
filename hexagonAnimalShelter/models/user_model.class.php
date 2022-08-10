<?php

/* Author: Giovonni Taylor
 * Date: 04/01/2019
 * Name: user_model.class.php
 * Description: The model class for User objects
 */

class UserModel {

    private $db;
    private $dbConnection;
    static private $_instance = NULL;
    private $tblUser;

    //To use singleton pattern, this constructor is made private. To get an instance of the class, the getAnimalModel method must be called.
    private function __construct() {
        $this->db = Database::getInstance();
        $this->dbConnection = $this->db->getConnection();
        $this->tblUser = $this->db->getUserTable();


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
    public static function getUserModel() {
        if (self::$_instance == NULL) {
            self::$_instance = new UserModel();
        }
        return self::$_instance;
    }

//    public function add_user($user) {
//        
//        $first_name = $user->getFirstname();
//        $last_name = $user->getLastName();
//        $email= $user->getEmail();
//        $user_name = $user->getUsername();
//        $pass_word = $user->getPassword();
//        $phone_number = $user->getPhone();
//        $birth_date= $user->getBirthday();
//        $admin = 0;
//
//        $sql = "INSERT INTO " . $this->db->getUserTable() . " VALUES(NULL,'$first_name', '$last_name', '$email', '$user_name', '$pass_word', '$phone_number',$birth_date', '$admin')";
//        $conn = $this->dbConnection;
//        if ($conn->query($sql) === TRUE) {
//            echo "New record created successfully";
//        } else {
//              echo "Error: " . $sql . "<br>" . $conn->error;
//            }
//        
//    }

    public function getUsers() {
        /* construct the sql SELECT statement in this format
         * SELECT ...
         * FROM ...
         * WHERE ...
         */

        $sql = "SELECT * FROM " . $this->tblUser;

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
        $users = array();

    
        //loop through all rows in the returned recordsets
        while ($obj = $query->fetch_object()) {
            $user = new User(stripslashes($obj->id), stripslashes($obj->username), stripslashes($obj->password), stripslashes($obj->firstname), stripslashes($obj->lastname), stripslashes($obj->email), stripslashes($obj->phone), stripslashes($obj->birthday), stripslashes($obj->admin));
            
            //set the id for the animal
            $user->setId($obj->id);

            //add the animal into the array
            $users[] = $user;
        }
        
        return $users;
    }    

    public function login() {
        $username = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING)));
        $password = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING)));

        $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
        
        $query =  $this->dbConnection->query($sql);

        if($query->num_rows) {
            $row = $query->fetch_assoc();
        
            if ($row['username'] == $username && $row['password'] == $password) {
                
                $_SESSION['id'] = $row['id'];
                $_SESSION['role'] = $row['admin'];
                $_SESSION['status'] = true;
                
                return $row['id'];

            }
        
        }
      
    }
    
    public function logout() {
       

//delete the session cookie
if ( isset( $_COOKIE[session_name()] ) ) {
    setcookie( session_name(), "", time()-3600, "/" );
}

$_SESSION = array();
        session_destroy();
        session_start();
        $_SESSION['id'] = "";
        $_SESSION['role'] = "";
        $_SESSION['status'] = false;
    }

    public function add_user() {
        //if the script did not received post data, display an error message and then terminite the script immediately
        if (!filter_has_var(INPUT_POST, 'firstname') ||
                !filter_has_var(INPUT_POST, 'lastname') ||
                !filter_has_var(INPUT_POST, 'email') ||
                !filter_has_var(INPUT_POST, 'username') ||
                !filter_has_var(INPUT_POST, 'password') ||
                !filter_has_var(INPUT_POST, 'phoneNumber') ||
                !filter_has_var(INPUT_POST, 'dob')) {

            return false;
        }

        //retrieve data for the new animal; data are sanitized and escaped for security.
        $firstname = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'firstname', FILTER_SANITIZE_STRING)));
        $lastname = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_STRING)));
        $email = $this->dbConnection->real_escape_string(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING));
        $username = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING)));
        $password = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING)));
        $phone = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'phoneNumber', FILTER_SANITIZE_STRING)));
        $dob = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'dob', FILTER_SANITIZE_STRING)));

        $sql = "INSERT INTO $this->tblUser VALUES (NULL, '$username', '$password', '$firstname', '$lastname', '$email',  '$phone', '$dob', '0' )";

        //execute the query
        $query = $this->dbConnection->query($sql);
        
        if (!$query) {
            
            return 'error';
        } else {
            
            $sqli = "SELECT * FROM $this->tblUser WHERE username= '$username' AND password='$password'";
            
            $query = $this->dbConnection->query($sqli);
            
            if ($query->num_rows ){
               
                $row = $query->fetch_assoc();
            
                $id = $row['id'];
                
                $admin = $row['admin'];
            }
                 
                $_SESSION['id'] = $id;
                
                $_SESSION['role'] = $admin;
                
                $_SESSION['status'] = true;
        }
    }
    
    public function view_user($id) {
        //the select sql statement
        $sql = "SELECT * FROM " . $this->tblUser .
                " WHERE " . $this->tblUser . ".id='$id'";

        //execute the query
        $query = $this->dbConnection->query($sql);

        if ($query && $query->num_rows > 0) {
            $obj = $query->fetch_object();

            //create a animal object
            $user = new User(stripslashes($obj->id), stripslashes($obj->username), stripslashes($obj->password), stripslashes($obj->firstname), stripslashes($obj->lastname), stripslashes($obj->email), stripslashes($obj->phone), stripslashes($obj->birthday), stripslashes($obj->admin));

            //set the id for the animal
            $user->setId($obj->id);

            return $user;
        }

        return false;
    }
    
            public function delete_user($id) {
        //if the script did not received id, display an error message and then terminite the script immediately
        if (!$id) {

            return false;
        }
        
        $sql = "DELETE FROM $this->tblUser WHERE id = $id";
        
//execute the query
        $query = $this->dbConnection->query($sql);
         
        
        return $query;
        
        
    }
    
     public function update_user($id) {
       //if the script did not received post data, display an error message and then terminite the script immediately
        if (!filter_has_var(INPUT_POST, 'firstname') ||
                !filter_has_var(INPUT_POST, 'lastname') ||
                !filter_has_var(INPUT_POST, 'email') ||
                !filter_has_var(INPUT_POST, 'username') ||
                !filter_has_var(INPUT_POST, 'password') ||
                !filter_has_var(INPUT_POST, 'phoneNumber') ||
                !filter_has_var(INPUT_POST, 'dob') ||
                !filter_has_var(INPUT_POST, 'admin')){
        

            return false;
        }

        //retrieve data for the new animal; data are sanitized and escaped for security.
        $firstname = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'firstname', FILTER_SANITIZE_STRING)));
        $lastname = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_STRING)));
        $email = $this->dbConnection->real_escape_string(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING));
        $username = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING)));
        $password = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING)));
        $phone = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'phoneNumber', FILTER_SANITIZE_STRING)));
        $dob = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'dob', FILTER_SANITIZE_STRING)));
        $admin = $this->dbConnection->real_escape_string(trim(filter_input(INPUT_POST, 'admin', FILTER_SANITIZE_STRING)));
        
//query string for update 
        $sql = "UPDATE " . $this->tblUser .
                " SET username='$username', password='$password', firstname='$firstname', lastname='$lastname', email='$email',  phone='$phone', birthday='$dob', admin='$admin' WHERE id='$id'";

        //execute the query
        return $this->dbConnection->query($sql);
    }


//    public function new_account() {
//        if (isset($_POST['submit'])) {
//            $firstname = mysqli_real_escape_string($this->dbConnection, $_POST['firstname']);
//            $lastname = mysqli_real_escape_string($this->dbConnection, $_POST['lastname']);
//            $email = mysqli_real_escape_string($this->dbConnection, $_POST['email']);
//            $username = mysqli_real_escape_string($this->dbConnection, $_POST['username']);
//            $password = mysqli_real_escape_string($this->dbConnection, $_POST['password']);
//            $phonenumber = mysqli_real_escape_string($this->dbConnection, $_POST['phoneNumber']);
//            $dob = mysqli_real_escape_string($this->dbConnection, $_POST['dob']);
//
//            $sql = "INSERT INTO $this->tblUser VALUES (NULL, '$username', '$password', '$firstname', '$lastname', '$email', '$phonenumber', '$dob', '0' )";
//
//            //execute the query
//            $query = $this->dbConnection->query($sql);
//                                  
//            return $query;
//        }
//    }
}
