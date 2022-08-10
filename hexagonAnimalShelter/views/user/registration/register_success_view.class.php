<?php

/*Author: Sarah Harris
 * Date: 04/08/2019
 * Name: register_success.class.php
 * Description: View class for displaying after a user succecssfully creates an account
 */

class RegisterSuccess extends IndexView {
    
    public function display($id) {
                     
                     
            //display the header
            parent::displayHeader("Registry Success!");
            
           
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
                <p class="heading"> Check your profile to see all your information. </p>

            </div>

            <div class="appointment">

                <button class="appointmentButton" onclick="window.location.href='<?= BASE_URL?>/index.php/user/detail/<?= $id ?>'"> View Your Profile </button>

            </div>

        </div>

  <?php 
 
      //display the footer
      parent::displayFooter();
  
    } //end of Display method
} //end of RegisterSuccess class
  ?>