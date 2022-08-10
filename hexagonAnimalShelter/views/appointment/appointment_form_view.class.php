<?php

/*Author: Sarah Harris
 * Date: 04/01/2019
 * Name: animal_appointment_view.class
 * Description: View class for displaying the form for users to fill in order to schedule an appointment
 */

class AppointmentFormView extends IndexView{
    
    public function display($animal, $animalName, $animalImg) {
        
        
        
            //display the header
            parent::displayHeader("Schedule an Appointment");
?>

        <!-- div to hold the animal appointment form -->
        <div class="appointmentForm">

            <div class="title">

                <h1> Appointment with <?= $animalName?> </h1>

            </div>

            <div class="animalPhoto">
            
                <img src="<?= BASE_URL ?>/www/img/<?= $animalImg?>" alt="Image of <?= $animalName?>">

            </div>
            
            <form action="<?= BASE_URL?>/index.php/appointment/confirm" method="post">

                <div class="info" >

                    <h3> <?= $animalName ?> </h3>
                    <p class="heading"> Animal ID: <input class="input" name="animal" value="<?= $animal ?>" readonly></p>
                    <p class="heading"> Please Enter a Date Monday - Friday</p>
                    <p> <span class="heading"> Date: </span> <input class="input" type="date" name="date" required> </p>
                    <p class="heading"> Please Enter a time 8:00 AM - 5:00 PM</p>
                    <p> <span class="heading"> Time: </span> <input class="input" type="time" name="time" min="08:00" max="17:00" step="600" required> </p>

                </div>

                <div class="appointment">

                    <input type='submit' class="appointmentButton" value="Schedule your appointment with <?= $animalName?>"/>

                </div>
                
            </form>

        </div>

  <?php 
 
      //display the footer
      parent::displayFooter();
  
    } //end of Display method
} //end of AnimalDetails class
  ?>