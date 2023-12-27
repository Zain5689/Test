////////////Sidebar
$(document).ready(function () {
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
    }
});
/////////////////////gallary
$(document).ready(function () {
    // Show images one by one when the page loads
    $('.img img').each(function (index) {
        $(this).delay(300 * index).fadeIn(500);
    });

    // Show all images when the "All" button is clicked
    $('#all').click(function (e) {
        e.preventDefault();
        $('.img img').fadeIn(300);
    });

    // Show 3 images when the "Side1" button is clicked
    $('#side1').click(function (e) {
        e.preventDefault();
        $('.img img').hide();
        $('.side1').slice(0, 3).fadeIn(300);
    });

    // Show 3 images when the "Side2" button is clicked
    $('#side2').click(function (e) {
        e.preventDefault();
        $('.img img').hide();
        $('.side2').slice(0, 3).fadeIn(300);
    });
});

//////////////////////About
function changePhoto(photoId) {
    var photo = document.getElementById(photoId);
    if (photo.src.endsWith('images/slider1.jpg')) {
    photo.src = 'images/slider4.jpg';
    } else if (photo.src.endsWith('images/slider2.jpg')) {
    photo.src = 'images/slider5.jpg';
   } else if (photo.src.endsWith('images/slider3.jpg')) {
    photo.src = 'images/slider6.jpg';
   }
}
///////////////////////////menu
$(document).ready(function() {
    $(".menu-tab").hover(
      function() {
        $(".menu-hide").slideDown();
      },
      function() {
        $(".menu-hide").slideUp();
      }
    );
  });


