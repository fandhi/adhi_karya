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
                    <li><a class="active" href="project_01.php">Construction</a></li>
                    <li><a href="project_02.php">EPC</a></li>    
                    <li><a href="project_03.php">Property</a></li> 
                    <li><a href="project_04.php">Reality</a></li> 
                    <li><a href="project_05.php">Investment</a></li> 

                </ul>                
            </div>
        </div>
    </div>

    <div id="content_page">
        <div class="content clearfix">
            <h1>
                <span>CONSTRUCtION</span>  
            </h1>           
            <h2>ADHI embarked on a strategic expansion program that saw its business evolved from a single core business of construction to five business lines encompassing Construction Services, EPC, Property, Real Estate, and Investment Infrastructure.</h2>

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
                    <li><a href="#tab2">Road</a></li>
                    <li><a href="#tab3">Bridge</a></li>
                    <li><a href="#tab4">Coastal</a></li>
                    <li><a href="#tab5">Airport</a></li>
                    <li><a href="#tab6">Harbor</a></li>
                    <li class="last"><a href="#tab7">Landmark</a></li> 
                </ul>
                <div class="tab_container2">
                        <div id="tab1" class="tab_content2 clearfix">                    
                            <?php include ('inc_list_project_contruction_01.php');?>                                
                        </div>
                        <div id="tab2" class="tab_content2 clearfix">                    
                            Road
                        </div>
                        <div id="tab3" class="tab_content2 clearfix">                    
                            Bridge
                        </div>
                        <div id="tab4" class="tab_content2 clearfix">                    
                            Coastal
                        </div>
                        <div id="tab5" class="tab_content2 clearfix">                    
                            Airport
                        </div>
                        <div id="tab6" class="tab_content2 clearfix">                    
                            Harbor
                        </div>
                        <div id="tab7" class="tab_content2 clearfix">                    
                            Landmark
                        </div>
                </div>
            </div>
           
            
            


        </div>

        
       
        


    </div>

    
</div><!-- end middle --> 		

<?php include('inc_footer.php'); ?>



