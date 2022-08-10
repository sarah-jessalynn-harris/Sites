<?php

/* Author: Giovonni Taylor
 * Date: 04/03/2019
 * Name: animal_controller.class.php
 * Description: The Animal controller
 */

class AnimalController {
    private $animal_model;

    //default constructor
    public function __construct() {
        //create an instance of the AnimalModel class
        $this->animal_model = AnimalModel::getAnimalModel();
    }

    //index action that displays all animals
    public function index() {
        $animals = $this->animal_model->list_animal();
        
        if(!$animals){
            $message = "There was a problem displaying animals";
            $this->error($message);
            return;
        }
        
        $view = new AnimalView();
        $view->display($animals);
    }
    
    public function create() {
        //show animal form
        $view = new AddAnimal();
        $view->display();
    }
    
    public function add() {
        //add animal to database via model
        $add = $this->animal_model->add_animal();
        
        if (!$add) {
            //handle errors
            $message = "There was an issue adding the animal.";
            $this->error($message);
            return;
        }
 
        //display the updated animals
       $this->index();
    }
    
        public function delete($id) {
        //add animal to database via model
        $delete = $this->animal_model->delete_animal($id);
        
        if (!$delete) {
            //handle errors
            $message = "There was an issue deleting the animal.";
            $this->error($message);
            return;
        }
 
        //display the updated animals
       $this->index();
    }
    
    
    public function edit($id) {
        //retrieve the specific animal
        $animal = $this->animal_model->view_animal($id);
 
        if (!$animal) {
            //display an error
            $message = "There was a problem displaying the animal id='" . $id . "'.";
            $this->error($message);
            return;
        }
 
        $view = new AnimalEdit();
        $view->display($animal);
    }
    //update an animal in the database
    public function update($id) {
        //update the animal
        $update = $this->animal_model->update_animal($id);
        if (!$update) {
            //handle errors
            $message = "There was a problem updating the animal id='" . $id . "'.";
            $this->error($message);
            return;
        }
 
        //display the updated animal details
        $animal = $this->animal_model->view_animal($id);
 
        $view = new AnimalDetails();
        $view->display($animal);
    }

    //show details of an animal
    public function detail($id) {
        $animal = $this->animal_model->view_animal($id);
        if(!$animal){
            $message = "There was a problem displaying the animal id='" . $id . "'.";
            $this->error($message);
            return;
    }
        $view = new AnimalDetails();
        $view->display($animal);
    }

    //handle an error
    public function error($message) {
        $error = new ErrorView();
        
        $error->display($message);
    }
	
    //search animals
    public function search() {
        //retrieve query terms from search form
        $query_terms = trim($_GET['query-terms']);

    
    //if search term is empty, list all animals
        if ($query_terms == "") {
            $animals = $this->animal_model->list_animal();
            $query_terms = "All Animals";
        } else {
            //search the database for matching animals
            $animals = $this->animal_model->search_animal($query_terms);
        }
        
        if ($animals === false) {
            //handle error
            $message = "An error has occurred.";
            $this->error($message);
            return;
        }
        //display matched animals
        $search = new AnimalSearchView();
        $search->display($query_terms, $animals);
    }

    //autosuggestion
    public function suggest($terms) {
        
        //retrieve query terms
        $query_terms = urldecode(trim($terms));
        
        $animals = $this->animal_model->search_animal($query_terms);

        //retrieve all animal names and store them in an array
        $names = array();
        if ($animals) {
            foreach ($animals as $animal) {
                $names[] = $animal->getName();           
            }
        }

        echo json_encode($names);
    }


    //handle calling inaccessible methods
    public function __call($name, $arguments) {
        //$message = "Route does not exist.";
        // Note: value of $name is case sensitive.
        $message = "Calling method '$name' caused errors. Route does not exist.";

        $this->error($message);
        return;
    }

}
