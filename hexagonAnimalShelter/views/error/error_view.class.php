<?php

/*Author: Sarah Harris
 * Date: 04/09/2019
 * Name: error_view.class.php
 * Description: View class for displaying an error
 */

class ErrorView extends IndexView {
    
    public function display($error) {
                     
                     
            //display the header
            parent::displayHeader("Error");
            
           
?>

  <!-- div to show registration success -->
        <div class="animalProfile">

            <div class="title">

                <h1> Error </h1>

            </div>

            <div class="animalPhoto">
            
                <img src="<?= BASE_URL?>/www/img/misc/kitty.jpg" alt="error image of a kitten looking angry">

            </div>

            <div class="info">

                <h3> Looks like that's an error</h3>
                
                <p> Error Code:  <?= $error ?></p>

                <p class="heading"> We're sorry for the inconvenience. Please try again later.</p>

            </div>

            <div class="appointment">

                <button class="appointmentButton" onclick="window.location.href='<?= BASE_URL?>/index.php/static/view_home'"> Return to the Home Page </button>

            </div>

        </div>

  <?php 
 
      //display the footer
      parent::displayFooter();
  
    } //end of Display method
} //end of ErrorView class
  ?>