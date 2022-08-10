<?php

/*Author: Sarah Harris
 * Date: 04/03/2019
 * Name: index.php
 * Description: Bootstrapper for the site
 */

//load application settings
require_once ("application/config.php");

//include autoload from Composer
require_once ('vendor/autoload.php');

//load the dispatcher that dissects a request URL
new Dispatcher();



