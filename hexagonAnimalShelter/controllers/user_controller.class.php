<?php

/* Author: Giovonni Taylor
 * Date: 04/10/2019
 * Name: user_controller.class.php
 * Description: The User controller
 */

class UserController {

    private $user_model;

    //default constructor
    public function __construct() {
        //create an instance of the UserModel class
        $this->user_model = UserModel::getUserModel();
    }
    
    public function loginView() {
        $view = new LoginView();
        $view->display();
    }
    
        //handle an error
    public function error($message) {
        $error = new ErrorView();
        
        $error->display($message);
    }

    public function signIn() {
        $user = $this->user_model->login();
        $data = $this->user_model->view_user($user);
        
        if (!$data) {
             $view = new LoginView();
             $view->display();
             echo '<script> alert("Login Credentials Incorrect. Please Try Again")</script>';
             return;
        }
        
        $view = new userProfileView();
        $view->display($data);
        
    }
    
    public function register() {
        $user = $this->user_model->add_user();
        
        if($user == 'error') {
            //handle errors
            $message = "There was an issue adding the user.";
            
            $view = new ErrorView();
            
            $view->display($message);
            
            return;
        }
        
        $view = new RegisterSuccess();
        $view->display($_SESSION['id']);
    }
    
    public function logout(){
        $this->user_model->logout();
        
        $view = new HomeView();
        $view->display();
    }
    
    //view profile details of user
    public function detail($id) {
        $user = $this->user_model->view_user($id);
        if (!$user) {
            $message = "There was a problem displaying the profile='" . $id . "'";
            $this->error($message);
            return;
        }
        $view = new userProfileView;
        $view->display($user);
    }

    public function edit($id) {
        $user = $this->user_model->view_user($id);

        if (!$user) {
            //display an error
            $message = "There was a problem displaying the userl id='" . $id . "'.";
            $this->error($message);
            return;
        }

        $view = new UserEditView();
                $view->display($user);
    }

    public function update($id) {
        //update the animal
        $update = $this->user_model->update_user($id);
        
        if (!$update) {
            //handle errors
            $message = "There was a problem updating the user id='" . $id . "'.";
            $this->error($message);
            return;
        }

        //display the updated animal details
        $user = $this->user_model->view_user($id);

        $view = new userProfileView();
                $view->display($user);
    }

    //view all (For admins)
    //Assuming getUsers grabs all users from database
    public function viewAll() {
        $users = $this->user_model->getUsers();
        if (!$users) {
            $message = "There was a problem viewing all users.";
            $this->error($message);
            return;
        }

        $view = new userProfilesAdminView();
        $view->display($users);
    }
    
    
    //show admin panel
    public function admin(){
    
        $view= new adminMenuView();
        $view->display();
        
    }
    
          public function delete($id) {
              if ($_SESSION['id'] == $id) {
                  $this->logout();
              }
              
        //add animal to database via model
        $delete = $this->user_model->delete_user($id);
        
        if (!$delete) {
            //handle errors
            $message = "There was an issue deleting the profile.";
            $this->error($message);
            return;
        }
 
        //display the updated animals
       $view = new HomeView();
       $view->display();
    }

}
