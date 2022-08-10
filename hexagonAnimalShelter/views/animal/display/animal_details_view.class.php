<?php

/*Author: Sarah Harris
 * Date: 04/01/2019
 * Name: animal_details.class
 * Description: View class for displaying an animal's details from the database
 */

class AnimalDetails extends IndexView {
    
    public function display($animal) {
         //retrieve animal details by calling get methods
            $id = $animal->getId();
            $name = $animal->getName();
            $type = $animal->getType();
            $breed = $animal->getBreed();
            $sex = $animal->getSex();
            $age = $animal->getAge(); 
            $fee = $animal->getFee() ;
            $description = $animal->getDescription();
            $image = $animal->getImage();
                     
                     
            //display the header
            parent::displayHeader($name);
            
           
?>

  <!-- div to hold the animal details -->
        <div class="animalProfile">

            <div class="title">

                <h1> Pet Profile: <?= $name ?> </h1>

            </div>

            <div class="animalPhoto">
            
                <img src="<?= BASE_URL?>/www/img/<?= $image?>" alt="Image of <?= $name ?>">

            </div>

            <div class="info">

                <h3> Name:  <?= $name ?> </h3>
                <p> <span class="heading"> Type: </span> <?= $type ?> </p>
                <p> <span class="heading"> Breed: </span> <?= $breed ?></p>
                <p> <span class="heading"> Gender: </span> <?= $sex ?></p>
                <p> <span class="heading"> Age: </span> <?= $age ?> </p>
                <p> <span class="heading"> Adoption Fee: </span> $<?= $fee ?> </p>
                <p class="heading"> Description: </p>
                <p> <?= $description ?></p>

            </div>

            <div class="appointment">

                <button class="appointmentButton" onclick="window.location.href='<?= BASE_URL?>/index.php/appointment/fill_out/<?= $id?>'"> Schedule an Appointment with <?= $name ?> </button>

                <div class="adminAnimalButtons" style = "display : <?= ($_SESSION['role'] == 1) ? 'block' : 'none' ?>">

                    <button class="appointmentButton" onclick="window.location.href='<?= BASE_URL?>/index.php/animal/edit/<?= $id?>'"> Edit <?= $name ?>'s Profile </button>

                    <button class="appointmentButton" onclick="window.location.href='<?= BASE_URL?>/index.php/animal/delete/<?= $id?>'"> Delete <?= $name ?>'s Profile </button>

                </div>

            </div>

        </div>

  <?php 
 
      //display the footer
      parent::displayFooter();
  
    } //end of Display method
} //end of AnimalDetails class
  ?>