<?php
$page = "project";
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
                    <li><a href="project_01.php">Construction</a></li>
                    <li><a href="project_02.php">EPC</a></li>    
                    <li><a class="active" href="project_03.php">Property</a></li> 
                    <li><a href="project_04.php">Reality</a></li> 
                    <li><a href="project_05.php">Investment</a></li> 

                </ul>                
            </div>
        </div>
    </div>

    <div id="content_page">
        <div class="content clearfix">
            <h1>
                <span>Property</span>
            </h1>    
            <h2>
                The Company’s property business is an investment business in building infrastructure development, including office rent, apartments, and hotels.
            </h2>
            <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p>
                Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.
            </p>
            <p>
                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>



            <div id="frame_tab_project" class="clearfix">
                <ul class="tabs2 clearfix">
                    <li><a href="#tab1">All</a></li>
                    <li><a href="#tab2">Apartement</a></li>
                    <li><a href="#tab3">Office</a></li>
                    <li><a href="#tab4">Hotel</a></li>
                </ul>
                <div class="tab_container2">
                        <div id="tab1" class="tab_content2 clearfix">                    
                            <?php include ('inc_list_project_property.php');?>                                
                        </div>
                        <div id="tab2" class="tab_content2 clearfix">                    
                            Apartement
                        </div>
                        <div id="tab3" class="tab_content2 clearfix">                    
                            Office
                        </div>
                        <div id="tab4" class="tab_content2 clearfix">                    
                            Hotel
                        </div>
                        
                </div>
            </div>       
            
            
            


        </div>

        
       
        


    </div>

    
</div><!-- end middle --> 		

<?php include('inc_footer.php'); ?>



