<?php

/*Author: Sarah Harris
 * Date: 04/09/2019
 * Name: admin_menu_view.class.php
 * Description: View class for displaying a administrator's menu
 */

class adminMenuView extends IndexView {
    
    public function display() {
                     
                     
            //display the header
            parent::displayHeader("Admin Menu");
            
           
?>


<!-- display admin menu -->
<div class="userProfile">

    <div class="userData">

        <h2>What would you like to do today?</h2>

        <div class="userButtons adminButtons">
        
            <button  onclick="window.location.href='<?= BASE_URL?>/index.php/animal/create'">Add Animal</button>

            <button onclick="window.location.href='<?= BASE_URL?>/index.php/animal/index'">Edit Animal</button>

            <button onclick="window.location.href='<?= BASE_URL?>/index.php/animal/index'">Delete Animal</button>

            <button onclick="window.location.href='<?= BASE_URL?>/index.php/user/viewAll'">View Users</button>

            <button onclick="window.location.href='<?= BASE_URL?>/index.php/appointment/index'">Appointments</button>

        </div>

    </div>

</div>

<?php 
 
 //display the footer
 parent::displayFooter();

    } //end of Display method
} //end of adminMenuView class
?>