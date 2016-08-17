
(function ($) {

    "use strict";

    $.fn.smart_overlay = function () {
        var html =
            "<div class='smart-overlay'>" +
            "<div class='overlay-caption'>" +
            "<h3>3D</h3>" +
            "</div>" +
            "</div>";
        var css = "<style>" +
            ".smart-overlay{" +
            "position: absolute;" +
            "top:0;" +
            "left:0;" +
            "width: 100%;" +
            "height: 100%;" +
            "background-color: #525252;" +
            "opacity: 0.8;" +
            "z-index: 1000;" +
            "display: flex;" +
            "cursor: pointer;" +
            "}" +
            ".smart-overlay .overlay-caption{" +
            "background-color: #121212;" +
            "opacity: 0.9;" +
            "color: white;" +
            "font-style: italic;" +
            "z-index: 1001;" +
            "margin: auto;" +
            "width: 170px;" +
            "height: 170px;" +
            "text-align: center;" +
            "vertical-align: middle;" +
            "font-size:80px;" +
            "position: relative;" +
            "display: flex;" +
            "}" +
            ".smart-overlay .overlay-caption h3{" +
            "margin: auto;" +
            "}" +
            "</style>";
        $(this).first().before(css);
        return this.each(function () {
            var _this = $(this);
            _this
                .append(html)
                .css('position', 'relative')
                .find('.smart-overlay').on('click', function () {
                $(this).fadeOut(1000);
            });

        });

    };

})(jQuery);