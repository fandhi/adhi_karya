<?php
$page = "contact";
include('inc_header.php');
?>

<div id="middle">
    <div class="banner_page">
       <div>
            <img src="images/content/banner_page_about.jpg"/>
       </div>
    </div>

    <div class="sub_head">
        <div class="box_red"></div>       
        <div class="content">
            <div class="sub_nav">
                <ul class="clearfix">
                    <li><a class="active" href="human_01.php">Contact Us</a></li>                                      
                </ul>                
            </div>
        </div>
    </div>

    <div id="content_page">
        <div class="content clearfix">
            <h1 class="lowspace">
                <span>Contact </span> Us
            </h1>           
            <ul class="tab_co">
                <li><a href="#address">Address</a></li>
                <li class="last"><a href="#form">Contact Form</a></li>                
            </ul>
            <div class="tab_container_contact">
                <div id="address" class="tab_contact">   
                    <?php include('inc_contact_address.php');?>
                </div> 
                <div id="form" class="tab_contact">   
                    <?php include('inc_contact_form.php');?>
                </div> 
            </div> 
           



        </div>

        
       
        


    </div>

    
</div><!-- end middle --> 		

<?php include('inc_footer.php'); ?>



