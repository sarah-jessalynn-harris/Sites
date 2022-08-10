<?php

/*Author: Sarah Harris
 * Date: 04/09/2019
 * Name: contact_view.class.php
 * Description: View class for displaying the contact page
 */

class ContactView extends IndexView {
    
    public function display() {
                     
                     
            //display the header
            parent::displayHeader("Contact");
            
           
?>

<!-- Contact Page -->
<div class="contact">

    <div class="imageHeader"></div>

    <div class="contents">

        <h1> Get In Touch, and Come Visit Us!</h1>


        <p>HHexagon Animal Shelter is always eager to hear from you! Talk to us by phone, email, or in person provided the information below. Feel free to come by any time that we are open, no appointment necessary! We simply use appointments for those who are seriously considering adopting a certain resident in our facility. We are always glad to show you around the facility, and allow you to meet many of our guests if you're unsure of who you might want to take home! We also are always happy to have volunteers or employees join our team, so give us a call, email, or come in and talk to us about those positions.</p>  

        <h1>We can't wait to hear from you!</h1>

        <div class="contactUs">

            <img src="<?= BASE_URL?>/www/img/misc/kittens.jpg" alt="kitten">

            <div class="contactInfo">


                <h2> Hexagon Animal Shelter</h2>

                <p>123 Interstate 65 South</p>

                <p> Hexington, Indiana 46266</p>

                <h2 class="pTwo"> Open Mon - Fri: 8AM - 5PM </h2>

                <p>123-234-4567</p>

                <p> info@hexagonanimals.com</p>

            </div>

            <img src="<?= BASE_URL?>/www/img/misc/moredog.jpg" alt="dog">
        
        </div>

    </div>

</div>

<?php 
 
    //display the footer
    parent::displayFooter();

    } //end of Display method
} //end of ContactView class
?>