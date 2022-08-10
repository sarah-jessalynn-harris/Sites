<?php

/*Author: Sarah Harris
 * Date: 04/09/2019
 * Name: home_view.class.php
 * Description: View class for displaying the home page
 */

class HomeView extends IndexView {
    
    public function display() {
                     
                     
            //display the header
            parent::displayHeader("Home");
            
           
?>

<!-- Home Page -->
<div class="home">

    <div class="imageHeader"></div>

    <div class="contents">

        <img src="<?= BASE_URL?>/www/img/misc/logo.png" alt="Hexagon Animal Shelter logo">

        <h1> Hello from all of us at Hexagon Animal Shelter!</h1>


        <p>Hexagon Animal Shelter is home to twenty furry guests, and counting! We are doing our best to see that all of these fuzzy friends make it to their forever home. To help with this process, we bring to you this site, where you can see all of our current residents and schedule an appointment to meet any one of them (and then hopefully adopt him or her!) Create your account today to keep track of appointments. You can also visit our about page to learn more about what Hexagon Animal Shelter does in detail. Feel free to contact us for more information by going to our contact page.</p>  

        <h1> We hope to see you soon!</h1>

    </div>

</div>

<?php 
 
    //display the footer
    parent::displayFooter();

    } //end of Display method
} //end of HomeView class
?>