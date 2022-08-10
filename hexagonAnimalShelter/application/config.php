<?php

/*
 * Author: Giovonni Taylor
 * Date: 04/03/19
 * File: config.php
 * Description: set application settings
 * 
 */

//error reporting level: 0 to turn off all error reporting; E_ALL to report all
error_reporting(E_ALL);

//local time zone
date_default_timezone_set('America/New_York');

//base url of the application
// define("BASE_URL", "https://in-info-web4.informatics.iupui.edu/~sh39/hexagonAnimalShelter");
define("BASE_URL", "https://hexagon-animal-shelter.sjkweb.com");

/*************************************************************************************
 *                       settings for animals                                        *
 ************************************************************************************/

//define default path for media images
define("ANIMAL_IMG", "/www/img/");

//sessions
session_start();
          
if($_SESSION == array()) {                       
           $_SESSION['id'] = "";
           $_SESSION['role'] = "";
           $_SESSION['status'] =false;
}   
        
