<?php

/* Author: Giovonni Taylor
 * Date: 04/01/2019
 * Name: animal.class.php
 * Description: Defines the 'Animal' class
 */

class Animal {

    //private data members
    private $id, $name, $type, $breed, $sex, $age, $fee, $image, $description;

    //the constructor
    public function __construct($id, $name, $type, $breed, $sex, $age, $fee, $image, $description) {
        $this->id = $id;
        $this->name = $name;
        $this->type = $type;
        $this->breed = $breed;
        $this->sex = $sex;
        $this->age = $age;
        $this->fee = $fee;
        $this->image = $image;
        $this->description = $description;
    }
    
    //getters
    public function getId() {
        return $this->id;
    }

    public function getName() {
        return $this->name;
    }

    public function getType() {
        return $this->type;
    }

    public function getBreed() {
        return $this->breed;
    }

    public function getSex() {
        return $this->sex;
    }

    public function getAge() {
        return $this->age;
    }

    public function getFee() {
        return $this->fee;
    }

    public function getImage() {
        return $this->image;
    }

    public function getDescription() {
        return $this->description;
    }
    
    //set animal id
    public function setId($id){
        $this->id = $id;
    }

}
