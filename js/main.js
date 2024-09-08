///                                                             'صلي عالنبي بس الاول' 
$(document).ready(function(){


  //functions/////////////////////////////////////////////////////////////////////ظظظظظظ


  // start background color when scrolling and resizing
  function updateNavbarBackground() {
    if (window.innerWidth < 992) {
      $('header').css('border-bottom' , '1px solid rgba(0, 0, 0, .2)');
      // console.log("n");

    } else {
      $('header').css('border-bottom' , '1px solid rgba(0, 0, 0, 0) ');
      // console.log("y");
    }


    if ($(window).scrollTop() > 30 || window.innerWidth < 1199) {
      $('header').css({'background-color': 'white'});
      // console.log("n");

    } else {
      $('header').css({'background-color': 'transparent'});
      // console.log("y");

    }
  }
  // end background color when scrolling and resizing

  
  // Function to get the height of the body and log scroll information
  function logBodyHeightAndScroll() {
    var bodyHeight = $('body').height(); // Get the height of the body
    var scrollPosition = $(window).scrollTop(); // Get the current scroll position from the top

      console.log('Body Height: ' + bodyHeight + 'px');
      console.log('Current Scroll Position: ' + scrollPosition + 'px');
      
      // Check how far the user has scrolled from the start
      if (scrollPosition > 0) {
          console.log('User has scrolled ' + scrollPosition + 'px from the start.');
      } else {
          console.log('User is at the top of the page.');
      }
  }
  // end Function to get the height of the body and log scroll information

  
  // Function to animate the width of the div based on scroll
  function animateDivOnScroll() {
    if($(window).scrollTop() < 250 ){
      $(".home-animated").css('transform', 'translateY(-50px)')
    }else {
      $(".home-animated").css('transform', 'translateY(0px)')
    }
    let overAllWidth = $(window).scrollTop() / $("body").height() *100;
    $('#animatedDiv').css('width', overAllWidth + 'px'); // Update the width of the div
      // console.log(overAllHeight);
      // console.log(overAllWidth);
  }
  // end Function to animate the width of the div based on scroll


  //function for carousel

  function forcarousel() {
    let myIndex = 1;
    let i_n ;
    if (window.innerWidth < 768) {
      i_n = (1 -myIndex ) * 100;
      $("#carouselSec ul").css("transform", `translateX(${i_n}%)`);
      $("#carouselSec .carousel-progress-chiled").css("width" , myIndex / 6 * 100 + "%");
    }
    if (window.innerWidth < 1200 && window.innerWidth > 767) {
      // myIndex--;
      i_n = (1 -myIndex ) * 50;
      $("#carouselSec ul").css("transform", `translateX(${i_n}%)`);
      $("#carouselSec .carousel-progress-chiled").css("width" , myIndex / 5 * 100 + "%");
    }
    if (window.innerWidth > 1200) {
      // myIndex--;
      i_n = (1 -myIndex ) * 30;
      $("#carouselSec ul").css("transform", `translateX(${i_n}%)`);
      $("#carouselSec .carousel-progress-chiled").css("width" , myIndex / 4 * 100 + "%");
    }
    $(".Previous-button").click(function(){
      if (window.innerWidth < 768) {
        if (myIndex > 1 && myIndex <= 6) {
          myIndex--;
          i_n = (1 -myIndex ) * 100;
          $("#carouselSec ul").css("transform", `translateX(${i_n}%)`);
  
          //code
          
          $("#carouselSec .carousel-progress-chiled").css("width" , myIndex / 6 * 100 + "%");
          $("#carouselSec .carousel-counter").text("0" + myIndex);
          console.log(myIndex);
          console.log("previous button");
        }
      }
      if (window.innerWidth < 1200 && window.innerWidth > 767) {
        if (myIndex > 1 && myIndex <= 5) {
          myIndex--;
          i_n = (1 -myIndex ) * 50;
          $("#carouselSec ul").css("transform", `translateX(${i_n}%)`);
  
          //code
          
          $("#carouselSec .carousel-progress-chiled").css("width" , myIndex / 5 * 100 + "%");
          $("#carouselSec .carousel-counter").text("0" + myIndex);
          // console.log(myIndex);
          // console.log("previous button");
        }
      }
      if (window.innerWidth > 1200) {
        if (myIndex > 1 && myIndex <= 4) {
          myIndex--;
          i_n = (1 -myIndex ) * 30;
          $("#carouselSec ul").css("transform", `translateX(${i_n}%)`);
  
          //code
          
          $("#carouselSec .carousel-progress-chiled").css("width" , myIndex / 4 * 100 + "%");
          $("#carouselSec .carousel-counter").text("0" + myIndex);
          console.log(myIndex);
          console.log("previous button");
        }
      }
    });
    
    $(".next-button").click(function(){
      if (window.innerWidth < 768) {
        if (myIndex >= 1 && myIndex < 6) {
          i_n = myIndex * 100;
          $("#carouselSec ul").css("transform", `translateX(-${i_n}%)`);
          
          //code
          
          myIndex++;
          $("#carouselSec .carousel-progress-chiled").css("width" , myIndex / 6 * 100 + "%");
          $("#carouselSec .carousel-counter").text("0" + myIndex);
          console.log(myIndex);
          console.log("next button");
        } 
      }
      if (window.innerWidth < 1200 && window.innerWidth > 767) {
        if (myIndex >= 1 && myIndex < 5) {
          i_n = myIndex * 50;
          $("#carouselSec ul").css("transform", `translateX(-${i_n}%)`);
          
          //code
          
          myIndex++;
          $("#carouselSec .carousel-progress-chiled").css("width" , myIndex / 5 * 100 + "%");
          $("#carouselSec .carousel-counter").text("0" + myIndex);
          // console.log(myIndex);
          // console.log("next button");
        } 
      }
      if (window.innerWidth > 1200) {
        if (myIndex >= 1 && myIndex < 4) {
          i_n = myIndex * 33.3;
          $("#carouselSec ul").css("transform", `translateX(-${i_n}%)`);
          myIndex++;
    
          //code
          
          $("#carouselSec .carousel-progress-chiled").css("width" , myIndex / 4 * 100 + "%");
          $("#carouselSec .carousel-counter").text("0" + myIndex);
          console.log(myIndex);
          console.log("next button");
        }
      }
      
    });
  }
  // end function for carousel

  function disappearOppeningDiv(){
    $(".home-start").hide(10000);
  }

  
  // Run functions when the page loads/////////////////////////////////
  logBodyHeightAndScroll();
  animateDivOnScroll();
  updateNavbarBackground();
  forcarousel();
  disappearOppeningDiv();
  // end Run functions when the page loads/////////////////////////////////

  
  // start when scrolling and resizing
  $(window).scroll(function() {
    logBodyHeightAndScroll();
    animateDivOnScroll();
    updateNavbarBackground();
  });
  // end when scrolling and resizing

  
  // تحديث الخلفية عند تغيير حجم الشاشة
  // when resizing the screen
  $(window).resize( function() {
    updateNavbarBackground();
    forcarousel();
  });
  //end when resizing the screen
  //
  //
  //
  //
  //
  //
  });
//                                                                'the end sweety'

