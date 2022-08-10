<?php

/*Author: Sarah Harris
 * Date: 04/09/2019
 * Name: appointments_view.class.php
 * Description: View class for displaying all appointments
 */

class appointmentsView extends IndexView {
    
    public function display($appointment, $isYours) {
                     
            //display the header
            parent::displayHeader("Appointments");
                       
            if($isYours) {
                $hideNames = "display: none";
                $name = "You have no appointments.";
            } else {
                $hideNames = "display: block";
                $name = "There are no appointments.";
            }
?>

<!-- appointments table -->
<div class="userProfile">

    <div class="userData apptable">

        <h2> Appointments</h2>
        
        <div class="userInfo">

            <table>

                <tr>
                    <th style='<?= $hideNames ?>'>Visitor Name</th>
                    <th>Animal Name</th>
                    <th>Date</th>
                    <th>Time</th>        
                </tr>

                <!-- add a loop to go through all the appointments in the database -->
                <?php 

                    //let user know if there are no appts
                    if ($appointment === 0) {
                        echo "<h1>  $name </h1>";
                    } else {

                            foreach($appointment as $i => $appointments) {
                                
                                          //get info
                                        $animal = $appointments->getAnimal_id();
                                        $animalName = $animal;
                                        $user = $appointments->getUser_id();
                                        $userName = $user;
                                        $date = $appointments->getDate();
                                        $time = $appointments->getTime();
                                        
                                        echo "                
                                                <tr>
                                                    <td style='$hideNames'>$user</td>
                                                    <td>$animal</td>
                                                    <td>$date</td>
                                                    <td>$time</td>
                                                </tr>
                                                
                                                ";
                                
                            }


                    }

                ?>


            </table>

        </div>

    </div>

</div>

<?php 
 
 //display the footer
 parent::displayFooter();

    } //end of Display method
} //end of appointmentsView class
?>