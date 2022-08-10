<?php

/*Author: Sarah Harris
 * Date: 04/09/2019
 * Name: add_animal_view.class
 * Description: View class for a form admins use to create a new animal profile
 */

class AddAnimal extends IndexView {
    
    public function display() {
    //display the header
    parent::displayHeader("Add Animal");            
           
?>
 
 <!-- add animal -->
 <div class="userProfile">

    <div class="userData">

        <div class="animalProfile">

            <div class="title">
                
                <h1> Add Animal Profile</h1>
            
            </div>

            <div class="animalPhoto">

                <img src="<?= BASE_URL?>/www/img/misc/kiten.jpg" alt="kitten">

            </div>

            <div class="info">

                    <form action='<?= BASE_URL?>/index.php/animal/add' method="post">
            
                        <label for="name"> <span class="heading"> Name: </span> 
            
                            <input name="name" placeholder="Name" required>
                        
                        </label>

                        <label for="image"> <span class="heading"> Image: </span> 
            
                            <input name="image" placeholder="Image Name" required>
                        
                        </label>
                        
                        <label for="type"> <span class="heading"> Type: </span> 
                        
                            <input name="type" placeholder="Type" required> 
                        
                        </label>
            
                        <label for="breed"> <span class="heading"> Breed: </span> 
                        
                            <input name="breed" placeholder="Breed" required> 
                        
                        </label>
            
                        <label for="sex"> <span class="heading"> Gender: </span> 
            
                            <input name="sex" placeholder="Gender" required>
                        
                        </label>
                        
                        <label for="age"> <span class="heading"> Age: </span> 
                        
                            <input name="age" placeholder="Age" required> 
                        
                        </label>
            
                        <label for="fee"> <span class="heading"> Fee: </span> 
                        
                            <input name="fee" placeholder="Fee" required> 
                        
                        </label>
            
                        <label class="description" for="description"> <span class="heading"> Description: </span> 
                        
                            <textarea name="description" placeholder="Description" rows="10"
                            cols="40" required></textarea> 
                        
                        </label>
            
                        <input class="submitButton" type="submit" value="Add Animal">
                        
                        <button  class="submitButton"  onclick="window.location.href='<?= BASE_URL?>/index.php/animal/index'"> Cancel </button>
            
                    </form>
            
                </div>

        </div>
        
    </div>

</div>

<?php 
 
    //display the footer
    parent::displayFooter();

    } //end of Display method
} //end of AddAnimal class
?>