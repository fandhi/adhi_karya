var keys = [37, 38, 39, 40];

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
    preventDefault(e);
}

function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}
$.fn.is_on_screen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
 
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    console.log( viewport.bottom+ " < " + bounds.top  + "  --- " + viewport.top  + " > " + bounds.bottom);
};

function animated(from_position,selector){
    var delay=0.1;
    var setting={};
    $(selector).each(function(){
        setting={
            css:{},
            config:{
                speed:1,                
                ease:'Cubic.easeOut'
            }
        };
        if(from_position=="top"){            
            setting['css']= {
                'transform':"rotateX(0deg) scale(1)",
                'top':0,
                'opacity':1
            };
            setting['config']['ease']='Cubic.easeInOut';
        }else if(from_position=="right" || from_position=="left"){
            setting['css']= {
                'transform':"rotateY(0deg) scale(1)",
                'left':0,
                'opacity':1
            };
        }
        elem=$(this);           
        if(elem.is_on_screen()){
            if(elem.attr('data-index') != undefined){
                delay=parseFloat(elem.attr('data-index'))*0.2;
                console.log(elem.attr('data-index') + " " +delay);
            }
            if(elem.attr('data-position') !=undefined){
                data_position=elem.attr('data-position');
                data_position =data_position.split(',');
                setting['css']['top']=data_position[0];
                setting['css']['left']=data_position[1];
                setting['config']['speed']=0.5;
                console.log(data_position);                
            }
            if(!TweenMax.isTweening(elem))
                TweenMax.to(elem, setting['config']['speed'], {
                    css:setting['css'], 
                    delay:parseFloat(delay),
                    ease:setting['config']['ease']
                });
            delay=0;    
        }
    });
}
function animateFrom(from_position,selector){
    var def_css={};
    $(selector).each(function(){
        def_css={            
            position:"relative",
            display:'block',
            top:"-70px",
            left:"-100px",
            right:"100px"           
        }
        if($(this).attr('flip')=='true'){
            $(this).parent('div').addClass('anim3d500');
        }
        if($(this).css('position') == "absolute"){
            def_css['position']='absolute';
            cur_top=$(this).css('top');
            def_css['top']= parseFloat(cur_top.replace('px',''))-70;
        }
        if(from_position=="top"){
            $(this).css({
                position:def_css['position'],
                top:def_css['top'],
                opacity:"0"
            });
            if($(this).attr('flip')=='true'){
                TweenMax.to($(this),0, {
                    css:{
                        top:'0px',
                        'transform': 'rotateX(60deg) scale(0.8)'     
                    } 
                });
            }
        }else if(from_position=="left"){
            $(selector).css({
                position:def_css['position'],
                left:def_css['left'],
                opacity:"0"
            });        
            if($(this).attr('flip')=='true'){
                TweenMax.to($(this),0, {
                    css:{
                        top:'0px',
                        'transform': 'rotateY(-30deg) scale(0.5)'     
                    } 
                });
            }
        }else if(from_position=="right"){
            $(selector).css({
                position:def_css['position'],
                left:def_css['right'],
                opacity:"0"
            });
            if($(this).attr('flip')=='true'){
                TweenMax.to($(this),0, {
                    css:{
                        top:'0px',
                        'transform': 'rotateY(30deg) scale(0.5)'     
                    } 
                });
            }

        }
        
    })
        
        
    animated(selector);        
    $(window).scroll(function(){            
        animated(from_position,selector);        
    });
}
function fixslider(){
    width_window=$(window).width();
    $(".bx-viewport ul li").width(width_window);
    console.log(width_window);
}
$(function(){
    
    });
$(window).load(function(){
    TweenMax.to($(".wrap_load"),4,{
        css:{
            'opacity':0           
        },
        onComplete:function(){
            $(".wrap_load").css({
                display:'none',
                'z-index':0
            });
        },
        ease:Cubic.easeOut
    });
    enable_scroll();
//fixslider()
});


