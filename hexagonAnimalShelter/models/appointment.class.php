<?php

/* Author: Giovonni Taylor
 * Date: 04/01/2019
 * Name: appointment.class.php
 * Description: Defines the 'Appointment' class
 */

class Appointment {
    
    //private data members
    private $id, $animal_id, $user_id, $date, $time;
    
    //the constructor
    public function __construct($id, $animal_id, $user_id, $date, $time) {
        $this->id = $id;
        $this->animal_id = $animal_id;
        $this->user_id = $user_id;
        $this->date = $date;
        $this->time = $time;
    }
    
    //getters
    public function getId() {
        return $this->id;
    }

    public function getAnimal_id() {
        return $this->animal_id;
    }

    public function getUser_id() {
        return $this->user_id;
    }

    public function getDate() {
        return $this->date;
    }

    public function getTime() {
        return $this->time;
    }

        //may or may not need this code
    public function setId($id){
        $this->id = $id;
    }
}
