<?php

/*Author: Sarah Harris
 * Date: 04/09/2019
 * Name: animal_edit_view.class
 * Description: View class for displaying an animal's details from the database and editing the info
 */

class AnimalEdit extends IndexView {
    
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
            parent::displayHeader("Edit $name");
            
           
?>

<div class="animalProfile">

    <div class="title"> 

        <h1> Edit Pet Profile: <?= $name?> </h1>

    </div>


    <div class="animalPhoto">

        <img src="<?= BASE_URL?>/www/img/<?= $image?>" alt="">

    </div>

    <div class="info">

        <form action='<?= BASE_URL?>/index.php/animal/update/<?= $id?>' method="post">

            <label for="name"> <span class="heading"> Name: </span> 

                <input name="name" placeholder="Name" value="<?= $name?>">
            
            </label>
            
             <label for="image"> <span class="heading"> Image: </span> 

                <input name="image" placeholder="Image Name:" value="<?= $image?>">
            
            </label>
            
            <label for="type"> <span class="heading"> Type: </span> 
            
                <input name="type" placeholder="Type" value="<?= $type?>"> 
            
            </label>

            <label for="breed"> <span class="heading"> Breed: </span> 
            
                <input name="breed" placeholder="Breed" value="<?= $breed?>"> 
            
            </label>

            <label for="sex"> <span class="heading"> Gender: </span> 

                <input name="sex" placeholder="Gender" value="<?= $sex ?>">
            
            </label>
            
            <label for="age"> <span class="heading"> Age: </span> 
            
                <input name="age" placeholder="Age" value="<?= $age?>"> 
            
            </label>

            <label for="fee"> <span class="heading"> Fee: </span> 
            
                <input name="fee" placeholder="Fee" value="<?= $fee?>"> 
            
            </label>

            <label class="description" for="description"> <span class="heading"> Description: </span> 
            
                <textarea name="description" placeholder="Description" rows="10"
                cols="40"><?= $description?></textarea> 
            
            </label>

            <input class="submitButton" type="submit" value="Update Profile">
            
            <button class="submitButton" onclick="window.location.href='<?= BASE_URL?>/index.php/animal/detail/<?= $id?>'"> Cancel </button>

        </form>
        
    </div>

</div>

<?php 
 
    //display the footer
    parent::displayFooter();

    } //end of Display method
} //end of AnimalEdit class
?>