/*global skillsetApp, $*/


window.skillsetApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        var appView = new skillsetApp.Views.ApplicationView();
    }
};

$(document).ready(function () {
    'use strict';
    skillsetApp.init();
});
