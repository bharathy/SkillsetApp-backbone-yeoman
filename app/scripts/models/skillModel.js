/*global skillsetApp, Backbone*/

skillsetApp.Models = skillsetApp.Models || {};

(function () {
    'use strict';

    skillsetApp.Models.ApplicationModel = Backbone.Model.extend({
    	defaults: {
			skill: 'sample',
			score: 5
		}
    });

})();

