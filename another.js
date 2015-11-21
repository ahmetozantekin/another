/**
 * @module Another JS
 * author : Furkan BAŞARAN <frknbasaran@gmail.com>
 *
 * Small jQuery plugin for add alternative href attributes to anchors
 */

$.fn.another = function () {
  return this.each(function () {
    
    /*
      Get href attribute from anchor
    */
    var first  = $(this).attr('href');
    var second = $(this).data('another');

    /*
      Prevent click event on anchor element
    */
    $(this).attr({"href":"javascript:void(0)"});

    /*
      Go path function
    */
    var go = function(path) {
      window.location = path;
    }

    /*
      When clicked link
    */
    $(this).click(function() {
      
      /*
        Send AJAX request to 1st url and check that
      */
      $.ajax({
        type: "GET",
        url : first
      })

      /*
        Go first link when link is alive
      */
      .done(go(first))

      /*
        Go second link when link is dead
      */
      .fail(go(second));

    })
  
  });
};
