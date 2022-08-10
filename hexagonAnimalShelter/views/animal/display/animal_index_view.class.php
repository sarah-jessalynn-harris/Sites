<?php

/*Author: Sarah Harris
 * Date: 03/31/2019
 * Name: animal_index_view.class
 * Description: View class for displaying all animals from the database
 */

 
class AnimalView extends IndexView{
    
        public function display($animals) {

            //display the header
            parent::displayHeader('Animals');

?>

        <h1 style="color: #4A67AD; margin: 50px 50px 0; text-align: center;"> Meet our friendly residents! <?php?></h1>

        <!-- div to hold all the animals -->
        <div class="animals">

            <!-- Add a loop to go through all the animals in the database -->
            <?php 
            
            //let user know if no animals are found 
            if ($animals === 0) {
                echo "<h1> No animals were found. </h1>";
            } else {
            
                foreach($animals as $i => $animal) {
                    
                    //store values from get functions in variables before putting them in the page
                    $id = $animal->getId();
                    $name = $animal->getName();
                    $image = $animal->getImage();
            ?>

            <!-- div to hold the individual animal's info -->
            <div class="animal" onclick="window.location.href='<?= BASE_URL?>/index.php/animal/detail/<?= $id ?>'">

                <img src="<?= BASE_URL?>/www/img/<?= $image?>" alt="photo of <?= $name ?>">

                <h1> <?= $name ?> </h1>

            </div>
            
            <!-- End of Loop -->
            <?php }  //end of loop
            } //end of else            
            ?>
        <!-- end of animals div-->
        </div> 

<?php 
            //display the footer
            parent::displayFooter();

        }//end of display function

} //end of Animal View class
?>