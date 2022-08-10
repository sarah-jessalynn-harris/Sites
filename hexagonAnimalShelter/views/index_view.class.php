<?php

/*Author: Sarah Harris
 * Date: 03/31/2019
 * Name: index_view.class
 * Description: (Parent) View class for displaying header and footer for all View classes
 */

class IndexView {
    //display header
    public function displayHeader($pageName) {

    ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= $pageName ?>  - Hexagon Animal Shelter</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.typekit.net/cjc1tcw.css">
    <link rel="stylesheet" href="<?= BASE_URL?>/www/css/styles.css">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <script>
                    //create the JavaScript variable for the base url
                    var base_url = "<?= BASE_URL ?>"
     </script>
</head>
<body>
    <!-- Header of the webpage -->
    <header>

        <div class="logo">
            <img src="<?= BASE_URL?>/www/img/misc/logo.png" alt="Hexagon Animal Shelter Logo">
        </div>

        <div class="links">

            <div class="navigation">
                <a href="<?= BASE_URL?>/index.php/static/view_home"> Home </a>
                <a href="<?= BASE_URL?>/index.php/static/view_about"> About </a>
                <a href="<?= BASE_URL?>/index.php/static/view_contact"> Contact </a>
                <a href="<?= BASE_URL?>/index.php/animal/index"> Animals</a>
                <?= ($_SESSION['status']) ?  
                   "<a href='" . BASE_URL . "/index.php/user/detail/". $_SESSION['id'] ."'  > User Profile </a>"  
                : "<a href='".  BASE_URL ."/index.php/user/LoginView'> Login/Register </a>";
                        
                        ?>
            </div>

            <div class="more">
                <div class="search">
                    <form method="get" action="<?= BASE_URL ?>/index.php/animal/search">
                          <i class="fas fa-search"></i> 
                        <input type="text" name="query-terms" id="searchtextbox" placeholder="Search Hexigon Animal Shelter" autocomplete="off" onkeyup="handleKeyUp(event)">
                        <input class="searchButton" type="submit" value="Search" />
                    </form>
                    
                     <div id="suggestionDiv"></div>
                     
                </div>

                <div class="social">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-instagram"></i>
                </div>
            </div>
        </div>

    </header>

    <!-- content of the page -->
    <div class="wrapper">
        
<?php    

    } //end of display header method
    
    
    
    //display footer 
    public function displayFooter() {
           ?>
    
    <!-- end of wrapper div--> 
    </div>

    <!-- footer of the webpage -->
    <footer>

        <div class="ad">
            <h1> Stop By, Call, Or Schedule Your Adoption Appointment Online Today! </h1>
        </div>
        
        <div class="footing">

            <div class="logo">
                    <img src="<?= BASE_URL?>/www/img/misc/logo.png" alt="Hexagon Animal Shelter Logo">
            </div>

            <div class="address">

                <p class="blueText">  Hexagon Animal Shelter </p>
                <p>  123 Interstate 65 South </p>
                <p>  Hexington, Indiana, 46266 </p>

            </div>

            <div class="phone">

                <p class="blueText">  Open Mon - Fri: 8am - 5pm</p>
                <p>  123-234-4567 </p>
                <p>  info@hexagonanimals.com </p>

            </div>

            <div class="social">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-instagram"></i>
            </div>

        </div>

    </footer>

    <script src="<?= BASE_URL?>/www/lib/jquery-3.3.1.min.js"></script>

    <script src="<?= BASE_URL?>/www/js/app.js"></script>
    
    <script type="text/javascript" src="<?= BASE_URL ?>/www/js/ajax_autosuggestion.js"></script>


</body>
</html>

<?php
    }//end of displayFooter method
}//end of IndexView class
?>
