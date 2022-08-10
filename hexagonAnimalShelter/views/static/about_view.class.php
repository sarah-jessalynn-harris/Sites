<?php

/*Author: Sarah Harris
 * Date: 04/09/2019
 * Name: about_view.class.php
 * Description: View class for displaying the about page
 */

class AboutView extends IndexView {
    
    public function display() {
                     
                     
            //display the header
            parent::displayHeader("About");
            
           
?>

<!-- About Page -->
<div class="about">

    <div class="imageHeader"></div>

    <div class="contents">

        <h1> Hexagon Animal Shelter: A Beginning</h1>


        <p>Hexagon Animal Shelter is home to twenty furry guests, and counting! We are doing our best to see that all of these fuzzy friends make it to their forever home. To help with this process, we bring to you this site, where you can see all of our current residents and schedule an appointment to meet any one of them (and then hopefully adopt him or her!) Create your account today to keep track of appointments. You can also visit our about page to learn more about what Hexagon Animal Shelter does in detail. Feel free to contact us for more information by going to our contact page.</p>  

        <div class="subSection">
        
            <h1> Hexagon Animal Shelter: A Place To Call Home... For Now!</h1>

            <div class="subSectionContents">

                <img src="<?= BASE_URL?>/www/img/misc/dog.jpg" alt="">

                <div class="text">

                    <p>
                            Hexagon Animal Shelter is a great place to be! We have 100 acres of facility to make our guests at home. We have 100 rooms available to house our animals, some furnished like a home, and others with separate mini-rooms for our animals to stay the night in. We have a medical center, fully staffed with two registered veterinarians. While at the moment we only have dog and cat residents, we have facilities to house other animals, such as horses, snakes, rabbits, and more!     
                    </p>
            
                    <p>
                            Hexagon is more than happy to house all of our animals, but ultimately we hope to send them to a more permanent residence. The entire goal of our shelter is to see that all of these fuzzy friends make it to their forever home. Our animals are a part of the Hexagon family, and we will always love them, but we want to reunite them with their new family as soon as we can. That's the love all of us here at Hexagon show our guests every day.
                    </p>

                </div>

            </div>

        </div>

        <div class="subSection">
        
                <h1> Hexagon Animal Shelter: A Place To Call Home... For Now!</h1>

                <div class="subSectionContents last">

                    <img src="<?= BASE_URL?>/www/img/misc/cat.jpg" alt="">

                    <div class="text">

                        <p>
                                Hexagon Animal Shelter is proud of all they have accomplished up until now, but we are always looking to improve our facility, methods, and care. We hope to create a bigger connection with our Hexington community members, where we can all work together to improve the lives of animals everywhere.
                        </p>
                
                        <p>
                                We will be hosting many events at our facility, as well as volunteer events, in the near future. Be sure to check our social media pages to find out what's happening over at Hexagon Animal Shelter!    
                        </p>

                    </div>

                </div>

        </div>

    </div>

</div>

<?php 
 
    //display the footer
    parent::displayFooter();

    } //end of Display method
} //end of AboutView class
?>