<?php

/*Author: Sarah Harris
 * Date: 04/02/2019
 * Name: animal_appointment_success_view.class
 * Description: View class for displaying the success page after an appointment is scheduled correctly
 */

class AppointmentSuccessView extends IndexView{
    
    public function display() {

        //display header
        parent::displayHeader("Successful Appointment");
        
        $id=$_SESSION['id'];

           
?>

  <!-- div to show registration success -->
        <div class="animalProfile">

            <div class="title">

                <h1> Success! </h1>

            </div>

            <div class="animalPhoto">
            
                <img src="<?= BASE_URL?>/www/img/misc/doggie.jpg" alt="Success Image of a smiling dog">

            </div>

            <div class="info">

                <h3> You have successfully created an account with Hexagon!</h3>
                <p class="heading"> Check your profile to see all your appointments. </p>

            </div>

            <div class="appointment">

                <button class="appointmentButton" onclick="window.location.href='<?= BASE_URL?>/index.php/user/detail/<?= $id ?>'"> View Your Profile </button>

            </div>

        </div>

  <?php 
 
      //display the footer
      parent::displayFooter();
  
    } //end of Display method
}//end of the class    

?>