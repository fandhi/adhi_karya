<!DOCTYPE html>
<html >
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>ADHI KARYA - Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <link rel="shortcut icon" type="images/x-icon" href="favicon.ico"/> -->
        <link rel="stylesheet" type="text/css" href="css/reset.css"/>	
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
        <link rel="stylesheet" type="text/css" href="css/jquery.bxslider.css"/>
        <link rel="stylesheet" type="text/css" href="css/jquery_tabs.css"/>
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
        <link rel="stylesheet" type="text/css" href="css/responsive.css"/>

        <script type="text/javascript" src="js/jquery_1.7.2.js"></script>	
        <script type="text/javascript" src="js/TweenMax.min.js"></script>
        <script type="text/javascript" src="js/jquery.bxslider.js"></script>
        <script type="text/javascript" src="js/jquery_bootstrap.min.js"></script>
        <script type="text/javascript" src="js/jquery_bootstrap-collapse.js"></script>
        <script type="text/javascript" src="js/jquery_functions.js"></script>

        <!--[if IE 7]>
                <link rel="stylesheet" type="text/css" href="css/style_ie7.css"/>
        <![endif]-->
        <!--[if IE 8]>
                <link rel="stylesheet" type="text/css" href="css/style_ie8.css"/>
        <![endif]-->
        <!--[if IE 9]>
                <link rel="stylesheet" type="text/css" href="css/style_ie9.css"/>
        <![endif]-->


    </head>

    <body>
        <div class="wrap_load">            
        </div>
        <div id="container">
            <header>
                <div id="header">
                    <div class="content">      
                        <div class="logo"> 
                            <a href="index.php"><img src="images/material/logo.png" alt="logo" /></a>                        
                        </div>
                        <div class="nav_search">
                            <div class="box_search"> 
                                <form method="get">
                                    <input type="text" value="" name="key" />
                                    <input type="submit" value="go"/>
                                </form>
                            </div>
                            <div class="box_nav">
                                <a href="" class="active">Eng</a><span class="spar">|</span>
                                <a href="" >Ind</a>
                            </div>
                            <div class="box_nav otl">
                                <a href="contact.php">CONTACT US</a>
                            </div>
                        </div>
                       <div class="navbar" role="navigation">
                          <div class="navbar-inner">
                             <div class="container">
                                <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                                   <span class="icon-bar"></span>
                                   <span class="icon-bar"></span>
                                   <span class="icon-bar"></span>
                                </button>
<!--                                <div class="logo">
                                   <a class="brand" href=""><img class="logo_a" src="images/material/logo.png" alt="" /></a>
                                </div>-->
                                
                                <div class="nav-collapse collapse box_menu">
                                   <ul class="nav">
                                      <li><a href="about_01.php" <?php echo ($page == "about") ? "class='active'" : "" ?>>ABOUT ADHI</a></li>
                                      <li><a href="business_01.php" <?php echo ($page == "business") ? "class='active'" : "" ?>>ADHI Business</a></li>
                                      <li><a href="corporate_01.php" <?php echo ($page == "corporate") ? "class='active'" : "" ?>>GOVERNANCE</a></li>
                                      <li><a href="investor_relation_01.php" <?php echo ($page == "investor") ? "class='active'" : "" ?>>INVESTOR RELATIONS</a></li>
                                      <li><a href="sustainable_01.php" <?php echo ($page == "sustainable") ? "class='active'" : "" ?>>SUSTAINABLE</a></li>
                                      <li><a href="news_01.php" <?php echo ($page == "news") ? "class='active'" : "" ?>>NEWS</a></li>
                                      <li><a href="project_01.php" <?php echo ($page == "project") ? "class='active'" : "" ?>>PROJECT</a></li>
                                      <li><a href="human_01.php" <?php echo ($page == "human") ? "class='active'" : "" ?>>HUMAN CAPITAL</a></li>
                                   </ul>
                                </div><!--/.nav-collapse -->
                             </div>
                          </div>
                       </div>
                    </div>
                </div><!-- end header -->
            </header>


