<?php

/*Author: Sarah Harris
 * Date: 04/08/2019
 * Name: login_view.class
 * Description: View class for users to login or register
 */


class UserEditView extends IndexView{
    
        public function display($user) {

                               
        //user details
        $id = $user->getId();
        $username = $user->getUsername();
        $password = $user->getPassword();
        $firstname = $user->getFirstname();
        $lastname  = $user->getLastname();
        $email = $user->getEmail();
        $phone = $user->getPhone();
        $birthday = $user->getBirthday();
        $admin = $user->getAdmin();
        
            //display the header
            parent::displayHeader('Login or Sign Up');

?>

        <!-- login and sign up forms -->
        <div class="login">

            

            <div class="contents">

                <div class="signUp">

                        <p> Edit Your Hexagon Account</p>

                        <form action="<?= BASE_URL ?>/index.php/user/update/<?= $id?>" method="POST">

                            <label for="firstname"> First Name: </label>
        
                            <input type="text" name="firstname" placeholder="Enter Your First Name" required value="<?= $firstname?>">
        
                            <br/>
        
                            <label for="lastname"> Last Name: </label>
        
                            <input type="text" name="lastname" placeholder="Enter Your Last Name" required value="<?= $lastname?>">

                            <br/>

                            <label for="email"> Email: </label>
        
                            <input type="email" name="email" placeholder="Enter Your Email" required value="<?= $email?>">

                            <br/>

                            <label for="username"> Username: </label>
        
                            <input type="text" name="username" placeholder="Enter Your Username" required value="<?= $username?>">
        
                            <br/>

                            <label for="password"> Password: </label>
        
                            <input type="password" name="password" placeholder="Enter Your Password" required value="<?= $password?>">

                            <br/>

                            <label for="phoneNumber"> Phone Number: </label>
        
                            <input type="tel" name="phoneNumber" placeholder="Enter Your Phone Number" required value="<?= $phone ?>">

                            <br/>

                            <label for="dob"> Date of Birth: </label>
        
                            <input type="date" name="dob" required value="<?= $birthday?>">

                            <br/>

                            <p class="disclaimer"> You must be 18+ to register! Only adults are elligible to adopt our animals.</p>

                            <label for="admin"> Administer? : </label>
        
                            <input type="text" name="admin" readonly value="<?= $admin?>">

                            <br/>
                            
                            <input class="signUpButton" type="submit" value="Update Profile">
        
                        </form>

                </div>

            </div>

       </div>

<?php 
            //display the footer
            parent::displayFooter();

        }//end of display function

    } //end of Login View class
?>