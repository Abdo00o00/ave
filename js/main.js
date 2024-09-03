///                                                             'صلي عالنبي بس الاول' 
$(document).ready(function(){


  //functions/////////////////////////////////////////////////////////////////////ظظظظظظ


  // start background color when scrolling and resizing
  function updateNavbarBackground() {
    if (window.innerWidth < 992) {
      $('header').css('border-bottom' , '1px solid rgba(0, 0, 0, .2)');
      console.log("n");

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

  
  // Run functions when the page loads/////////////////////////////////
  logBodyHeightAndScroll();
  animateDivOnScroll();
  updateNavbarBackground();
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

