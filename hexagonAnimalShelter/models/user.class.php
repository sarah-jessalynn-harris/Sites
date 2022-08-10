<?php

/* Author: Giovonni Taylor
 * Date: 04/01/2019
 * Name: user.class.php
 * Description: Defines the 'User' class
 */
class User {
    
    //private data members
    private $id, $username, $password, $firstname, $lastname, $email, $phone, $birthday, $admin;
    
    //the constructor
    public function __construct($id, $username, $password, $firstname, $lastname, $email, $phone, $birthday, $admin) {
        $this->id = $id;
        $this->username = $username;
        $this->password = $password;
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->email = $email;
        $this->phone = $phone;
        $this->birthday = $birthday;
        $this->admin = $admin;
    }
    
    //getters
    public function getId() {
        return $this->id;
    }

    public function getUsername() {
        return $this->username;
    }

    public function getPassword() {
        return $this->password;
    }

    public function getFirstname() {
        return $this->firstname;
    }

    public function getLastname() {
        return $this->lastname;
    }

    public function getEmail() {
        return $this->email;
    }

    public function getPhone() {
        return $this->phone;
    }

    public function getBirthday() {
        return $this->birthday;
    }

    public function getAdmin() {
        return $this->admin;
    }

     //may or may not need this code
    public function setId($id){
        $this->id = $id;
    }
}
