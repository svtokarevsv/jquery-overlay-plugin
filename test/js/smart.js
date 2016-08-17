var smartJs = (function () {
    'use strict';

    return {
        overlay: function (elem) {
            var html =
                "<div class='smart-overlay'>" +
                "<div class='overlay-caption'>" +
                "<h3>3D</h3>" +
                "</div>" +
                "</div>";
            var element = jQuery(elem);
            element
                .append(html)
                .css('position', 'relative');
           
            jQuery('.smart-overlay', elem).on('click', function () {
                jQuery(this).fadeOut(1000);
            });
            return false;
        }
    };
})();

