<?php

/*Author: Sarah Harris
 * Date: 04/08/2019
 * Name: user_profile_view.class.php
 * Description: View class for displaying a user profile
 */

class userProfileView extends IndexView {
    
    public function display($user) {
                     
        //user details
        $id = $user->getId();
        $username = $user->getUsername();
        $firstname = $user->getFirstname();
        $lastname  = $user->getLastname();
        $email = $user->getEmail();
        $phone = $user->getPhone();
        $birthday = $user->getBirthday();
        $admin = $user->getAdmin();
        
                     
            //display the header
            parent::displayHeader("User Profile");
            
           
?>

<!-- User Profile -->
<div class="userProfile">

    <div class="userData">

        <h2> Your Hexagon Profile</h2>
        
        <div class="userInfo">
            <p><span class="heading">First Name: </span> <?= $firstname ?></p>

            <p><span class="heading">Last Name: </span> <?= $lastname?></p>

            <p><span class="heading">Username: </span> <?= $username?></p>

            <p><span class="heading">Email: </span> <?= $email ?></p>

            <p><span class="heading">Phone Number: </span> <?= $phone ?></p>

            <p><span class="heading">Birthdate: </span> <?= $birthday?></p>

        </div>

        <div class="userButtons">
            
             <button onclick="window.location.href='<?= BASE_URL?>/index.php/user/logOut'"> Log Out</button>

            <button onclick="window.location.href='<?= BASE_URL?>/index.php/appointment/indexYour/<?= $id?>'"> Appointments</button>

            <button onclick="window.location.href='<?= BASE_URL?>/index.php/user/edit/<?= $id?>'"> Edit Profile</button>

            <button onclick="window.location.href='<?= BASE_URL?>/index.php/user/delete/<?= $id?>'"> Delete Profile </button>

            <button style="display : <?= ($_SESSION['role'] == 1) ? 'block' : 'none' ?>"  onclick="window.location.href='<?= BASE_URL?>/index.php/user/admin'"> Admin Panel </button>

        </div>

    </div>

</div>

<?php 
 
 //display the footer
 parent::displayFooter();

    } //end of Display method
} //end of userProfileView class
?>