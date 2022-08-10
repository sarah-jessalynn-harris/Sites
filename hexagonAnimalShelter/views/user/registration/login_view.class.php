<?php

/*Author: Sarah Harris
 * Date: 04/08/2019
 * Name: login_view.class
 * Description: View class for users to login or register
 */


class LoginView extends IndexView{
    
        public function display() {

            //display the header
            parent::displayHeader('Login or Sign Up');

?>

        <!-- login and sign up forms -->
        <div class="login">

            <div class="headerImage"></div>

            <div class="contents">

                <div class="welcome">

                    <p> Hi there! We've been waiting for you!</p>

                </div>

                <div class="signIn">

                    <p> Sign in With Your Hexagon Account</p>

                    <form action="<?= BASE_URL?>/index.php/user/signIn" method="POST">

                        <label for="username"> Username: </label>

                        <input type="text" name="username" placeholder="Enter Your Username" required>

                        <br/>

                        <label for="password"> Password: </label>

                        <input type="password" name="password" placeholder="Enter Your Password" required>

                        <br/>

                        <input type='submit' class="signInButton"  value='Log In'>

                    </form>

                </div>

                <div class="signUp">

                        <p> Create Your Hexagon Account</p>

                        <form action="<?= BASE_URL ?>/index.php/user/register" method="POST">

                            <label for="firstname"> First Name: </label>
        
                            <input type="text" name="firstname" placeholder="Enter Your First Name" required>
        
                            <br/>
        
                            <label for="lastname"> Last Name: </label>
        
                            <input type="text" name="lastname" placeholder="Enter Your Last Name" required>

                            <br/>

                            <label for="email"> Email: </label>
        
                            <input type="email" name="email" placeholder="Enter Your Email" required>

                            <br/>

                            <label for="username"> Username: </label>
        
                            <input type="text" name="username" placeholder="Enter Your Username" required>
        
                            <br/>

                            <label for="password"> Password: </label>
        
                            <input type="password" name="password" placeholder="Enter Your Password" required>

                            <br/>

                            <label for="phoneNumber"> Phone Number: </label>
        
                            <input type="tel" name="phoneNumber" placeholder="Enter Your Phone Number" required>

                            <br/>

                            <label for="dob"> Date of Birth: </label>
        
                            <input type="date" name="dob" required>

                            <br/>

                            <p class="disclaimer"> You must be 18+ to register! Only adults are elligible to adopt our animals.</p>

                            <input class="signUpButton" type="submit" value="Sign Up">
        
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