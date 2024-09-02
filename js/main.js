/*/*///صلي عالنبي بس الاول 
$(document).ready(function(){


  //functions//////////////////////////////
  //
  //
  // start background color when scrolling and resizing
  function updateNavbarBackground() {
    if (window.innerWidth < 992) {
      $('header').css('border-bottom' , '1px solid rgba(0, 0, 0, .2)');
      console.log("n");

    } else {
      $('header').css('border-bottom' , '1px solid rgba(0, 0, 0, 0) ');
      console.log("y");

    }
    if ($(window).scrollTop() > 30 || window.innerWidth < 1199) {
      $('header').css({'background-color': 'white','border-bottom' : '1px solid rgba(0, 0, 0, .2)'});
      $('header').css('border-bottom' , '1px solid black !important');
      console.log("n");

    } else {
      $('header').css({'background-color': 'transparent' , 'border-bottom' : '1px solid rgba(0, 0, 0, 0)'});
      console.log("y");

    }
  }
  //
  // end background color when scrolling and resizing

  //give nav border when resizing.. a border
  // function takenavborder() {
  //   if (window.innerWidth < 992) {
  //     $('header').css('border-bottom' , '1px solid rgba(0, 0, 0, .2)');
  //     console.log("n");

  //   } else {
  //     $('header').css('border-bottom' , '1px solid rgba(0, 0, 0, 0) ');
  //     console.log("y");

  //   }
  // }


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

  // Function to animate the width of the div based on scroll
  function animateDivOnScroll() {
      var scrollPosition = $(window).scrollTop(); // Get the current scroll position
      var newWidth = 50 + scrollPosition / 10; // Calculate new width based on scroll
      $('#animatedDiv').css('width', newWidth + 'px'); // Update the width of the div
  }

  //
  // Run functions when the page loads/////////////////////////////////
  // takenavborder();
  logBodyHeightAndScroll();
  animateDivOnScroll();
  // التحقق من الخلفية عند تحميل الصفحة
  updateNavbarBackground();




  // start when scrolling and resizing
  $(window).scroll(function() {
    // Run both functions every time the user scrolls
    logBodyHeightAndScroll();
    animateDivOnScroll();

    updateNavbarBackground();
  });
  //
  // تحديث الخلفية عند تغيير حجم الشاشة
  $(window).resize( function() {
    updateNavbarBackground();
    // takenavborder();
  });




    // function toggleMenu() {
    //     $('#isToggle').click(function() {
    //         let menuIcon = $(this).find('i');
    
    //         // Toggle the menu icon
    //         if (menuIcon.hasClass('bi-list')) {
    //             menuIcon.removeClass('bi-list').addClass('bi-x-lg');
    
    //             // Append the menu with slide down effect
    //             $("#topnav").append(`
    //                 <ul class="list-group list-group-flush list-unstyled appended-menu border-top-0 border-end-0 border-start-0">
    //                     <li class="nav-item list-group-item border-0">
    //                         <a href="#home" class="nav-link">Home</a>
    //                     </li>
    //                     <li class="nav-item list-group-item border-0">
    //                         <a href="#feature" class="nav-link">Features</a>
    //                     </li>
    //                     <li class="nav-item list-group-item border-0">
    //                         <a href="#pricing" class="nav-link">Pricing</a>
    //                     </li>
    //                     <li class="nav-item list-group-item border-0">
    //                         <a href="#blog" class="nav-link">Blog & News</a>
    //                     </li>
    //                     <li class="nav-item list-group-item border-0">
    //                         <a href="#contact" class="nav-link">Contact Us</a>
    //                     </li>
    //                 </ul>
    //             `);
    //             $("#topnav ul.appended-menu").slideToggle(300);
    //             console.log("added menu");
    //         } else {
    //             menuIcon.removeClass('bi-x-lg').addClass('bi-list');
                
    //             $("#topnav ul.appended-menu").slideToggle(400 , function() {
    //                 $(this).remove();
    //             });
    //             console.log("removed menu");
    //         }
    //     });
    // }
  });