$(function(){
    disable_scroll();
})
$(document).ready(function() {
    
    animateFrom('top',".animate_fromtop");
    animateFrom('left',".animate_fromleft");
    animateFrom('right',".animate_fromright");

    // fixslider()
    var sliderHome=$('.bxslider').bxSlider({
        mode: 'fade',
        auto:true,
        responsive:true
    });		
    $(window).resize(function(e) {
        sliderHome.reloadSlider();
    });
    $(window).scroll(function(){
        if($(this).scrollTop() >=100){
            if(!$("#header").hasClass('active')){
                if(!TweenMax.isTweening($("#header .nav_search"))){
                    TweenMax.to($("#header .nav_search"),0.2,{
                        css:{
                            'margin-top':"-55px",
                            'opacity':0
                        },
                        onComplete:function(){
                            $("#header .nav_search").css({
                                display:'none'
                            });
                        },
                        ease:Cubic.easeIn
                    });
                    $("#header .logo").animate({
                        'margin-top':"7px",
                        'height':'30px'
                    },200);
                            
                    TweenMax.to($("#header .logo img"),0.3,{
                        css:{
                            'width':'30px'
                        }
                    });
                
                    TweenMax.to($("#header"),0.5,{
                        css:{
                            'height':"42px"
                        },
                        ease:Cubic.easeOut,
                        onComplete:function(){
                            $("#header").addClass('active');
                        }
                    });
                    $(".box_menu").animate({
                        'margin-top':'15px'
                    },200);
                    $(".btn-navbar").animate({'margin-top':'3px'},100);
                }
            }
            
        }
        if($(this).scrollTop() < 100){
            console.log('asd');
            if($("#header").hasClass('active')){
                if(!TweenMax.isTweening($("#header"))){
                    TweenMax.to($("#header"),0.3,{
                        css:{
                            'height':"114px"
                        },
                        ease:Cubic.easeOut,
                        onComplete:function(){
                            $(".box_menu").animate({
                                'margin-top':'30px'
                            },200);
                            $("#header .logo").animate({
                                'margin-top':"20px",
                                'height':'84px'
                            },200);
                            
                            TweenMax.to($("#header .nav_search"),0.2,{
                                css:{
                                    'display':'block',
                                    'margin-top':"0px",
                                    'opacity':1
                                },
                                ease:Cubic.easeOut
                            });       
                            TweenMax.to($("#header .logo img"),0.2,{
                                css:{
                                    'width':'73px'
                                }
                            });
                            $("#header").removeClass('active'); 
                        }
                    });
                }
                $(".btn-navbar").animate({'margin-top':'15px'},200);
            }

        }
        if($("#middle .wrap_circle_top .content_center").is_on_screen()){
            data_1=$("#middle .wrap_circle_top .thumb_circ.data1");
            data_2=$("#middle .wrap_circle_top .thumb_circ.data2");
            data_3=$("#middle .wrap_circle_top .thumb_circ.data3");
            data_4=$("#middle .wrap_circle_top .thumb_circ.data4");
            data_5=$("#middle .wrap_circle_top .thumb_circ.data5");
            if(!$("#middle .wrap_circle_top").hasClass('active')){
                $("#middle .wrap_circle_top .thumb_circ h6").fadeOut(400);
                $("#middle .wrap_circle_top").addClass('active');
                TweenMax.to($("#middle .wrap_circle_top .thumb_circ"),1,{
                    css:{
                        width:'127px',
                        height: '127px'
                    },
                    ease:Cubic.easeOut
                });

                TweenMax.to($("#middle .wrap_circle_top .thumb_circ .images"),1,{
                    css:{
                        width:'117px',
                        height: '117px'
                    },
                    ease:Cubic.easeOut

                });
                
                TweenMax.to(data_1,1,{
                    css:{
                        top: '390px'
                        //left: '175px'                   
                    }
                });
                TweenMax.to(data_2,1,{
                    css:{
                        top: '150px'
                        //left: '275px'                   
                    }
                })
                TweenMax.to(data_3,1,{
                    css:{
                        margin:'auto',
                        top: '45px'
                        //left: '515px'
                    }
                })
                TweenMax.to(data_4,1,{
                    css:{
                        top: '150px'
                        //right: '275px'                   
                    }
                })
                TweenMax.to(data_5,1,{
                    css:{
                        top: '390px'
                        //right: '175px'                   
                    }
                })
                TweenMax.to($("#middle .wrap_circle_top .content_center"),1,{
                    css:{
                        opacity: '1'
                    }
                })
                $("#middle .wrap_circle_top .thumb_circ h6").delay(600).fadeIn(400);
                console.log('run animation');
            }
        }
    });
    $(".wrap_circle_top .thumb_circ").hover(function(){
        images=$(this).find(".images");
        img=$(this).find(".images img");
        TweenMax.to(img,0.2,{
            css:{
                'transform':'scale(1.2)'
            },
            ease:Cubic.easeIn
        })

    },function(){
        images=$(this).find(".images");
        img=$(this).find(".images img");
        TweenMax.to(img,0.5,{
            css:{
                'transform':'scale(1)'
            },
            ease:Cubic.easeOut
        });
                
    });
    
    $(".wrap_circle_top .thumb_circ").click(function(){
        $(".wrap_circle_top .thumb_circ").removeClass('active');
        TweenMax.to($(".wrap_circle_top .thumb_circ"),0.3,{
            css:{
                scale:1
            }
        })
        $(this).addClass('active');
        html=$(this).find('.data-content').html();
        TweenMax.to($(".wrap_circle_top .content_center"),0.5,{
            css:{
                opacity:0
            },
            ease:Linear.easeNone,
            onComplete:function(){                
                $(".wrap_circle_top .content_center").html(html);
                TweenMax.to($(".wrap_circle_top .content_center"),0.5,{
                    css:{
                        opacity:1
                    },
                    ease:Linear.easeNone
                })
            }
        });
    })
    setInterval(function(){
        
        TweenMax.to($(".wrap_circle_top.active .thumb_circ.active"),1,{
            css:{
                scale:1.1
            },
            ease:Linear.easeNone,
            onComplete:function(){
                TweenMax.to($(".wrap_circle_top.active .thumb_circ.active"),1,{
                    css:{
                        scale:1
                    },
                    ease:Linear.easeNone

                })
            }
        })

    }, 2000)
    
    $(".wrap_circle_bottom .thumb_circ").click(function(){
        $(".wrap_circle_bottom .thumb_circ").removeClass('active');
        TweenMax.to($(".wrap_circle_bottom .thumb_circ"),0.3,{
            css:{
                scale:1
            }
        })
        $(this).addClass('active');
        html=$(this).find('.data-content').html();
        TweenMax.to($(".wrap_circle_bottom .content_center"),0.5,{
            css:{
                opacity:0
            //                scale:1.3
            },
            ease:Linear.easeNone,
            onComplete:function(){                
                $(".wrap_circle_bottom .content_center").html(html);
                TweenMax.to($(".wrap_circle_bottom .content_center"),0.5,{
                    css:{
                        opacity:1
                    // scale:1
                    },
                    ease:Linear.easeNone
                })
            }
        });
    })
    setInterval(function(){
        
        TweenMax.to($(".wrap_circle_bottom .thumb_circ.active"),1,{
            css:{
                scale:1.1
            },
            ease:Linear.easeNone,
            onComplete:function(){
                TweenMax.to($(".wrap_circle_bottom .thumb_circ.active"),1,{
                    css:{
                        scale:1
                    },
                    ease:Linear.easeNone

                })
            }
        })

    }, 2000)



    //tab jquery     
    $(".tab_content").hide(); 
    $("ul.tabs li:first").addClass("active").show(); 
    $(".tab_content:first").show();     
   
    $("ul.tabs li").click(function() {
        $("ul.tabs li").removeClass("active"); 
        $(this).addClass("active"); 
        $(".tab_content").hide(); 
        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).fadeIn(); 
        return false;
    });


    //tab jquery     
    $(".tab_content2").hide(); 
    $("ul.tabs2 li:first").addClass("active").show(); 
    $(".tab_content2:first").show();     
   
    $("ul.tabs2 li").click(function() {
        $("ul.tabs2 li").removeClass("active"); 
        $(this).addClass("active"); 
        $(".tab_content2").hide(); 
        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).fadeIn(); 
        return false;
    });



    //tab jquery contact 
    $(".tab_contact").hide(); 
    $("ul.tab_co li:first").addClass("active").show(); 
    $(".tab_contact:first").show();     
   
    $("ul.tab_co li").click(function() {
        $("ul.tab_co li").removeClass("active"); 
        $(this).addClass("active"); 
        $(".tab_contact").hide(); 
        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).fadeIn(); 
        return false;
    });



    //project slider   
    $('.project_slider').bxSlider({
      auto: true,
      autoControls: true,
      pause: 15000,
      speed: 1000,
      slideMargin: 0
    });



    //accordion contact    
    $('.acordion_container').hide(); 
    $('.acordion_trigger:first').addClass('active').next().show();     
    $('.acordion_trigger').click(function(){
        if( $(this).next().is(':hidden') ) { 
            $('.acordion_trigger').removeClass('active').next().slideUp();
            $(this).toggleClass('active').next().slideDown();        
        }
        return false;         
    });





    
    //click popup management
    $(".ms01 .more_popup").click(function(){        
        var text= $(this).find('.data_popup').html();
        $("#sub_popup1 .set_text").html(text);
        $("#sub_popup1").fadeIn(200);
    });
    $(".ms02 .more_popup").click(function(){   
        var subtext2= $(this).find('.data_popup2').html();
        $("#sub_popup2 .set_text2").html(subtext2);
        $("#sub_popup2").fadeIn(200);

    });
    $(".ms03 .more_popup").click(function(){   
        var subtext3= $(this).find('.data_popup3').html();
        $("#sub_popup3 .set_text3").html(subtext3);
        $("#sub_popup3").fadeIn(200);

    });

   $(window).load(function() {
      //table
      var autoHeightRows = $(".responsive_table .col2").outerHeight();
      var max_height = -1;
      $(".responsive_table .col2").each(function() {
         var h = $(this).outerHeight();
         max_height = h > max_height ? h : max_height;
      });
//      $(".responsive_table .col2").siblings().height(max_height);
   });

});

//Responsive table
$(function(){
   var viewPortWidth = $(window).width();
   var tableContent = $("#frame_table");
   
   
   if($(viewPortWidth) < 800) {
      $.ajax({
      dataContent: tableContent.attr("data-content"),
      type: "get",
      dataType: "html",
      error: function() {
      tableContent.html("<p>Content not found</p>");
      },
      succes: function(strData) {
         tableContent.html(strData);
      }
   });
   }
//   alert(viewPortWidth);
});

//popup management
function openPopup(id) {    
   $(id).fadeIn(300);
}
function closePopup(id) {    
    $(id).fadeOut(300);
}




		
