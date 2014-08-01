/*global $, window*/

function parallaxScroll() {
    "use strict";
    
    var scrolledY = $(window).scrollTop();

    $('#prllx-layer1').css('top', (-(scrolledY * 0.4)) + 'px');
    $('#prllx-layer2').css('top', (-(scrolledY * 0.6)) + 'px');
    $('#prllx-layer3').css('top', (-(scrolledY * 0.8)) + 'px');
    $('#prllx-layer4').css('top', (-(scrolledY)) + 'px');
}

