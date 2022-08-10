<?php

/*Author: Sarah Harris
 * Date: 04/09/2019
 * Name: user_profiles_admin_view.class.php
 * Description: View class for displaying all user profiles to admins
 */

class userProfilesAdminView extends IndexView {
    
    public function display($users) {
                     
                     
            //display the header
            parent::displayHeader("User Profiles");
            
           
?>

<!-- display user accounts -->
<div class="userProfile">

    <div class="userData">
        
        <h2> Hexagon  User Accounts</h2>
                
        <div class="userInfo">

            <div class="accountNav">
                
                                <!-- add a loop to go through all the appointments in the database -->
                <?php 

                    //let user know if there are no appts
                    if ($users === 0) {
                        echo "<h1> There are no appointments. </h1>";
                    } else {

                            foreach($users as $i => $user) {
                                
                                          //get info
                                        $userName= $user->getUsername();
                                        $id = $user->getId();
                                   
                                        
                                        echo "<a href='". BASE_URL ."/index.php/user/detail/". $id ."'>$userName</a>";
                                
                            }


                    }

                ?>

                <a href=""></a>

            </div>

        </div>
                
    </div>

</div>

<?php 
 
 //display the footer
 parent::displayFooter();

    } //end of Display method
} //end of userProfilesAdminView class
?>