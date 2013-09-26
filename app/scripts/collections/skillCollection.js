/*global skillsetApp, Backbone*/

skillsetApp.Collections = skillsetApp.Collections || {};

(function () {
    'use strict';

    skillsetApp.Collections.ApplicationCollection = Backbone.Collection.extend({
        model        :  skillsetApp.Models.ApplicationModel,
        localStorage : 	new Backbone.LocalStorage('skillset-backbone')
    });

	skillsetApp.skills = new skillsetApp.Collections.ApplicationCollection();

})();



