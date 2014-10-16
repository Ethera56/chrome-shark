/*
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
      //Scroll the page to the right section when an element on the menu is clicked
      $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
      });

      //Set all the features box to the same height
      var maxHeightFeatureHeader = 0;
      $(".feature-header").each(function() {
        var $this = $(this);
        var currentFeatureHeaderHeight = $this.height();

        if (currentFeatureHeaderHeight > maxHeightFeatureHeader) {
          maxHeightFeatureHeader = currentFeatureHeaderHeight;
        }
      });
      $(".feature-header").height(maxHeightFeatureHeader);

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
      target: '.navbar-fixed-top'
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
    });
});
