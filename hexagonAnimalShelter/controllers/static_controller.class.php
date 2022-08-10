<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of static_controller
 *
 * @author Giovonni
 */
class StaticController {
    public function view_home(){
        $view = new HomeView();
        $view->display();
    }
    
    public function view_contact(){
        $view = new ContactView();
        $view->display();
    }
    
    public function view_about(){
        $view = new AboutView();
        $view->display();
    }
}
