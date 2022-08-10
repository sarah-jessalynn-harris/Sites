<?php

/* Author: Giovonni Taylor
 * Date: 04/1/2019
 * Name: appointment_controller.class.php
 * Description: The Appointment controller
 */


class AppointmentController {
    private $appointment_model;
    
    //default constructor
    public function __construct(){
        $this->appointment_model = AppointmentModel::getAppointmentModel();
    }
    public function fill_out($id){
        
        if($_SESSION['id'] == "") {       
            $view = new LoginView();
             $view->display();
            echo '<script> alert("You must be logged in to register an appointment.")</script>';
            return;
        }
        
        $animalName = $this->appointment_model->getAnimalName($id);

        $view = new AppointmentFormView();
        $view->display($id, $animalName[0], $animalName[1]);
    }
    
    public function confirm(){
        $add = $this->appointment_model->add_appointment();

        if (!$add){
            $message = "There was an issue adding the appointment.";
            $this->error($message);

            return;
        }
        
        $view = new AppointmentSuccessView();
        $view->display();
    }
    
        //handle an error
    public function error($message) {
        $error = new ErrorView();
        
        $error->display($message);
    }
    
    public function index(){
        $appointment = $this->appointment_model->list_appointmet();
        
        if(!$appointment){
            $message = "There was a problem displaying appointments.";
            $this->error($message);
            return;
        }
        
        $view = new appointmentsView();
        $view->display($appointment, false);
    }
    
        public function indexYour($id){
        $appointment = $this->appointment_model->list_your($id);
        
        if(!$appointment){
            $message = "There was a problem displaying your appointments.";
            $this->error($message);
            return;
        }
        
        $view = new appointmentsView();
        $view->display($appointment, true);
    }
}
